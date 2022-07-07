import SignIn from "../Authentication/SignIn";
import SignUp from "../Authentication/SignUp";

const RouteConfig={
    routes:[
        {
            path:'/SignIn',
            component:SignIn
        },
        {
            path:'/SignUp',
            component:SignUp
        }
    ]
}
export default RouteConfig;