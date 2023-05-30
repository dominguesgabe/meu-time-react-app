import { createContext, useState } from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { ErrorPage } from './ErrorPage';
import AppPage from './AppPage';
// import { RequireAuth } from '../components/RequireAuth';

// const AuthContext = createContext({})

export type AuthProps = {
    logged: boolean | null,
    token: string
}

export const AppRouter = () => {

    const [auth, setAuth] = useState<AuthProps>({logged: null, token: ""})

    return (
        // <AuthContext.Provider value={auth}>
            <BrowserRouter>
                <Routes>
                    <Route path="/login">
                        <LoginPage auth={auth} setAuth={setAuth} />
                    </Route>
                    <Route path="/app">
                        <AppPage auth={auth} />
                    </Route>
                    <Route path="*">
                        <ErrorPage errorMessage="Página não encontrada" />
                    </Route>
                </Routes>
        </BrowserRouter>
        // </AuthContext.Provider>
    )
}