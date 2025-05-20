import React, { useEffect, useState } from 'react'
import Slider from '../page/Slider'
import HomecardData6 from '../page/HomecardData6'

function Home() {
  

 const [alldata, setAllData] =useState([])
 console.log(alldata)

  useEffect(()=>{
    fetch('http://localhost:5000/uerrooms/availabality')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])


  return (
    <div>
        {/* <Slider></Slider> */}
        


    {/* homepage 6 data addd  */}
        <div className='grid md:grid-cols-3 mx-auto gap-5'>
          {
            alldata.map(home=><HomecardData6 home={home} key={home.home}></HomecardData6>)
          }
        </div>
    </div>
  )
}

export default Home