import React from 'react'
import { Outlet, useNavigation } from 'react-router'
import Header from '../components/Header'
import Foter from '../components/Footer'
import Footer from '../components/Footer'
import Lading from '../page/Lading'


function Mainlayout() {
const navigation =useNavigation();

const isloading = navigation.state === 'loading';


  return (
    <div>

        <Header></Header>
        <div>
          {isloading ? (<Lading></Lading>):(<div>  <Outlet></Outlet></div>)}
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Mainlayout