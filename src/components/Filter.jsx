import React from 'react'
import Checkbox from '@mui/material/Checkbox';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function Filter({
    filterTypeArray,
    filterCapacityArray,
    price,
    filterType,
    filterCapacity,
    handlePrice,
    handleResetFilter
}) {


    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return (
        <div>
            <div className="type">
                <h3 className='h3_type'>TYPE</h3>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('Sport')}
                        {...label} size="small" id='sport' onChange={() => filterType('Sport')} />
                    <label htmlFor="sport">Sport</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('SUV')}
                        {...label} size="small" id='SUV' onChange={() => filterType('SUV')} />
                    <label htmlFor="SUV">SUV</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('MPV')}
                        {...label} size="small" id='MPV' onChange={() => filterType('MPV')} />
                    <label htmlFor="MPV">MPV</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('Sedan')}
                        {...label} size="small" id='sedan' onChange={() => filterType('Sedan')} />
                    <label htmlFor="sedan">Sedan</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('Coupe')}
                        {...label} size="small" id='Coupe' onChange={() => filterType('Coupe')} />
                    <label htmlFor="Coupe">Coupe</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterTypeArray.includes('Hatchback')}
                        {...label} size="small" id='Hatchback' onChange={() => filterType('Hatchback')} />
                    <label htmlFor="Hatchback">Hatchback</label>
                </div>
            </div>
            <div className="capacity">
                <h3 className="h3_capacity">CAPACITY</h3>
                <div>
                    <Checkbox
                        checked={filterCapacityArray.includes(2)}
                        {...label} size="small" id='2 Person' onChange={() => filterCapacity(2)} />
                    <label htmlFor="2 Person">2 Person</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterCapacityArray.includes(4)}
                        {...label} size="small" id='4 Person' onChange={() => filterCapacity(4)} />
                    <label htmlFor="4 Person">4 Person</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterCapacityArray.includes(6)}
                        {...label} size="small" id='6 Person' onChange={() => filterCapacity(6)} />
                    <label htmlFor="6 Person">6 Person</label>
                </div>
                <div>
                    <Checkbox
                        checked={filterCapacityArray.includes(8)}
                        {...label} size="small" id='8 Person' onChange={() => filterCapacity(8)} />
                    <label htmlFor="8 Person">8 Person</label>
                </div>
            </div>
            <div className="price">
                <h3 className="h3_price">PRICE</h3>
                <Box sx={{ width: 300 }}>
                    <Slider
                        aria-label="Always visible"
                        defaultValue={70}
                        step={10}
                        valueLabelDisplay="on"
                        max={100}
                        value={price}
                        onChange={handlePrice}
                    />
                </Box>
                <h3 className="price_description">Max. $100.00 </h3>
            </div>

            <Button variant="contained" onClick={handleResetFilter} className='reset_btn'>
                Reset Filter
            </Button>
        </div>
    )
}

export default Filter