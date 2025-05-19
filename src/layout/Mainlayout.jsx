import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Foter from '../components/Foter'

function Mainlayout() {
  return (
    <div>

        <Header></Header>
        <div>
            <Outlet></Outlet>
        </div>
        <Foter></Foter>
    </div>
  )
}

export default Mainlayout