import React, { useContext, useEffect, useState } from 'react'
import Switch from 'react-switch'
import CheckboxExample from '../../common/Checkbox'
import ColorTextInput from '../../common/ColorTextInput'
import Notification from './Notification'
import PopUp from './PopUpBlock'
import PreviewBlock from './PreviewBlock'
import PreviewBlockNew from './PreviewBlockNew'
import TextAreaInput from '../../common/TextAreaInput'
import TextInput from '../../common/TextInput'
import WidgetBlock from './WidgetBlock'
import { BackInStockContext } from '../../../context/BackInStockContext'
import { useCallback } from 'react'

const BackInStock = () => {
  const {
    isDisabled,
    setIsDisabled,
    buttonText,
    setButtonText,
    buttonColor,
    setButtonColor,
    popHeader,
    setPopHeader,
    popSubHeader,
    setPopSubHeader,
    popButtonText,
    setPopButtonText,
    popButtonColor,
    setPopButtonColor,
    popNote,
    setPopNote,
    popSuccess,
    setPopSuccess,
    prevEmail,
    setPrevEmail,
    prevNum,
    setPrevNum,
  } = useContext(BackInStockContext)

  const widgetStates = {
    setIsDisabled,
    buttonText,
    setButtonText,
    buttonColor,
    setButtonColor,
  }
  const popStates = {
    popHeader,
    setPopHeader,
    popSubHeader,
    setPopSubHeader,
    popButtonText,
    setPopButtonText,
    popButtonColor,
    setPopButtonColor,
    popNote,
    setPopNote,
    popSuccess,
    setPopSuccess,
  }
  const previewStates = {
    popHeader,
    popSubHeader,
    popButtonText,
    popButtonColor,
    popNote,
    popSuccess,
    prevEmail,
    setPrevEmail,
    prevNum,
    setPrevNum,
  }

  const [saveData, setSaveData] = useState({
    topbuttonText: `${buttonText}`,
    topbuttonColor: `${buttonColor}`,
    popHeader: `${popHeader}`,
    popSubHeader: `${popSubHeader}`,
    popButtonText: `${popButtonText}`,
    popNote: `${popButtonText}`,
    popButtonColor: `${popButtonColor}`,
    popSuccess: `${popSuccess}`,
  })

  const handelSaveClick = useCallback(() => {
    console.log(saveData)
  }, [saveData])

  useEffect(() => {
    {
      buttonText &&
      buttonColor &&
      popHeader &&
      popSubHeader &&
      popButtonText &&
      popButtonText &&
      popButtonColor &&
      popSuccess
        ? setIsDisabled(false)
        : setIsDisabled(true)
    }
  }, [
    buttonText,
    buttonColor,
    popHeader,
    popSubHeader,
    popButtonText,
    popButtonText,
    popButtonColor,
    popSuccess,
  ])

  return (
    <div className="container">
      <div className="row ">
        <div className="col-md-12 header_wrapper">
          <div className="header">
            <span>Back In Stock</span>
          </div>
          <div className="header_btn">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handelSaveClick}
              disabled={isDisabled}
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <WidgetBlock {...widgetStates} />
      <div className="row">
        <div className="col-md-6 Popup">
          <PopUp {...popStates} />
        </div>
        <div className="col-md-6 Notify">
          {/* <PreviewBlock />	 */}
          <PreviewBlockNew {...previewStates} />
        </div>
      </div>
      <div className="row">
        <div className="col-md-12 bottom_btn_wrapper">
          <div className="header_btn bottom_btn">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handelSaveClick}
              disabled={isDisabled}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BackInStock
