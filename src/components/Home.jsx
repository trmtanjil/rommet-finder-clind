import React, { useEffect, useState } from 'react'
import Slider from '../page/Slider'
import HomecardData6 from '../page/HomecardData6'
import Text from '../page/Text'
import ExtraCard1 from '../page/ExtraCard1'
import Usersay from '../page/Usersay'
import Extrafill2 from '../page/Extrafill2'

function Home() {
  

 const [alldata, setAllData] =useState([])
 

  useEffect(()=>{
    fetch('https://assserver-3.onrender.com/uerrooms/availabality')
    .then(res=>res.json())
    .then(data=>setAllData(data))
  },[])


  return (
    <div>
        <Slider></Slider>
        {/* <Text></Text> */}
        


    {/* homepage 6 data addd  */}
       <div>
        <h1 className='text-3xl font-bold text-center py-[80px]'>🏠 Featured Rooms for You — Only 6 Available Now!</h1>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 py-[80px]  gap-5 max-w-6xl mx-auto bg-gray-500 rounded-t-2xl'>
          {
            alldata.map(home=><HomecardData6 home={home} key={home.home}></HomecardData6>)
          }
        </div>
       </div>


       <ExtraCard1></ExtraCard1>
       <Extrafill2></Extrafill2>
       <Usersay></Usersay>
    </div>
  )
}

export default Home