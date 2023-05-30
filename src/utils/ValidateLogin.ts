import { AuthProps } from "../routes/AppRouter";

type ValidateLoginProps = {
    loginObject: object
    setAuth: React.Dispatch<React.SetStateAction<AuthProps>>
}
export const ValidateLogin =  ({ loginObject, setAuth }: ValidateLoginProps) => {
    
    if (loginObject) {
        console.log(loginObject);
        
    }

    // return fetch(`https://v3.football.api-sports.io/status${endpoint}`, requestOptions)
}