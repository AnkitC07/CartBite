import { Page, Card, Button } from "@shopify/polaris";
// import {Grid} from "@shopify/polaris"
import React, { useCallback } from "react";
import { NavLink } from "react-router-dom";
import EmailAutomation from "./EmailAutomation";

function Automation() {
  // const handelonClick = useCallback(
  //   () =>{
  //     console.log("inside");
  //     <EmailAutomation />
  //   },
  //   [],
  // )
   
  return (
    <div className="Automation_box">
      <div className="automation_inner">
        <h2>Email Automations</h2>
        <p>
          These are trigger-based campaigns that send emails to user based on
          recent actions performed by them on the store.
        </p>
      </div>
      <Page fullWidth>
        <div className="Back-in-stock-email">
          <h3>Back In Stock Email</h3>
            <p>
              Send email to the subscriber when an out-of-stock product
              becomes available again.
            </p>
            <div className="confi_btn">
            <NavLink to='/emailAutomation' ><Button  primary>Configure</Button></NavLink>
            </div>
        </div>
        <div className="Price-drop-email">
          <h3>Price Drop Email</h3>
            <p>
              Send email to the subscriber when their is a price drop on the
              product.
            </p>
            <div className="confi_btn">
              <NavLink to='/emailAutomation' ><Button  primary>Configure</Button></NavLink>
            </div>
        </div>
        {/* <Grid>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 12 }}>
            <Card title="Back In Stock Email" sectioned>
              <p>
                Send email to the subscriber when an out-of-stock product
                becomes available again.
              </p>
              <div className="confi_btn">
                <Button primary>Configure</Button>
              </div>
            </Card>
          </Grid.Cell>
          <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 12, xl: 13 }}>
            <Card title="Price Drop Email" sectioned>
              <p>
                Send email to the subscriber when their is a price drop on the
                product.
              </p>
              <div className="confi_btn">
                <Button primary>Configure</Button>
              </div>
            </Card>
          </Grid.Cell>
        </Grid> */}
      </Page>
    </div>
  );
}

export default Automation;
