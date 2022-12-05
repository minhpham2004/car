import { ADD_CAR, DELETE_CAR, EDIT_CAR, GET_DATA } from "../types/types"


export function getData() {
    return {
        type: GET_DATA
    }
}

export const addCar = (newCar) => {
    return {
        type: ADD_CAR,
        payload: newCar
    }
}

export const deleteCars = (carDeleted) => {
    return {
        type: DELETE_CAR,
        payload: carDeleted
    }
}

export const editCars = (editedCar) => {
    return {
        type: EDIT_CAR,
        payload: editedCar
    }
}