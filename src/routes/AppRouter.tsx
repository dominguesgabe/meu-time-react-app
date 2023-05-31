import { useEffect, useState } from "react"
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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
        if (auth.logged) {
            window.localStorage.setItem("auth", JSON.stringify(auth))
        }
    }, [auth.logged])

    const router = createBrowserRouter([
        {
            path: Routes.Home,
            element: <LoginPage setAuth={setAuth} />,
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