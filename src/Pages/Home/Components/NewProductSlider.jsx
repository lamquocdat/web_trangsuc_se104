import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'

const NewProductSlider = () => {
    return(
        <div className='container py-4 px-4 justify-content-center bg-dark'> 
            <Swiper
      spaceBetween={50}
      slidesPerView={3}
      centeredSlides
 
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
        </div>
    )
}

export default NewProductSlider;