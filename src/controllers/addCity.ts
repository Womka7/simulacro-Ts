import { ICity } from "../models/ICity";
import { CitiesController } from "./Cities.controller";

//logout

window.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
});

const LogoutButton = document.querySelector('#logout-button')as HTMLButtonElement;

LogoutButton?.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})


//logout

const form = document.querySelector("#addCity-form") as HTMLFormElement;
const city = document.querySelector("#new-city") as HTMLInputElement;
const country= document.querySelector("#new-country") as HTMLInputElement;
const image = document.querySelector("#new-img") as HTMLInputElement;
const cityDescription = document.querySelector("#newCity-description") as HTMLTextAreaElement;

// const cityArray: ICity[] = JSON.parse(localStorage.getItem("cityArray")|| '[]');

const url ='http://localhost:3000/';
const citiesController = new CitiesController(url);

form.addEventListener("submit", async(event: Event) => {
    event.preventDefault();

    const newCity: ICity = {
        city: city.value,
        country: country.value,
        image: image.value,
        date: new Date(),
        cityDescription: cityDescription.value,
    }

    try {
        const cityAdded = await citiesController.postCities("city", newCity)
        alert(`Se agrego la ciudad ${city.value}`)
        form.reset();
        window.location.href = '../views/home.html';
        console.log(cityAdded);
        
    } catch (e) {
        console.log(e);
                
    }
    

    // cityArray.push(newCity);
    // localStorage.setItem("cityArray",JSON.stringify(cityArray));
    // form.reset();
    // alert("Se agrego la ciudad")
});