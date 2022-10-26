import {
  IndexTable,
  TextStyle,
  Card,
  Button,
  Modal,
  TextContainer,
} from "@shopify/polaris";
import React from "react";
import { Icon } from "@shopify/polaris";
import { ArrowLeftMinor } from "@shopify/polaris-icons";
import { useState, useCallback } from "react";
import SwitchExample from "./switch";
import ModalPopup from "./ModalPopup.jsx";
import { NavLink } from "react-router-dom";

function ProductSingle({productName}) {
  const customers = [
    {
      id: "3411",
      url: "customers/341",
      variant: "Black/Small",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3511",
      url: "customers/351",
      variant: "Black/Medium",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3611",
      url: "customers/361",
      variant: "Black/Large",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3711",
      url: "customers/371",
      variant: "White/Small",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3811",
      url: "customers/381",
      variant: "White/Medium",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3911",
      url: "customers/391",
      variant: "White/Large",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3111",
      url: "customers/311",
      variant: "Yellow/Small",
      quantity: 200,
      sku: 123456,
      Status: 1,
    },
    {
      id: "3211",
      url: "customers/321",
      variant: "Yellow/Large",
      quantity: 200,
      sku: 123456,
      Status: 0,
    },
  ];
  const resourceName = {
    singular: "customer",
    plural: "customers",
  };

  const rowMarkup = customers.map(
    ({ id, variant, quantity, sku, Status }, index) => (
      <IndexTable.Row id={id} key={id} position={index}>
        <IndexTable.Cell>
          <TextStyle variation="strong">{variant}</TextStyle>
        </IndexTable.Cell>
        <IndexTable.Cell>{quantity}</IndexTable.Cell>
        <IndexTable.Cell>{sku}</IndexTable.Cell>
        <IndexTable.Cell>
          <SwitchExample status = {Status}/>
        </IndexTable.Cell>
      </IndexTable.Row>
    )
  );

  return (
    <div className="product_single_box_main">
      <div className="back_box">
        <h2>
          <NavLink to='/product'><Icon source={ArrowLeftMinor} color="base" /></NavLink>
          {productName}
          <SwitchExample />
        </h2>
      </div>
      <div className="product_single_box">
        <div className="product_content_box">
          <h3>{productName}</h3>
          <div className="variant_search">
            <p>10 variants</p>
          </div>
          <Card>
            <IndexTable
              resourceName={resourceName}
              itemCount={customers.length}
              headings={[
                { title: "Variant" },
                { title: "Quantity" },
                { title: "Sku" },
                { title: "Status" },
              ]}
              selectable={false}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </div>
      </div>
      <ModalPopup />
    </div>
  );
}

export default ProductSingle;
