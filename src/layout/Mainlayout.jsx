import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Foter from '../components/Footer'
import Footer from '../components/Footer'


function Mainlayout() {
  return (
    <div>

        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        <Footer></Footer>
    </div>
  )
}

export default Mainlayout