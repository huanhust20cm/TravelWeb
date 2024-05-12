import { Row } from 'antd';
import style from './SmileCare.module.scss';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const SmileCare = () => {
  return (
    <Row className={style.pageWrap}>
      <div className={style.title}>
        <p>Nha Khoa Lavie</p>
        <h2>Chăm sóc nụ cười bằng cả trái tim</h2>
      </div>
      <div className={style.smileCare}>
        <div className={style.smileWrap}>
          <div className={style.smileCareWidget}>
            <div className={style.titleSmile}>Phòng khám hoạt động 18 năm</div>
            <p className={style.descreption}>
              Phòng khám được thành lập từ năm 2006. Là địa chỉ tin cậy của 10.000 bệnh nhân thăm khám hàng năm.
            </p>
          </div>
          <div className={style.smileCareWidget}>
            <div className={style.titleSmile}>Phòng khám hoạt động 18 năm</div>
            <p className={style.descreption}>
              Phòng khám được thành lập từ năm 2006. Là địa chỉ tin cậy của 10.000 bệnh nhân thăm khám hàng năm.
            </p>
          </div>
          <div className={style.smileCareWidget}>
            <div className={style.titleSmile}>Phòng khám hoạt động 18 năm</div>
            <p className={style.descreption}>
              Phòng khám được thành lập từ năm 2006. Là địa chỉ tin cậy của 10.000 bệnh nhân thăm khám hàng năm.
            </p>
          </div>
          <div className={style.smileCareWidget}>
            <div className={style.titleSmile}>Phòng khám hoạt động 18 năm</div>
            <p className={style.descreption}>
              Phòng khám được thành lập từ năm 2006. Là địa chỉ tin cậy của 10.000 bệnh nhân thăm khám hàng năm.
            </p>
          </div>
        </div>
        <div className={style.smileImage}>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false
            }}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
            </SwiperSlide>
            <SwiperSlide>
              <img src="https://nhakhoathuyduc.com.vn/wp-content/uploads/2023/11/bs-hiep1.png" alt="slide_image" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Row>
  );
};
export default SmileCare;
