import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import '../css/form.css'
import { FormData } from '../data/FormData';
import Footer from '../Layout/DefaultLayout/Footer';
import Box from '@mui/material/Box';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import CurrencyRubleIcon from '@mui/icons-material/CurrencyRuble';
import Button from '@mui/material/Button';
import CarsData from '../data/CarsData';





function RentingForm() {

    const { id } = useParams()

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const [form, setForm] = useState(FormData)

    const [pickLocation, setPickLocation] = useState('')
    const [dropLocation, setDropLocation] = useState('')

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')



    let formResult = {
        name: { name },
        address: { address },
        phone: { phone },
        city: { city },
        pickUp: { pickLocation },
        dropOff: { dropLocation }
    }



    const handleName = (e) => {
        setName(e.target.value)
    }

    const handlePhone = (e) => {
        setPhone(e.target.value)
    }

    const handleAddress = (e) => {
        setAddress(e.target.value)
    }

    const handleCity = (e) => {
        setCity(e.target.value)
    }

    const handlePickLocation = (e) => {
        setPickLocation(e.target.value)
    }

    const handleDropLocation = (e) => {
        setDropLocation(e.target.value)
    }

    console.log(formResult)

    const handleSubmit = () => {
        let tempForm = FormData
        tempForm.push(formResult)
        setForm(tempForm)
        console.log(FormData)
    }




    return (
        <div>
            <nav className="navbar">
                <div className="right_nav">
                    <h1>MORENT</h1>
                </div>
                <ul className="nav_icons">
                    <li className="nav-icons_link heart">
                        <FavoriteIcon />
                    </li>
                    <li className="nav-icons_link bell">
                        <NotificationsIcon />
                    </li>
                    <li className="nav-icons_link settings">
                        <SettingsIcon />
                    </li>
                    <li className="nav-icons_link avatar">
                        <img src="" alt="" />
                    </li>
                </ul>
            </nav>

            {/* FORM */}

            <div className="renting-form_container">
                <div className="renting_form">
                    <div className="billing_info">
                        <h2 className='billing-info_text'>Billing Info</h2>
                        <h4 className='billing-info_alert'>Please enter your billing info</h4>
                        <div className="billing_inputs">
                            <div className="billing_col-1">
                                <div className="form_name mb-40">
                                    <h4 className="billing-text">Name</h4>
                                    <input type="text" placeholder='Your name' className='billing_input' value={name} onChange={handleName} />
                                </div>
                                <div className="form_address">
                                    <h4 className="billing-text">Address</h4>
                                    <input type="text" placeholder='Address' className='billing_input' value={address} onChange={handleAddress} />
                                </div>
                            </div>
                            <div className="billing_col-2">
                                <div className="form_phone-number mb-40">
                                    <h4 className="billing-text">Phone Number</h4>
                                    <input type="text" placeholder='Phone number' className='billing_input' value={phone} onChange={handlePhone} />
                                </div>
                                <div className="form_town">
                                    <h4 className="billing-text">Town/City</h4>
                                    <input type="text" placeholder='Town or city' className='billing_input' value={city} onChange={handleCity} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rental_info">
                        <h2 className='billing-info_text'>Rental Info</h2>
                        <h4 className='billing-info_alert'>Please select your rental date</h4>
                        <div className="form_pick-up">
                            <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                                id='pickup_check'
                            />
                            <label htmlFor="pickup_check" className='billing-text'>Pick-Up</label>
                            <div className="form_locations">
                                <h4 className="billing-text">Locations</h4>
                                <Box sx={{ minWidth: 40 }} className='select_locations'>
                                    <FormControl sx={{ m: 1, minWidth: 386 }} size="small" className='no_border '>
                                        <InputLabel id="demo-simple-select-label" className='no_border '>Locations</InputLabel>
                                        <Select className='no_border '
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Locations"
                                            value={pickLocation}
                                            onChange={handlePickLocation}
                                        >
                                            <MenuItem value='HN'>Ha Noi</MenuItem>
                                            <MenuItem value='HCM'>HCM</MenuItem>
                                            <MenuItem value='DN'>Da Nang</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="form_date">
                                <h4 className="billing-text">Date</h4>
                            </div>
                            <div className="form_time">
                                <h4 className="billing-text">Time</h4>
                            </div>
                        </div>
                        <div className="form_drop-off">
                            <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                                id='dropoff_check'
                            />
                            <label htmlFor="dropoff_check" className='billing-text'>Drop-off</label>
                            <div className="form_locations">
                                <h4 className="billing-text">Locations</h4>
                                <Box sx={{ minWidth: 40 }} className='select_locations'>
                                    <FormControl sx={{ m: 1, minWidth: 386 }} size="small" className='no_border '>
                                        <InputLabel id="demo-simple-select-label" className='no_border '>Locations</InputLabel>
                                        <Select className='no_border '
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Locations"
                                            value={dropLocation}
                                            onChange={handleDropLocation}
                                        >
                                            <MenuItem value='HN'>Ha Noi</MenuItem>
                                            <MenuItem value='HCM'>HCM</MenuItem>
                                            <MenuItem value='DN'>Da Nang</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="form_date">
                                <h4 className="billing-text">Date</h4>
                            </div>
                            <div className="form_time">
                                <h4 className="billing-text">Time</h4>
                                <h1>{FormData}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="payment">
                        <h2 className='billing-info_text'>Payment Method</h2>
                        <h4 className='billing-info_alert'>Please enter your payment method</h4>
                        <div className="credit_card">
                            <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                                id='credit_check'
                            />
                            <label htmlFor="credit_check" className='mb-40 billing-text'>Credit Card</label>
                            <div className="billing_inputs">
                                <div className="billing_col-1">
                                    <div className="form_card-num mb-40">
                                        <h4 className="billing-text">Card Number</h4>
                                        <input type="text" placeholder='Card number' className='billing_input' />
                                    </div>
                                    <div className="form_card-holder">
                                        <h4 className="billing-text">Card Holder</h4>
                                        <input type="text" placeholder='Card holder' className='billing_input' />
                                    </div>
                                </div>
                                <div className="billing_col-2">
                                    <div className="form_ex-date mb-40">
                                        <h4 className="billing-text">Expration Date</h4>
                                        <input type="text" placeholder='Expration date' className='billing_input' />
                                    </div>
                                    <div className="form_cvc">
                                        <h4 className="billing-text">CVC</h4>
                                        <input type="text" placeholder='CVC' className='billing_input' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="other_payment mb-40 mt-40">
                            <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                                id='paypal_check'
                            />
                            <label htmlFor="paypal_check" className='mb-40 billing-text'>PayPal</label>
                            <CurrencyRubleIcon className='pt-7' />
                        </div>
                        <div className="other_payment mb-40">
                            <Checkbox
                                {...label}
                                icon={<RadioButtonUncheckedIcon />}
                                checkedIcon={<RadioButtonCheckedIcon />}
                                id='bitcoin_check'
                            />
                            <label htmlFor="bitcoin_check" className='mb-40 billing-text'>Bitcoin</label>
                            <CurrencyBitcoinIcon className='pt-7' />
                        </div>
                    </div>
                    <div className="confirmation">
                        <h2 className='billing-info_text'>Confirmation</h2>
                        <h4 className='billing-info_alert'>We are getting to the end. Just few clicks and your rental is ready!</h4>
                        <div className="other_payment mb-40 mt-40">
                            <Checkbox
                                {...label}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                id='confirm-1'
                            />
                            <label htmlFor="confirm-1" className='billing-text'>I agree with sending an Marketing and newsletter emails. No spam, promissed!</label>
                        </div>
                        <div className="other_payment mb-40">
                            <Checkbox
                                {...label}
                                sx={{ '& .MuiSvgIcon-root': { fontSize: 28 } }}
                                id='confirm-2'
                            />
                            <label htmlFor="confirm-2" className='billing-text'>I agree with our terms and conditions and privacy policy.</label>
                        </div>
                        <Button variant="contained" className='form-renting_btn' onClick={handleSubmit}>
                            Rent Now
                        </Button>
                    </div>
                </div>
                <div className="rental_summary">
                    <h3 className='billing-info_text'>Rental Summary</h3>
                    <h4 className='billing-info_alert rental-summary_alert'>Prices may change depending on the length of the rental and the price of your rental car.</h4>
                    {
                        CarsData.filter(el => el.id === id)
                            .map((car, index) => {
                                return (
                                    <div key={index} className="car-info_confirmed">
                                        <div className="car-name_confirmed">
                                            <img src={car.img} alt="" width='200px' height='150px' />
                                            <h4 className='car_name-confirmed'>{car.name}</h4>
                                        </div>
                                        <div className="car-price_confirmed">
                                            <div className="price-div">
                                                <h4 className='billing-info_alert'>Price</h4>
                                                <h4>${car.price}</h4>
                                            </div>
                                            <div className="price-div">
                                                <h4 className='billing-info_alert'>Tax</h4>
                                                <h4>${(0.1 * car.price).toFixed(2)}</h4>
                                            </div>
                                            <div className="price-div">
                                                <h4 className='billing-info_alert'>SubTotal</h4>
                                                <h4>${(0.1 * car.price + car.price).toFixed(2)}</h4>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                    }
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RentingForm