import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from "../../../src/assets/image/library-lovers-month.jpg";
import img2 from "../../../src/assets/image/books-new-york-public-library-susan-candelario.jpg";
import img3 from "../../../src/assets/image/book4.jpg";
import img4 from "../../../src/assets/image/5ea3382f2392c90c453f4b3c_vienna (640x296).jpg";
import img6 from "../../../src/assets/image/pexels-technobulka-2908984.jpg";
import img5 from "../../../src/assets/image/lots-of-books-on-the-table-in-front-of-the-library-shelves-generative-ai-photo.jpg";


const Banner = () => {
  return (
    <div className="w-11/12 mx-auto  my-14">
      <Swiper
        spaceBetween={30} 
        slidesPerView={1}
        autoplay={{ delay: 2000 }}
        loop={true}
      >
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img1}
              alt="Book 1"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img2}
              alt="Book 2"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img3}
              alt="Book 3"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img4}
              alt="Book 3"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img5}
              alt="Book 3"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full h-full relative">
            <img
              src={img6}
              alt="Book 3"
              className="object-cover w-full h-[600px] rounded-lg shadow-md"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
