import { PageController } from "./src/controllers/Page.controller";


const loginForm = document.querySelector('#loginForm') as HTMLFormElement;
const passwordUser = document.querySelector('#password-user') as HTMLInputElement;
const emailUser = document.querySelector('#email-user') as HTMLInputElement;

const url ='https://reqres.in/api/'

loginForm.addEventListener('submit', async (event: Event) => {
  event.preventDefault();

  const user = {
    email: emailUser.value,
    password: passwordUser.value
  }
  const pageController =new PageController(url);
  const token = await pageController.login(user,'login')
  console.log(token);
  

});