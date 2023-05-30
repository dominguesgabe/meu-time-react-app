import { useEffect, useState } from "react"
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { LoginPage } from './LoginPage'
import { ErrorPage } from './ErrorPage'
import { AppPage } from './AppPage'
import { Routes, ErrorMessages } from '../utils/Enum'
import { RequireAuth } from "../components/RequireAuth"

export type AuthProps = {
    logged: boolean | null,
    token: string
}

export const AppRouter = () => {

    const [auth, setAuth] = useState<AuthProps>({logged: null, token: ""})

    useEffect(() => {
        window.localStorage.setItem("auth", JSON.stringify(auth))
    }, [auth])

    const router = createBrowserRouter([
        {
            path: Routes.Home,
            element: <LoginPage auth={auth} setAuth={setAuth} />,
            index: true
        },
        {
            path: Routes.App,
            element: (
                <RequireAuth auth={auth} >
                    <AppPage />
                </RequireAuth>
                )
        },
        {
            path: "*",
            element: <ErrorPage errorMessage={ErrorMessages.NotFound} />
        },
    ]);

    return (
        <RouterProvider router={router} />
    )
}