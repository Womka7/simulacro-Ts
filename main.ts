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
  try {
    const pageController =new PageController(url);
    const responseOfLogin = await pageController.login(user,'login')

    console.log(responseOfLogin.token);

    sessionStorage.setItem('token',responseOfLogin.token)
    
    const getToken = sessionStorage.getItem('token');
    if (getToken === responseOfLogin.token){
      alert('Se inicia la sesion')
      window.location.href = './src/views/home.html'
    }
    
  } catch (e) {
    console.log(e);
    
  }
});