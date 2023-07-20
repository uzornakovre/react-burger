import styles from "./app.module.scss";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate } from "react-router-dom";
import Layout from "../layout/layout";
import NotFound from "../not-found/not-found";
import BurgerConstructorPage from "../burger-constructor-page/burger-constructor-page";
import Login from "../login/login";
import Register from "../register/register";
import ForgotPassword from "../forgot-password/forgot-password";
import ResetPassword from "../reset-password/reset-password";
import Profile from "../profile/profile";
import IngredientInfo from "../ingredient-info/ingredient-info";
import ProtectedRouteUnauthorized from "../protected-route-elements/protected-route-unauthorized";
import ProtectedRouteAuthorized from "../protected-route-elements/protected-route-authorized";
import ProtectedRoutePasswordReset from "../protected-route-elements/protected-route-password-reset";
import { getIngredients } from "../../services/ingredients/ingredientsSlice";
import { getCookie, deleteCookie, setCookie } from "../../utils/cookies";
import { auth } from "../../utils/auth";
import {
  setLoggedIn,
  getUserInfo,
  setUserInfo,
} from "../../services/auth/authSlice";
import { getIsLoggedIn } from "../../utils/constants";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = getCookie("accessToken");
  const token = getCookie("refreshToken");
  const isLoggedIn = useSelector(getIsLoggedIn);

  function handleLogin(data) {
    dispatch(setLoggedIn(true));
    setCookie("accessToken", data.accessToken.split("Bearer ")[1]);
    setCookie("refreshToken", data.refreshToken);
  }

  function handleLogout() {
    auth
      .logout(token)
      .then((res) => {
        dispatch(setLoggedIn(false));
        navigate('/login', { replace: true });
      })
      .catch((err) => console.log(err));

    deleteCookie("accessToken");
    deleteCookie("refreshToken");
  }

  function refreshToken() {
    if (token) {
      auth
        .refreshToken(token)
        .then((res) => {
          if (res) {
            handleLogin(res);
          }
        })
        .catch((error) => {
          console.log(`Ошибка при получении данных: ${error}`);
        });
    }
  }

  useEffect(() => {
    dispatch(getIngredients());
    if (!isLoggedIn) refreshToken();
    if (accessToken) {
      dispatch(getUserInfo(accessToken));
    } else dispatch(setUserInfo({}));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, accessToken]);

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
          <Route path="login" element={
              <ProtectedRouteAuthorized element={Login} handleLogin={handleLogin} />
            }
          />
          <Route path="register" element={
              <ProtectedRouteAuthorized element={Register} handleLogin={handleLogin} />
            }
          />
          <Route path="forgot-password" element={
              <ProtectedRouteAuthorized element={ForgotPassword} />
            }
          />
          <Route path="reset-password" element={
              <ProtectedRouteAuthorized element={ProtectedRoutePasswordReset} elem={ResetPassword} />
            }
          />
          <Route path="profile" element={
              <ProtectedRouteUnauthorized element={Profile} handleLogout={handleLogout} />
            }
          />
          <Route path="ingredient-info" element={<IngredientInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
