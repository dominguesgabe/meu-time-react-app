import { useState } from 'react'
import Container from '../components/Container'
import '../assets/loginPage.css'


export default function Login(): JSX.Element {

    const [formData, setFormData] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        
        var headers = new Headers();
        headers.append("x-rapidapi-key", formData);
        headers.append("x-rapidapi-host", "v3.football.api-sports.io");

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        };

        fetch("https://v3.football.api-sports.io/leagues", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    const formHandler = (e) => {
        setFormData(e.target.value)
    }

    return (
        <Container>
            <h1 className="login-title">Olá, seja bem vindo ao Meu Time ⚽</h1>
            <p>Insira sua chave de autenticação</p>
            <form className="form-login" onSubmit={submitHandler}>
                <input value={formData} onChange={formHandler} className="form-input" type="text" />
                <button type="submit" className="sign-in-button">Entrar</button>
                <a href="https://dashboard.api-football.com/register" className="sign-up">Registre-se</a>
            </form>
        </Container>
    )
}