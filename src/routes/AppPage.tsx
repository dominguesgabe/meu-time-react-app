import { AuthProps } from "./AppRouter"
import { RequireAuth } from "../components/RequireAuth"

const AppPage: any = (auth: AuthProps): JSX.Element => {
    return <div>Dashboard</div>
}

export default RequireAuth(AppPage)