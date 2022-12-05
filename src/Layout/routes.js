import CarBody from "../components/CarBody";
import CarsDetails from "../components/CarsDetails";
import RentingForm from "../components/Form";
import AddCars from "../components/AddCars";
import EditCars from "../components/EditCars";


const publicRoutes = [
    {path: '/', component: CarBody},
    {path: '/detail/:id', component: CarsDetails},
    {path: '/form/:id', component: RentingForm, layout: null},
    {path: '/form', component: AddCars , layout: null},
    {path: '/edit/:id', component: EditCars, layout: null}
]

const privateRoutes = [

]

export { publicRoutes, privateRoutes}