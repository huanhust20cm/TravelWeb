import styles from './Banner.module.scss';

const ButtonSchedule = () => {
  return (
    <section>
      <div className={styles.bannerWidget}>
        <video autoPlay loop muted playsInline src="https://nhakhoathuyduc.com.vn/video/thuyduc.mp4" />
      </div>
    </section>
  );
};
export default ButtonSchedule;
