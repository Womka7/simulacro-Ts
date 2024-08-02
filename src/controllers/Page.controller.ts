import { ILogin, ResponseLogin } from "../models/ILogin";

export class PageController {
    tokenLog: string | undefined ;
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    async login(data: ILogin, endPoint: string): Promise<ResponseLogin> {
        const response = await fetch(`${this.url}${endPoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (response.status != 200) {
            throw new Error('Error al iniciar sesión');
        }else{
            alert('bienvenido')
        }
        
        const responseLogin  = await response.json();
        this.tokenLog = responseLogin.token;
        return responseLogin;
    }
}