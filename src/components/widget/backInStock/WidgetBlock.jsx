import React, { useState, useContext, useEffect } from 'react'
import ReactSwitch from 'react-switch';
import ColorTextInput from '../../common/ColorTextInput';
import TextInput from '../../common/TextInput';
import { BackInStockContext } from '../../../context/BackInStockContext';


const WidgetBlock = ({setIsDisabled, buttonText, setButtonText, buttonColor, setButtonColor}) => {
  const [checked,setChecked] = useState(true)
  const handleChange= ()=> {
    setChecked(!checked);
	setIsDisabled(false)

  }
  //context state for button text and button color
//   const {setIsDisabled, buttonText, setButtonText, buttonColor, setButtonColor} = widgetStates
  useEffect(() => {
	// setIsDisabled(false)
  }, [buttonText,buttonColor])
  
//   const handeltextchange = (e) => {
// 	setButtonText(e.target.value)
// 	console.log(e.target.value)
// 	console.log(buttonText)
//   }
  return (
        <div className="row widget_wrapper">
           
            <div className="col-md-12 ">
                <div className="row widget_top">
                    <h1>Widget</h1>
                    <p>Edit the details below how you want to appear the button on your site</p>
                </div>
				<div className="widget_block ">
					<div className="row widget_bottom">
						{/* <div className="widget_unable_disable"> */}
							<div className="col-md-4">
								<div className="unable_disable bg-white border-all">
									<div className="unable_disable_top">
										<p>Enable/Disale Widget</p>
									</div>
									<div className="button">
									<p>Widget is <span className='span_bold'>{checked?'disabled':'enabled'}</span></p>
										<ReactSwitch checkedIcon={false} uncheckedIcon={false} onColor="#008060" onChange={handleChange} checked={!checked} />
									</div>
								</div>

							</div>
							<div className="col-md-8 ">
								<div className="widget_btn_wrapper">
									<div className="inputs-- bg-white border-all">
										<div className="notification_type">
											{/* <div className="widget_bottom_input">   */}
											<TextInput label={'Button text'}  state1={setButtonText} />
											<ColorTextInput label={'Button color'} state1={setButtonColor} state2={buttonColor}/>
											{/* </div> */}
										</div>
									</div>
								</div>

							</div>
						{/* </div> */}
					</div>
				</div>
            </div>
       
        </div>
  )
}

export default WidgetBlock