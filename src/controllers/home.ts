const LogoutButton = document.querySelector('#logout-button');

document.addEventListener('DOMContentLoaded', () =>{
    if(!sessionStorage.getItem('token')){
        window.location.href='/'
    }
})

LogoutButton?.addEventListener('click',()=>{
    sessionStorage.removeItem('token');
    window.location.href = '/'
})

