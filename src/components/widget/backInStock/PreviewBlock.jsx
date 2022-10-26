import React, { useContext } from 'react'
import FlagSelect from './FlagSelect'
import Notification from './Notification'
import TextInput from '../../common/TextInput'
import { BackInStockContext } from '../../../context/BackInStockContext'

const PreviewBlock = () => {
	const {popHeader, popSubHeader, popButtonText, popButtonColor, popNote, popSuccess, prevEmail, prevNum} = useContext(BackInStockContext)
  return (
    <div className="preview_notify">
				<div className="Preview blockes">
					<h1>Preview</h1>
				</div>
				<div className="notify_me bg-white border-all">
					<div class="Polaris-Card">
						<div class="Polaris-Card__Header">
							<h2 class="Polaris-Heading">Notify me when available</h2><i class="fa-solid fa-xmark"></i>
						</div>
						<div class="Polaris-Card__Section">
							<p>We will send you a notification as soon as this product is availabe again</p>
						</div>
						<div className="notify_me_form">
							<form action="submit">
								<div className="product_variant blockes">
									<p>Product name here</p>
									<div className="input">
										<TextInput label={"Variant"} placeholder={"Black/Large"} />
									</div>
								</div>
								<div className="notify blockes">
									<Notification  header={'Notify me via'} label1={'Email'} label2={'SMS'}/>
								</div>
								<div className="notify_email input blockes">
									<TextInput label={"Email"} placeholder={"username@email.com"} />
								</div>
								<div className="notify_number input blockes">
									<label for="text">Mobile Number</label>
									<FlagSelect label={"Mobile number"} />
								</div>
								<div className="notify_btn blockes">
									<button className='btn btn-notify '>Notify me</button>
                                    <div className="info">
                                        We respect your privacy and don't share your email with anybody
                                    </div>
								</div>
							</form>
						</div> 
					</div>
				</div>
				<div className="success bg-white border-all">
                    <div class="Polaris-Card">
                            <div class="Polaris-Card__Header blockes">
                                <h2 class="Polaris-Heading">Success!</h2><i class="fa-solid fa-xmark"></i>
                            </div>
                            <div class="Polaris-Card__Section">
                                <p>Your notification has been registered.</p>
                            </div>
                            
                        </div>
                    </div>
	</div>
  )
}

export default PreviewBlock