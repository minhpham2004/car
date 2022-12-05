import { ADD_CAR, DELETE_CAR, EDIT_CAR, GET_DATA } from '../types/types'
import CarsData from '../../data/CarsData'


const initialState = {
    cars: CarsData
}


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA:
            return {
                ...state,
                cars: state.cars.concat(CarsData)
            }
        case ADD_CAR:
            return {
                ...state,
                cars: state.cars.concat(action.payload)
            }
        case DELETE_CAR:
            return {
                ...state,
                cars: state.cars.filter(car => car.id !== action.payload.id)
            }
        case EDIT_CAR:
            const index = state.cars.findIndex(car => car.id === action.payload.id)
            return {
                ...state,
                cars: state.cars[index] = action.payload
            }
        
        
        default:
            return state
    }
}


export const getCars = state => state.cars



