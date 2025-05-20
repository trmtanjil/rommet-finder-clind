
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home";
import AddtoFindRoommate from "../page/AddtoFindRoommate";
import BrowseListing from "../page/BrowseListing";
import MyListings from "../page/MyListings";
import Login from "../page/Login";
import Register from "../page/Register";
import UserDataAdd from "../crudOperation/UserDataAdd";
import PrivetRouter from "../Privetrouter/PrivetRouter";
  



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'addtofindrommet',
            element:<PrivetRouter><AddtoFindRoommate></AddtoFindRoommate></PrivetRouter>,
        },
        {
            path:'brouserlisting',
            Component:BrowseListing,
        },
        {
            path:'mylisting',
            Component:MyListings,
        },
        {
            path:'login',
            Component:Login,
        },
        {
            path:'register',
            Component:Register,
        },
         {
            path:'userdataadd',
            Component:UserDataAdd,
         }
     
    ]
  },
]);