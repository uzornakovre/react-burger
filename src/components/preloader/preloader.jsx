import styles from './preloader.module.scss';

function Preloader() {
  return (
    <div className={styles.overlay}>
      <div className={styles.preloader} />
    </div>
  )
}

export default Preloader;
