import React,{useState,createContext} from 'react'

export const BackInStockContext = createContext();

export const BackInStockProviders = props =>{


    const[isDisabled,setIsDisabled] = useState(true)
    //Button Text and Button Color
    const [buttonText, setButtonText] = useState('');
    const [buttonColor, setButtonColor] = useState('');
    //POPUP states
    const [popHeader, setPopHeader] = useState('Notify me when available');
    const [popSubHeader, setPopSubHeader] = useState('We will send you notification as soon as this product is available again.');
    const [popButtonText, setPopButtonText] = useState('Notify me');
    const [popButtonColor, setPopButtonColor] = useState('#000000');
    const [popNote, setPopNote] = useState("We respect your privacy and don't share your email with anybody");
    const [popSuccess, setPopSuccess] = useState('You subscribed notification successfully');
    //PREVIEW states
    const [prevEmail, setPrevEmail] = useState('');
    const [prevNum, setPrevNum] = useState('');




    
  


  

      return (
              <BackInStockContext.Provider 
              value=
              {
                {
                  isDisabled,setIsDisabled,
                  buttonText, setButtonText,
                  buttonColor, setButtonColor,
                  popHeader, setPopHeader,
                  popSubHeader, setPopSubHeader,
                  popButtonText, setPopButtonText,
                  popButtonColor, setPopButtonColor,
                  popNote, setPopNote,
                  popSuccess, setPopSuccess,
                  prevEmail, setPrevEmail,
                  prevNum, setPrevNum
                  
                }
              }>
                  {props.children}
              </BackInStockContext.Provider>
      );
  }
