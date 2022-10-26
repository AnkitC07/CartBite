import {Checkbox} from '@shopify/polaris';
import {useState, useCallback} from 'react';

const CheckboxExample = (props)=> {

  return (
    <Checkbox
      label={props.label}
      checked={props.checked}
      onChange={props.onChange}
    />
  );
}
export default CheckboxExample