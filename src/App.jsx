import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import './styles/App.css'
import {
  Provider as AppBridgeProvider,
  useAppBridge,
} from '@shopify/app-bridge-react'
import { authenticatedFetch } from '@shopify/app-bridge-utils'
import { Redirect } from '@shopify/app-bridge/actions'
import { AppProvider as PolarisProvider } from '@shopify/polaris'
import translations from '@shopify/polaris/locales/en.json'
import '@shopify/polaris/build/esm/styles.css'

import 'typeface-roboto'

// import { HomePage } from "./components/HomePage";

import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import Dashboard from "./components/dashboard/Dashboard";
// import Nav from "./components/navbar/Nav";
// import BackInStock from "./components/widget/backInStock/BackInStock";
// import Product from "../src/components/Product"
// import Automation from "../src/components/Automation"

// import EmailAutomation from "./components/EmailAutomation";
// import ProductSingle from "./components/ProductSingle";
import { MyContext, MyProviders } from './context/MyContext'
import { BackInStockProviders } from './context/BackInStockContext'
import { useContext } from 'react'
import MainApp from './MainApp'

export default function App() {
  // const {prodName} = useContext(MyContext)
  // const[productName,setProductName] = prodName
  return (
    <PolarisProvider i18n={translations}>
      <AppBridgeProvider
        config={{
          apiKey: process.env.SHOPIFY_API_KEY,
          host: new URL(location.href).searchParams.get('host'),
          forceRedirect: true,
        }}
      >
        <MyProvider>
          {/* <BrowserRouter>
              <Nav />
                <Routes>
                  <Route path="/" element={<Dashboard/>}></Route>
                  
                    <Route path="/backInStock" element={<BackInStock />}></Route>
                  
                  <Route path="/product" element={<Product />}></Route>
                  <Route path="/automation" element={<Automation />}></Route>
                  <Route path="/emailAutomation" element={<EmailAutomation/>}></Route>

                  <Route exact path="/productSingle" element={<ProductSingle productName={productName}/>}></Route>
                 
                </Routes>
          </BrowserRouter> */}
          <BackInStockProviders>
            <MyProviders>
              <BrowserRouter>
                <MainApp />
              </BrowserRouter>
            </MyProviders>
          </BackInStockProviders>
        </MyProvider>
      </AppBridgeProvider>
    </PolarisProvider>
  )
}

function MyProvider({ children }) {
  const app = useAppBridge()

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      credentials: 'include',
      fetch: userLoggedInFetch(app),
    }),
  })

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

export function userLoggedInFetch(app) {
  const fetchFunction = authenticatedFetch(app)

  return async (uri, options) => {
    const response = await fetchFunction(uri, options)

    if (
      response.headers.get('X-Shopify-API-Request-Failure-Reauthorize') === '1'
    ) {
      const authUrlHeader = response.headers.get(
        'X-Shopify-API-Request-Failure-Reauthorize-Url',
      )

      const redirect = Redirect.create(app)
      redirect.dispatch(Redirect.Action.APP, authUrlHeader || `/auth`)
      return null
    }

    return response
  }
}
