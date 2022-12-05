import React, { useCallback } from 'react'
import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import '../css/filterbar.css'
import Filter from './Filter'
import CarsData from '../data/CarsData'
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import { getData, deleteCars } from '../redux/actions/actions'
import { useSelector, useDispatch } from 'react-redux'





function CarBody() {

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };


  const [heart, setHeart] = useState(false)
  const handleHeart = () => {
    setHeart(!heart)
  }
  // console.log(heart)



  const [data, setData] = useState(CarsData)
  const [filterTypeArray, setFilterTypeArray] = useState([])
  const [filterCapacityArray, setFilterCapacityArray] = useState([])
  const [price, setPrice] = useState(100)


  const filterItems = {
    typeOfCars: filterTypeArray,
    numOfPeople: filterCapacityArray,
    price: price
  }

  const filterType = (filType) => {
    const typeIncluded = filterTypeArray.includes(filType)
    if (typeIncluded) {
      setFilterTypeArray(filterTypeArray.filter(x => x !== filType))
    } else {
      setFilterTypeArray(filterTypeArray.concat(filType))
    }
  }


  const filterCapacity = (filCapa) => {
    const capacityIncluded = filterCapacityArray.includes(filCapa)
    if (capacityIncluded) {
      setFilterCapacityArray(filterCapacityArray.filter(x => x !== filCapa))
    } else {
      setFilterCapacityArray(filterCapacityArray.concat(filCapa))
    }
  }


  const updateProduct = useCallback(() => {
    let temp = CarsDataRedux

    if (filterItems.typeOfCars.length !== 0) {
      temp = temp.filter(e => filterItems.typeOfCars.includes(e.type))
    }

    if (filterItems.numOfPeople.length !== 0) {
      temp = temp.filter(e => filterItems.numOfPeople.includes(e.capacity))
    }

    if (filterItems.price > 0) {
      temp = temp.filter(e => e.price <= price)
    }

    console.log(temp)
    setData(temp)

  }, [filterItems, CarsDataRedux])



  useEffect(() => {
    updateProduct()
  }, [filterTypeArray, filterCapacityArray, price])


  const handleResetFilter = () => {
    setData(CarsData)
    setFilterTypeArray([])
    setFilterCapacityArray([])
    setPrice(100)
  }

  const handlePrice = (e) => {
    setPrice(e.target.value)
  }

  const [pickLocation, setPickLocation] = useState('')

  const handlePickLocation = (e) => {
    setPickLocation(e.target.value)
  }


  const [dropLocation, setDropLocation] = useState('')

  const handleDropLocation = (e) => {
    setDropLocation(e.target.value)
  }



  //getData

  // useEffect(() => {
  //   getData()
  // }, [])


  const CarsDataRedux = useSelector(state => state.cars)
  console.log(CarsDataRedux)

  const dispatch = useDispatch()


  const handleDelete = (id) => {
    dispatch(deleteCars(id))
  }


  return (
    <div className='filterBar'>

      <div className="filter_container">
        <Filter
          filterTypeArray={filterTypeArray}
          filterType={filterType}
          filterCapacityArray={filterCapacityArray}
          filterCapacity={filterCapacity}
          price={price}
          handlePrice={handlePrice}
          handleResetFilter={handleResetFilter}
        />
      </div>


      <div className="body_container">
        <div className="row_1">
          <div className="pick_up">
            <Checkbox
              {...label}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
              id='pickup_check'
            />
            <label htmlFor='pickup_check' className='top_text'>Pick-Up</label>
            <Box sx={{ minWidth: 40 }} className=''>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Locations</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select_1"
                  label="Locations"
                  value={pickLocation}
                  onChange={handlePickLocation}
                >
                  <MenuItem value='Hn'>Ha Noi</MenuItem>
                  <MenuItem value='Hcm'>HCM</MenuItem>
                  <MenuItem value='Dn'>Da Nang</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="date_time">
              <h4 className="date_description">Date</h4>
              <input type="datetime-local" name="" id="" />
              <h4 className="time_description">Time</h4>
              <input type="time" name="" id="" />
            </div>
          </div>
          <div className="drop_off">
            <Checkbox
              {...label}
              icon={<RadioButtonUncheckedIcon />}
              checkedIcon={<RadioButtonCheckedIcon />}
              id='dropoff_check'
            />
            <label htmlFor='dropoff_check' className='top_text'>Drop-Off</label>
            <Box sx={{ minWidth: 40 }} className=''>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Locations</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select_2"
                  label="Locations"
                  value={dropLocation}
                  onChange={handleDropLocation}
                >
                  <MenuItem value={'HN'}>Ha Noi</MenuItem>
                  <MenuItem value={'HCM'}>HCM</MenuItem>
                  <MenuItem value={'DN'}>Da Nang</MenuItem>
                </Select>
              </FormControl>
            </Box>
            <div className="date_time">
              <h4 className="date_description">Date</h4>
              <input type="datetime-local" name="" id="" />
              <h4 className="time_description">Time</h4>
              <input type="time" name="" id="" />
            </div>
          </div>
        </div>

        {/* Cars */}

        <div className="row_2">
          <>
            {
              CarsDataRedux.map((values) => {
                const { id, name, type, price, img, fuel, engine, capacity } = values
                return (
                  <>
                    <div className="cars_containers" key={id}>
                      <Grid container spacing={8}>
                        <Grid item xs={8}>
                          <h2 className="car_name">{name}</h2>
                        </Grid>
                        <Grid item xs={4}>
                          <div className="toggle_heart">
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} onChange={handleHeart} />
                          </div>
                        </Grid>
                      </Grid>
                      <h3 className="car-type_single">{type}</h3>
                      <img src={img} alt="" className='sportcar_img' />
                      <div className="car_description">
                        <div className="fuel">
                          <LocalGasStationIcon className='fuel' />
                          <h4 className="fuel_des">{fuel} L</h4>
                        </div>
                        <div className="engine">
                          <PrecisionManufacturingIcon />
                          <h4 className="engine_des">{engine}</h4>
                        </div>
                        <div className="capacity">
                          <PeopleAltIcon />
                          <h4 className="capacity">{capacity} People</h4>
                        </div>
                      </div>
                      <div className="renting_price">
                        <span className='car_price'>${price} /day</span>
                        <div className="renting-btn_div">
                          <Button variant="contained" className='renting_btn' disableElevation onClick={() => handleDelete()}>
                            Delete This Shit
                          </Button>
                        </div>
                        <div className="renting-btn_div">
                          <NavLink to={`/edit/${id}`} className='navigation_link'>
                            <Button variant="contained" className='renting_btn' disableElevation>
                              Edit Car
                            </Button>
                          </NavLink>
                        </div>
                        <div className="renting-btn_div">
                          <NavLink to={`/detail/${id}`} className='navigation_link'>
                            <Button variant="contained" className='renting_btn' disableElevation>
                              Rent Now
                            </Button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </>
                )
              })
            }
          </>
        </div>
        <div className="add_cars">
          <NavLink to={'/form'} className='navigation_link'>
            <Button variant="contained" className='add_btn' disableElevation>
              Add Cars Here
            </Button>
          </NavLink>
        </div>
      </div>
    </div>
  )
}


export default CarBody