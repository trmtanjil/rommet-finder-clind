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
    src={"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1920&auto=format&fit=crop&fm=webp&monochrome=aaaaaa"}
    className="w-full h-full object-cover"
  />
  <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px] text-[#333333] pb-1 md:text-right'>Begin your smart h ial and plugs.</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center  text-black pb-5 md:text-right'>Find your dream home with us</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center text-[#333333] md:text-right'>Find affordable, safe, and comfortable rooms near your location. Book online with ease and move in stress-free.</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary'>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-soft btn-secondary bg-gray-500  border-none hover:bg-gray-600  text-white'>Contact Me</button>
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
            src={"https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=1920&auto=format&fit=crop&fm=webp&monochrome"}
            className="w-full h-full object-cover relative"
          />
            <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px] text-[#333333]    pb-1 md:text-right'>Rooms That Fit Your Lifestyle and Budget..</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center text-black pb-5 md:text-right'>Discover cozy spaces without breaking the bank..</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center text-[#333333]  md:text-right'>Your perfect room is just a click away. Discover verified listings with photos, prices, and instant booking options.</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary'>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-soft btn-secondary bg-gray-500  border-none hover:bg-gray-600  text-white'>Contact Me</button>
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
            src={"https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=1920&auto=format&fit=crop&fm=webp&monochrome"}
            className="w-full h-full object-cover relative"
          />
          <div className='overflow-hidden absolute flex flex-col items-end right-[10%] md:w-[50%] font-bold top-[20%] pr-5'>
         <Rotate direction='top-left' duration={1200}>
     <h1 className='   text-[20px] text-[#333333]  pb-1 md:text-right'>Book Your Room Instantly, Stress-Free..</h1>
      </Rotate>
    <AttentionSeeker effect='rubberBand'>
      <h1 className='md:text-4xl text-2xl text-center  text-black pb-5 md:text-right'>Verified listings. Real reviews. Trusted platform..</h1>
    </AttentionSeeker>
        <Slide delay={150} duration={3000}>
             <p className=' pl-5 text-center text-[#333333]    md:text-right'>Safe and secure room rentals for students and professionals. Search smart, book faster, and enjoy comfortable living..</p>
        </Slide>
    <div className='flex gap-4 md:mt-6'>
     <Slide direction='left' duration={3000}> <button className='btn btn-primary '>Click Details</button></Slide>
      <Slide direction='right'duration={3000}>
        <button className='btn btn-soft btn-secondary bg-gray-500  border-none hover:bg-gray-600  text-white'>Contact Me</button>
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
