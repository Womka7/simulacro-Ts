import { Card } from "./Card";
import { CitiesController } from "./Cities.controller";

const LogoutButton = document.querySelector('#logout-button');
const cardSection = document.querySelector('#card-section');
const url = "http://localhost:3000/city"

document.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
})

LogoutButton?.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})

async function showCities() {
    const citiescontroller = new CitiesController(url)

    const cities =  await citiescontroller.getCities('cities')

    console.log(cities);
    
}
cardSection?.append(Card());

showCities();