import { FormEvent, useState } from 'react'
import Container from '../components/Container'
import '../assets/loginPage.css'
import { AuthProps } from './AppRouter'


type Props = {
    auth: AuthProps;
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>;
  };


//   export const AuthContextProvider = ({ children }) => {
//     const [currentUser, setCurrentUser] = useState(
//       JSON.parse(localStorage.getItem("users")) || null
//     )
//   }

export const LoginPage: any = ({ auth, setAuth }: Props) => {
    
    
    const [token, setToken] = useState<string>('')

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        
        var headers = new Headers()
        headers.append("x-rapidapi-host", "v3.football.api-sports.io")
        headers.append("x-rapidapi-key", token)

        const requestOptions: RequestInit = {
            method: 'GET',
            headers: headers,
            redirect: 'follow'
        }

        fetch("https://v3.football.api-sports.io/", requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
            .catch(error => console.log('error', error))
    }

    const formHandler = (e: any) => {
        setToken(e.target.value)
    }

    return (
        <Container>
            <h1 className="login-title">Olá, seja bem vindo ao Meu Time ⚽</h1>
        
            <form className="form-login" onSubmit={submitHandler}>
                <label className="form-label">
                    Insira sua chave de autenticação
                    <input value={token} onChange={formHandler} className="form-input" type="text" />
                </label>
                <button type="submit" className="sign-in-button" disabled={!token}>Entrar</button>
                <a href="https://dashboard.api-football.com/register" className="sign-up">Registre-se</a>
            </form>
        </Container>
    )
}