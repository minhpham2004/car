import React, { useState, useEffect, useCallback } from 'react'
import '../css/carsdetail.css'
import Filter from '../components/Filter'
import { useParams, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CarsData from '../data/CarsData';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import Checkbox from '@mui/material/Checkbox';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';








function CarsDetails() {

  const { id } = useParams()
  console.log(id)

  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



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
      setFilterTypeArray(filterTypeArray.filter(x => x !== filType
      ))
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


  const updateProduct = useCallback(
    () => {
      let temp = CarsData

      if (filterItems.typeOfCars.length !== 0) {
        temp = temp.filter(e => filterItems.typeOfCars.includes(e.type))
      }

      if (filterItems.numOfPeople.length !== 0) {
        temp = temp.filter(e => filterItems.numOfPeople.includes(e.capacity) || e.capacity >= 8)
      }

      if (filterItems.price > 0) {
        temp = temp.filter(e => e.price <= price)
      }
      console.log(temp)
      setData(temp)
    },
    [filterItems, setData]
  )


  const handlePrice = (e) => {
    setPrice(e.target.value)
  }


  useEffect(() => {
    updateProduct()
  }, [price, filterTypeArray, filterCapacityArray])


  const handleResetFilter = () => {
    setData(CarsData)
    setFilterTypeArray([])
    setFilterCapacityArray([])
    setPrice(100)
  }


  const CarsDataRedux = useSelector(state => state.cars)
  console.log(CarsDataRedux)



  return (
    <div>
      <div className='car-detail_body'>
        <div className="filter-bar_detail">
          <Filter
            filterTypeArray={filterTypeArray}
            filterType={filterType}
            filterCapacityArray={filterCapacityArray}
            filterCapacity={filterCapacity}
            price={price}
            handlePrice={handlePrice}
            handleResetFilter={handleResetFilter} />
        </div>
        {
          CarsDataRedux.filter(el => el.id == id)
            .map((product, index) => {
              return (
                <>
                  <div key={index} className="car-detail_container">
                    <div className="car_photos">
                      <div className="car_banner">
                        <div className="car_adverts">
                          <h2 className="car-upper_ad">{product.type} car with the best design and acceleration</h2>
                          <h3 className="car-lower_ad">Safety and comfort while driving a futuristic and elegant {product.type.toUpperCase()} car</h3>
                        </div>
                        <img src={product.img} alt="" className="car_img" />
                      </div>
                      <div className="car_small-photos">
                        <img src={product.img} alt="" className="car-small_img" />
                        <img src="https://autopro8.mediacdn.vn/2021/6/23/autopro-nissan-gtr-2021-ve-vn-15-1624410469536897243150-crop-16244149101241333094578.jpg" alt="" className="car_decoration" />
                        <img src="https://znews-photo.zingcdn.me/w660/Uploaded/neg_estpyge/2022_03_16/2021_Nissan_GT_R_1.jpg" alt="" className="car_decoration" />
                      </div>
                    </div>
                    <div className="car_description-detail">
                      <Grid container spacing={12}>
                        <Grid item xs={8}>
                          <h2 className="car_name-detail">{product.name}</h2>
                        </Grid>
                        <Grid item xs={4}>
                          <div className="toggle_heart">
                            <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                          </div>
                        </Grid>
                      </Grid>
                      <div className="review_description"></div>
                      <div className="main_description">
                        <div className="text_description">NISMO has become the embodiment of {product.type}'s outstanding performance, inspired by the most unforgiving proving ground, the "race track".</div>
                        <div className="detailed_description">
                          <Grid container spacing={2} className='overall_description'>
                            <Grid item xs={3}>
                              <h3 className='overall-description_title'>Type Car</h3>
                              <h3 className='overall-description_title'>Steering</h3>
                            </Grid>
                            <Grid item xs={3}>
                              <h3> {product.type}</h3>
                              <h3> {product.engine}</h3>
                            </Grid>
                            <Grid item xs={3}>
                              <h3 className='overall-description_title'>Capacity</h3>
                              <h3 className='overall-description_title'>Gasoline</h3>
                            </Grid>
                            <Grid item xs={3}>
                              <h3> {product.capacity} Person</h3>
                              <h3>{product.fuel}L</h3>
                            </Grid>
                          </Grid>
                          <Grid container spacing={18}>
                            <Grid item xs={6}>
                              <div className="price_description">
                                <h3 className='price_number'>${product.price}.00/</h3>
                                <h3 className='per_day'>day</h3>
                              </div>
                            </Grid>
                            <Grid item xs={6}>
                              <NavLink to={`/form/${id}`} className='navigation_link'>
                                <Button variant="contained" className='renting_btn' disableElevation>
                                  Rent Now
                                </Button>
                              </NavLink>
                            </Grid>
                          </Grid>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
        }
      </div>
      <div className="recent_cars">
        {CarsDataRedux.filter(e => e.id !== id)
          .map((values) => {
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
                        <Checkbox {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
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
      </div>
    </div>
  )
}


export default CarsDetails