import { useNavigate } from "react-router-dom"
import { Routes } from "../utils/Enum"
import { AuthProps } from "../routes/AppRouter"
import { useEffect } from "react"

type RequireAuthProps = {
    auth: AuthProps
    children: JSX.Element
}

export const RequireAuth = (props: RequireAuthProps) => {
    const navigate = useNavigate()

    const localStorageToken = window.localStorage.getItem("auth")

    console.log(localStorageToken);
    

    useEffect(() => {
        if (!props.auth.logged) {
            return navigate(Routes.Home)
        }
    }, [])

    return props.children
}