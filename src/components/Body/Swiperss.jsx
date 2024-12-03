import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';


import pix1 from '../../../imge/compa/fac843314b85caa9868626f8151a4d47.jpg'
import pix2 from '../../../imge/compa/fadefb2178b9d207687607cb981e4de7.jpg'
import pix3 from '../../../imge/compa/fd277b6d88397ace780d3c846fe7feb4.jpg'

const Swiperss = () => {
    return (
        <div>
            <div>
                <h1>
                    <p className="p-12 text-center text-3xl font-bold text-gray-600 uppercase">
                        Partners
                    </p>
                </h1>
            </div>


            <div>

                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}

                    modules={[FreeMode, Autoplay]}
                >
                    <SwiperSlide><img src={pix1}></img></SwiperSlide>
                    <SwiperSlide><img src={pix2}></img></SwiperSlide>
                    <SwiperSlide><img src={pix3}></img></SwiperSlide>
                    <SwiperSlide><img src={pix1}></img></SwiperSlide>
                    <SwiperSlide><img src={pix1}></img></SwiperSlide>
                    <SwiperSlide><img src={pix2}></img></SwiperSlide>
                    <SwiperSlide><img src={pix3}></img></SwiperSlide>
                    <SwiperSlide><img src={pix1}></img></SwiperSlide>
                </Swiper>

            </div>
        </div>
    );
};

export default Swiperss;