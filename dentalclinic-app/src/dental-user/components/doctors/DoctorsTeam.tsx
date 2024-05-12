import styles from './DoctorsTeam.module.scss';
import { ImageMapping } from '@/common/components/components.utils';
import { Autoplay, EffectCoverflow, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const DoctorsTeam = () => {
  return (
    <div className={styles.doctorsTeam}>
      <div className={styles.title}>
        <h2>Đội ngũ bác sĩ</h2>
        <p>An tâm đồng hành cùng đội ngũ bác sĩ chuyên môn cao và nhiều năm kinh nghiệm.</p>
      </div>
      <div className="container">
        <Swiper
          effect={'coverflow'}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false
          }}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
          className="swiper_container"
        >
          <SwiperSlide>
            <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={ImageMapping.Bs} alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
          </SwiperSlide>

          {/* <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow">
              <ion-icon name="arrow-back-outline"></ion-icon>
            </div>
            <div className="swiper-button-next slider-arrow">
              <ion-icon name="arrow-forward-outline"></ion-icon>
            </div>
            <div className="swiper-pagination"></div>
          </div> */}
        </Swiper>
      </div>
    </div>
  );
};
export default DoctorsTeam;
