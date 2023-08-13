import styles from "./profile.module.scss";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../services/hooks";
import { setLoggedIn } from "../../services/auth/authSlice";
import { logout } from "../../utils/api";
import { getCookie } from "../../utils/cookies";

const Profile = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const refreshToken: string | undefined = getCookie("refreshToken");

  function navLinkDefaultClass({ isActive }: { isActive: boolean }): string {
    if (isActive) {
      return `${styles.nav_link} ${styles.active}`;
    } else return `${styles.nav_link}`;
  }

  function handleLogout(): void {
    logout(refreshToken)
      .then(() => {
        dispatch(setLoggedIn(false));
        navigate("/login", { replace: true });
      })
      .catch((err: TResMessage) => console.log(err));
  }

  return (
    <div className={styles.container}>
      <div className={styles.side_container}>
        <nav className={styles.nav_menu}>
          <ul className={styles.nav_menu_list}>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile/" className={navLinkDefaultClass}>
                Профиль
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <NavLink to="/profile/orders" className={navLinkDefaultClass}>
                История заказов
              </NavLink>
            </li>
            <li className={styles.nav_menu_list_item}>
              <button className={styles.nav_link} onClick={handleLogout}>
                Выход
              </button>
            </li>
          </ul>
        </nav>
        <span className={styles.tip}>
          В&nbsp;этом разделе вы&nbsp;можете изменить свои персональные данные
        </span>
      </div>
      <Outlet />
    </div>
  );
}

export default Profile;
