import { IWeatherCity } from "../models/IWeatherCity";
import { Card } from "./Card";
import { CitiesController } from "./Cities.controller";
import { Spinner } from "./Spinner";
//logout
const LogoutButton = document.querySelector('#logout-button')as HTMLButtonElement;

const cardSection = document.querySelector('#cards-section')as HTMLElement;
const loaderContent = document.querySelector('.loader-container')as HTMLDivElement;
const url = "http://localhost:3000/";


loaderContent.append(Spinner());

window.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
    loaderContent.style.display = 'flex';
});

window.addEventListener('load', () =>{
    setTimeout(() =>{
        loaderContent.style.display = 'none';
    },500)
})

//logout
LogoutButton?.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})
//logout

async function showCities() {
    const citiescontroller = new CitiesController(url)

    const cities =  await citiescontroller.getCities('city')

    console.log(cities);
    
    cities.forEach(async(ciudad) => {
        const response = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${ciudad.city}&appid=5de2fb58f0a1a27e27839a3f73899ae9`)
        const data: IWeatherCity = await response.json();
        cardSection?.append(Card(ciudad, data.main.temp))
    });
}

showCities();


document.addEventListener('click', (event:Event) => {
    const target = event.target as HTMLElement;
    
})