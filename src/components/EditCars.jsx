import React, { useState, useEffect } from 'react'
import { connect, useSelector, useDispatch } from 'react-redux'
import { editCars } from '../redux/actions/actions';
import CarsData from '../data/CarsData';
import { NavLink, useParams } from 'react-router-dom'
import SettingsIcon from '@mui/icons-material/Settings';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';


function EditCars() {


    const { id } = useParams()
    // console.log(id)

    const [name, setName] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState()
    const [capacity, setCapacity] = useState()
    const [engine, setEngine] = useState('')
    const [image, setImage] = useState('')
    const [fuel, setFuel] = useState('')


    const carDataRedux = useSelector(state => state.cars)

    let carChanged = {
        id: id,
        name: name,
        type: type,
        price: price,
        capacity: capacity,
        engine: engine,
        img: image,
        fuel: fuel
    }
    console.log(carChanged)


    const dispatch = useDispatch()

    const handleSubmit = () => {
        // dispatch edit action here:
        dispatch(editCars(carChanged))
    }

    // console.log(carDataRedux)
    return (
        <div>
            <div>
                <nav className="navbar">
                    <NavLink to={'/'} className='navigation_link'>
                        <div className="right_nav">
                            <h1>MORENT</h1>
                        </div>
                    </NavLink>
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
                <div className="billing_info">
                    {/* <h2>{carDataRedux}</h2> */}
                    <h2 className='billing-info_text'>Edit Cars Here</h2>
                    <h4 className='billing-info_alert'>Please edit your car info</h4>
                    <div className="billing_inputs">
                        <div className="billing_col-1">
                            <div className="form_name mb-40">
                                <h4 className="billing-text">Car Name</h4>
                                <input type="text" placeholder='Car name' className='billing_input' value={name} onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form_address mb-40">
                                <Box sx={{ minWidth: 40 }} className=''>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select_1"
                                            label="Type"
                                            value={type}
                                            onChange={(e) => setType(e.target.value)}
                                        >
                                            <MenuItem value='Sport'>Sport</MenuItem>
                                            <MenuItem value='SUV'>SUV</MenuItem>
                                            <MenuItem value='MPV'>MPV</MenuItem>
                                            <MenuItem value='Sedan'>Sedan</MenuItem>
                                            <MenuItem value='Coupe'>Coupe</MenuItem>
                                            <MenuItem value='Hatchback'>Hatchback</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Box>
                            </div>
                            <div className="form_address">
                                <h4 className="billing-text">Capacity</h4>
                                <input type="text" placeholder='Capacity' className='billing_input' value={capacity} onChange={(e) => setCapacity(e.target.value)} />
                            </div>
                        </div>
                        <div className="billing_col-2">
                            <div className="form_phone-number mb-40">
                                <h4 className="billing-text">Price</h4>
                                <input type="text" placeholder='Price' className='billing_input' value={price} onChange={(e) => setPrice(e.target.value)} />
                            </div>
                            <div className="form_town mb-40">
                                <h4 className="billing-text">Engine</h4>
                                <input type="text" placeholder='Engine' className='billing_input' value={engine} onChange={(e) => setEngine(e.target.value)} />
                            </div>
                            <div className="form_town mb-40">
                                <h4 className="billing-text">Image</h4>
                                <input type="text" placeholder='Paste link img here' className='billing_input' value={image} onChange={(e) => setImage(e.target.value)} />
                            </div>
                            <div className="form_phone-number mb-40">
                                <h4 className="billing-text">Fuel</h4>
                                <input type="text" placeholder='Fuel Capacity' className='billing_input' value={fuel} onChange={(e) => setFuel(e.target.value)} />
                            </div>
                        </div>
                    </div>
                    <Button variant="contained" className='add_btn' onClick={handleSubmit}>
                        Save Changes
                    </Button>
                    <NavLink to={`/`} className='navigation_link'>
                        <Button variant="contained" className='add_btn' onClick={handleSubmit}>
                            Save Changes & Go Back Home
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default EditCars