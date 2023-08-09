import { useNavigate } from 'react-router-dom';
import styles from './not-found.module.scss';

function NotFound() {
  const navigate = useNavigate();

  function goBack(): void {
    return navigate(-1);
  }

  return (
    <div className={styles.not_found_page}>
      <div className={styles.content}>
        <h2 className={styles.error_code}>404</h2>
        <p className={styles.error_description}>Страница не найдена</p>
        <button className={styles.go_back}
                type="button"
                onClick={goBack}
        >Назад</button>
      </div>
    </div>
  )
}

export default NotFound;