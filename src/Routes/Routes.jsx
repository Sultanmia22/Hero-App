import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    children:[
        {
            index:true,
            loader:() => fetch('/appData.json'),
            Component:Home,
        },

        {
            path:'/home',
            loader:() => fetch('/appData.json'),
            Component: Home
        },

        {
            path:'/apps',
            Component: Apps
        },

        {
            path:'/installaion'
        }
    ]
  },
]);

export default router;