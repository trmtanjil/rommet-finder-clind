import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { AttentionSeeker, Rotate, Slide, Zoom } from 'react-awesome-reveal';

function Slider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);


  return (
    <div className="w-full  md:h-screen relative">
     
 
    
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
          <div className="relative">
  <img 
    src={"https://images.pexels.com/photos/186077/pexels-photo-186077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
    className="w-full h-full object-cover"
  />
  <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px]  pb-1 md:text-right'>Begin your smart h ial and plugs.</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center  text-amber-200 pb-5 md:text-right'>Begin your smart home journey with essential and plugs.</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center  md:text-right'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dicta laudantium hic placeat excepturi voluptas facilis modi unde ratione incidunt.</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary'>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-secondary'>Contact Me</button>
      </Slide>
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
            <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px]  pb-1 md:text-right'>Begin your smart h ial and plugs.</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center  text-amber-200 pb-5 md:text-right'>Begin your smart home journey with essential and plugs.</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center  md:text-right'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dicta laudantium hic placeat excepturi voluptas facilis modi unde ratione incidunt.</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary'>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-secondary'>Contact Me</button>
      </Slide>
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
          <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px]  pb-1 md:text-right'>Begin your smart h ial and plugs.</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center  text-amber-200 pb-5 md:text-right'>Begin your smart home journey with essential and plugs.</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center  md:text-right'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque dicta laudantium hic placeat excepturi voluptas facilis modi unde ratione incidunt.</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary'>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-secondary'>Contact Me</button>
      </Slide>
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
