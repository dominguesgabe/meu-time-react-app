import { redirect } from "react-router-dom";

export const RequireAuth = (Component: JSX.Element) => {

    const AuthRoute = () => {

      if (false) {
        return <Component />;
      } else {
        return redirect("/vaca")
      }
    };
  
    return AuthRoute;
  };