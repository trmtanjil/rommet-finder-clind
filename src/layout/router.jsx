
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home";
 
import BrowseListing from "../page/BrowseListing";
import MyListings from "../page/MyListings";
import Login from "../page/Login";
import Register from "../page/Register";
import UserDataAdd from "../crudOperation/UserDataAdd";
 
import RommetUserDetails from "../page/RommetUserDetails";
import PrivetRouter from "../Privetrouter/PrivetRouter";
import EditmyPage from "../page/EditmyPage";
    



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
            path:'brouserlisting',
            Component:BrowseListing,
            loader:()=>fetch('http://localhost:5000/uerrooms'),
        },
        {
            path:'mylisting',
            element:<PrivetRouter><MyListings></MyListings></PrivetRouter>
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
             element:<PrivetRouter><UserDataAdd></UserDataAdd></PrivetRouter>
         },
         {
            path:'productdetails/:id',
            element:<PrivetRouter><RommetUserDetails></RommetUserDetails></PrivetRouter>,
            loader:({params})=>fetch(`http://localhost:5000/uerrooms/availabality/${params.id}`),
         },
         {
          path:'editmypase/:id',
         element:<EditmyPage></EditmyPage>,
          loader:({params})=>fetch(`http://localhost:5000/uerrooms/${params.id}`),
         }
        
          
     
    ]
  },
]);