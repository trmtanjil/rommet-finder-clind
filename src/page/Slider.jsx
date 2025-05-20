import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div className="w-full h-[400px] relative">
      {/* Custom arrows */}
      <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2">
        <button ref={prevRef} className="text-white bg-black p-2 rounded-full">
          <FaArrowLeft size={24} />
        </button>
      </div>
      <div className="absolute top-1/2 right-4 z-10 -translate-y-1/2">
        <button ref={nextRef} className="text-white bg-black p-2 rounded-full">
          <FaArrowRight size={24} />
        </button>
      </div>

      <Swiper
        modules={[Navigation, ]}//Autoplay
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        loop={true}
        speed={800}
        className="h-full"
      >
        <SwiperSlide>
          <div>
          <div>
          <img 
            src={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            className="w-full h-full object-cover relative"
          />
          <div className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center'>Begin your smart home journey with essential   and plugs.</h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%] absolute'>click Dtails</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div>
          <div>
          <img 
            src={"https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            className="w-full h-full object-cover relative"
          />
          <div className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center '>Premium smart home package  and entertainment systems</h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%]  absolute'>click Dtails</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>


        <div>
          <div>
          <img 
            src={"https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr="}
            className="w-full h-full object-cover relative"
          />
          <div  className='absolute flex flex-col  left-[20%] w-[60%] font-bold top-[30%] pl-5 '>
          <h1 className='md:text-4xl text-2xl text-gray-800  pb-5 text-center'>"Energy-efficient smart home solutions to reduce your carbon   </h1>
        <div>
          <button className='btn btn-primary mx-auto md:right-[45%] right-[25%]  absolute'>clicdsk Dtails</button>
        </div>
          </div>
          </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
