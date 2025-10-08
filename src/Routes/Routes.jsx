import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
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
            loader:() => fetch('/appData.json'),
            Component: Apps
        },

        {
            path:'/installaion',
            Component: Installation
        },

        {
            path: '/appDetails/:clickId',
            loader:() => fetch('/appData.json'),
            Component: AppDetails
        }
    ]
  },
]);

export default router;