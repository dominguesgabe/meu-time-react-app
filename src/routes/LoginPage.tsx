import { FormEvent, useState } from 'react'
import { useNavigate } from "react-router-dom"
import Container from '../components/Container'
import { AuthProps } from './AppRouter'
import { HttpProvider, HttpResponse } from '../utils/HttpProvider'
import { Endpoint } from '../utils/Enum'
import '../assets/loginPage.css'


export type LoginPageProps = {
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>
}


export const LoginPage = ({ setAuth }: LoginPageProps): JSX.Element => {
    
    const [token, setToken] = useState<string>('')
    const [tokenError, setTokenError] = useState(false)

    const navigate = useNavigate()

    const submitHandler = async (e: FormEvent) => {
        e.preventDefault()

        const loginObject: HttpResponse = await HttpProvider(token, Endpoint.Credential)

        if (loginObject.response.account) {
            
            setAuth({ logged: true, token: token })
            return navigate("/app")

        } else {
            setTokenError(true)
        }
    }

    const formHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setToken(e.target.value)
    }

    return (
        <Container>
            <p>b8c288d6b0db7432558c1fb493851c48</p>
            <h1 className="login-title">Olá, seja bem vindo ao Meu Time ⚽</h1>
        
            <form className="form-login" onSubmit={submitHandler}>
                <label className="form-label">
                    Insira sua chave de autenticação
                    <input value={token} onChange={formHandler} className="form-input" type="text" />
                </label>
                { tokenError && <span className="invalid-token">Token inválido.</span> }
                <button type="submit" className="sign-in-button" disabled={!token}>Entrar</button>
                <a href="https://dashboard.api-football.com/register" className="sign-up">Registre-se</a>
            </form>
        </Container>
    )
}