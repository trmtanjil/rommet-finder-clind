import React, { useEffect, useState } from 'react'
import Slider from '../page/Slider'
import HomecardData6 from '../page/HomecardData6'
import Text from '../page/Text'
import ExtraCard1 from '../page/ExtraCard1'

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
        <Slider></Slider>
        {/* <Text></Text> */}
        


    {/* homepage 6 data addd  */}
       <div>
        <h1 className='text-3xl font-bold text-center pt-[80px]'>🏠 Featured Rooms for You — Only 6 Available Now!</h1>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 py-[80px]  gap-5 max-w-6xl mx-auto'>
          {
            alldata.map(home=><HomecardData6 home={home} key={home.home}></HomecardData6>)
          }
        </div>
       </div>


       <ExtraCard1></ExtraCard1>
    </div>
  )
}

export default Home