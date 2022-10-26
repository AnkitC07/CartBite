import {Select} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import CountryList from 'country-list-with-dial-code-and-flag'
import { useEffect } from 'react';

const FlagSelect = (props) => {
    const [countries,setCountries] = useState([{label: '+91 India', value: 'IND'}])
    
    const [selected, setSelected] = useState('IND');

    const handleSelectChange = useCallback((value) => {console.log(value);setSelected(value)}, []);


useEffect(async()=>{
// console.log(CountryList)
const temp = []
CountryList.map((country) => {
        temp.push({
            label:`${country.flag}  `,
            value:country.code,
            dial_code:country.dial_code
        })
})

const res = await fetch('https://restcountries.com/v2/all')
const data = await res.json()
console.log(data)


setSelected(temp[0].value)
setCountries(temp)
},[])

  return (  
    <div className="notify_number_block">
      
      <div className="flag_box">
        <Select
          options={countries}
          onChange={handleSelectChange}
          value={selected}
        />
      </div>

      <div className="number_box">
        <div className="input_fields">
          <div className="btn_text">
              {/* <label htmlFor="text">{props.label}</label> */}
              <input type="text" placeholder={props.placeholder} value={props.value}/>
          </div>
        </div>
      </div>
    </div>
  );

}

export default FlagSelect