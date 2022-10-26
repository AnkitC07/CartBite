import { Select } from '@shopify/polaris';
import React, { useCallback, useState } from 'react'

const LangSelect = () => {

    const [selected, setSelected] = useState('today');

    const handleSelectChange = useCallback((value) => setSelected(value), []);

    const options = [
        {label: 'English', value: 'English'}
    ];

  return (
    <Select
    
      options={options}
      onChange={handleSelectChange}
      value={selected}
    />
  )
}

export default LangSelect