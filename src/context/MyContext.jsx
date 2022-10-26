import React,{useState,createContext} from 'react'

export const MyContext = createContext();

export const MyProviders = props =>{
  const [emailChecked, setemailChecked] = useState(false);
  const [smsChecked, setsmsChecked] = useState(false);

  const[notifyEmail,setnotifyEmail] = useState(true)
  const[notifySMS,setnotifySMS] = useState(true)

  //product title

  const[productName,setProductName] = useState('')




    return (
            <MyContext.Provider 
            value=
            {
              // {
              //   email:[emailChecked,setemailChecked],
              //   sms:[smsChecked,setsmsChecked],
              //   notifyemail:[notifyEmail,setnotifyEmail],
              //   notifysms:[notifySMS,setnotifySMS],
              //   prodName:[productName,setProductName]
              // }
              {
            emailChecked, setemailChecked,
            smsChecked, setsmsChecked,
            notifyEmail,setnotifyEmail,
            notifySMS,setnotifySMS,
            productName,setProductName
              }
            }>
                {props.children}
            </MyContext.Provider>
    );
}
