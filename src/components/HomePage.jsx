import {
  Card,
  Page,
  Layout,
  TextContainer,
  Image,
  Stack,
  Link,
  Heading,
} from "@shopify/polaris";

import trophyImgUrl from "../assets/home-trophy.png";
import Dashboard from "./dashboard/Dashboard";

import { ProductsCard } from "./ProductsCard";

export function HomePage() {
  return (
    <Page fullWidth>
		<Layout>
			<Dashboard/>
		 </Layout>
    </Page> 
  );
}
