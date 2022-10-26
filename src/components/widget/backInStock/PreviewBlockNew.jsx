import { Select } from '@shopify/polaris'
import { useState, useCallback, useContext } from 'react'
import CountryList from 'country-list-with-dial-code-and-flag'
import { useEffect } from 'react'
import React from 'react'
import { MyContext } from '../../../context/MyContext'
import { BackInStockContext } from '../../../context/BackInStockContext'

const PreviewBlockNew = ({
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
}) => {
  const {
    emailChecked,
    smsChecked,
    notifyEmail,
    setnotifyEmail,
    notifySMS,
    setnotifySMS,
  } = useContext(MyContext)
  // const {popHeader, popSubHeader, popButtonText, popButtonColor, popNote, popSuccess, prevEmail, setPrevEmail, prevNum, setPrevNum} = useContext(BackInStockContext)

  const [countries, setCountries] = useState([
    { label: '+91 India', value: 'IND' },
  ])

  // const [selected, setSelected] = useState();

  // const handleSelectChange = useCallback((value) => {console.log(value);setSelected(value)}, []);

  // useEffect(()=>{
  //  const temp = []
  // CountryList.map((country) => {
  //         temp.push({
  //             label:`${country.flag} `,
  //             value:country.code,
  //             dial_code:country.dial_code
  //         })
  // })

  // // setSelected(temp[0].value)
  // setCountries(temp)
  // },[])

  const handelChangeEmail = useCallback((e) => {
    setnotifyEmail(e.target.checked)
    console.log(notifyEmail)
  })
  const handelChangeSMS = useCallback((e) => {
    setnotifySMS(e.target.checked)
    console.log(notifySMS)
  })

  const handelChangeCheckbox = (e) => {
    // console.log(e.target.checked)
    if (e.target.value == 'Email') setnotifyEmail(e.target.checked)
    else if (e.target.value == 'SMS') setnotifySMS(e.target.checked)

    console.log('email:', notifyEmail)
    console.log('sms:', notifySMS)
  }

  const handelFlag = (e) => {
    const flag = e.target.value
    setPrevNum(flag)
    console.log(flag)
  }
  return (
    <div className="preview_notify">
      <div className="Preview blockes">
        <h1>Preview</h1>
      </div>
      <div
        id="notify-me-block"
        className="notify_me bg-white preview-border-all  border-all"
      >
        <div className="Card">
          <div className="Card__Header">
            <h2 className="Card-Heading">{popHeader}</h2>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div class="Card__Section">
            <p>{popSubHeader}</p>
          </div>
          <div className="notify_me_form">
            <form action="submit">
              <div className="product_variant blockes">
                <p>Product name here</p>
                <div className="input">
                  <div className="input_fields">
                    <div className="btn_text">
                      <label htmlFor="text">Variant</label>
                      <input type="text" placeholder="Black/Large" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="notify blockes">
                <div className="notification blockes">
                  <span>Notify me via</span>
                  {emailChecked && smsChecked ? (
                    <div className="checkbox">
                      <div className="form-group">
                        <input
                          onChange={(e) => handelChangeEmail(e)}
                          type="checkbox"
                          id="email"
                          value="Email"
                        />
                        <label htmlFor="email">Email</label>
                      </div>
                      <div className="form-group">
                        <input
                          onChange={(e) => handelChangeSMS(e)}
                          type="checkbox"
                          id="sms"
                          value="SMS"
                        />
                        <label htmlFor="sms">SMS</label>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </div>
              </div>
              {emailChecked && smsChecked ? (
                <>
                  <div className="notify_email input blockes">
                    <div className="input_fields">
                      <div className="btn_text">
                        <label htmlFor="text">Email</label>
                        <input
                          type="text"
                          placeholder="username@email.com"
                          value={prevEmail}
                          onChange={(event) => setPrevEmail(event.target.value)}
                        />
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  {emailChecked ? (
                    <>
                      <div className="notify_email input blockes">
                        <div className="input_fields">
                          <div className="btn_text">
                            <label htmlFor="text">Email</label>
                            <input
                              type="text"
                              placeholder="username@email.com"
                              value={prevEmail}
                              onChange={(event) =>
                                setPrevEmail(event.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    ''
                  )}
                  {smsChecked ? (
                    <div className="notify_number input blockes">
                      <label htmlFor="text">Mobile Number</label>
                      {/* <FlagSelect label={"Mobile number"} /> */}
                      <div className="notify_number_block">
                        <div className="flag_box">
                          {/* <Select
                                                options={countries}
                                                onChange={handleSelectChange}
                                                value={selected}
                                                /> */}
                          {/* {CountryList.map((option, index) => {
                                                        return <option value={selected} key={index} >
                                                            {option.flag}
                                                        </option>
                                                    })} */}
                          <select name="flag" onChange={(e) => handelFlag(e)}>
                            {CountryList.map((option, index) => (
                              <option key={index} value={option.dial_code}>
                                {option.flag}
                              </option>
                            ))}
                          </select>
                        </div>

                        <div className="number_box">
                          <div className="input_fields">
                            <div className="btn_text">
                              <input
                                type="text"
                                placeholder=""
                                value={prevNum}
                                onChange={(event) =>
                                  setPrevNum(event.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    ''
                  )}
                </>
              )}

              <div className="notify_btn blockes">
                <button
                  className="btn btn-notify "
                  style={{ backgroundColor: `${popButtonColor}` }}
                >
                  {popButtonText}
                </button>
                <div className="info">{popNote}</div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div
        id="success-block"
        className="success bg-white border-all preview-border-all"
      >
        <div className="Card">
          <div className="Card__Header blockes">
            <h2 className="Card-Heading">Success!</h2>
            <i className="fa-solid fa-xmark"></i>
          </div>
          <div className="Card__Section">
            <p>{popSuccess}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PreviewBlockNew
