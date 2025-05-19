
import {
  createBrowserRouter,
} from "react-router";
import Mainlayout from "./Mainlayout";
import Home from "../components/Home";
 



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Mainlayout,
    children:[
        {
            index:true,
            Component:Home,
        }
     
    ]
  },
]);