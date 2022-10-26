import React, { Component, useState } from "react";
import Switch from "react-switch";

const SwitchExample = ({status}) => {
  
  const [checked,setChecked] = useState(status)
  
  const handleChange= ()=> {
    setChecked(!checked);
  }


  
    return (
      <label>
        <Switch onColor="#008060" onChange={handleChange} checked={checked} />
      </label>
    );
  
}

export default SwitchExample;
