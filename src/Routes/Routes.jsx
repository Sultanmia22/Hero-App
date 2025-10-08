import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home";
import Apps from "../Pages/Apps";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
import Errorpage from "../Pages/Errorpage";
const router = createBrowserRouter([
  {
    path: "/",
    Component:MainLayout,
    errorElement: <Errorpage></Errorpage>,
    children:[
        {
            index:true,
           
            Component:Home,
        },

        {
            path:'/home',
            
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
            path: '/apps/:clickId',
           
            Component: AppDetails
        },

    ]
  },
]);

export default router;