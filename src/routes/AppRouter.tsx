import { createContext, useState } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { ErrorPage } from './ErrorPage';
import { AppPage } from './AppPage';
import { RequireAuth } from '../components/RequireAuth';

const AuthContext = createContext({})

export type AuthProps = {
    logged: boolean,
    token: string
}

export const AppRouter = () => {

    const [auth, setAuth] = useState<AuthProps>({logged: false, token: ""})

    return (
        <AuthContext.Provider value={auth}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<LoginPage auth={auth} setAuth={setAuth} />} />
                    <Route
                        path="/app"
                        element={
                            <RequireAuth>
                                <AppPage />
                            </RequireAuth>
                        }
                    />
                    <Route path="*" element={<ErrorPage errorMessage="Página não encontrada" />} />
                </Routes>
        </BrowserRouter>
        </AuthContext.Provider>
    )
}