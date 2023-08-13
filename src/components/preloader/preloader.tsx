import styles from './preloader.module.scss';

const Preloader = () => {
  return (
    <div className={styles.overlay}>
      <div className={styles.preloader} />
    </div>
  )
}

export default Preloader;
