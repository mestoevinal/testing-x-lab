import News from "../pages/News/News";
import Address from "../pages/Address/Address";

export const publicRoutes = [
    {path: '/', component: <News />, exact: true},
    {path: '/address', component: <Address />, exact: true},
]