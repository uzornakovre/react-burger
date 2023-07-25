// styles

import styles from "./app.module.scss";

// libraries

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// utils

import { auth } from "../../utils/auth";
import { getCookie, deleteCookie, setCookie } from "../../utils/cookies";
import {
  getIsIngredientDetailsModalOpen,
  getIsLoggedIn,
} from "../../utils/constants";

// components

import Layout from "../layout/layout";
import NotFound from "../not-found/not-found";
import BurgerConstructorPage from "../burger-constructor-page/burger-constructor-page";
import Login from "../login/login";
import Register from "../register/register";
import ForgotPassword from "../forgot-password/forgot-password";
import ResetPassword from "../reset-password/reset-password";
import Profile from "../profile/profile";
import Modal from "../modal/modal";
import IngredientInfo from "../ingredient-info/ingredient-info";
import IngredientDetails from "../ingredient-details/ingredient-details";

// protected routes

import ProtectedRouteUnauthorized from "../protected-route-elements/protected-route-unauthorized";
import ProtectedRouteAuthorized from "../protected-route-elements/protected-route-authorized";
import ProtectedRoutePasswordReset from "../protected-route-elements/protected-route-password-reset";

// slices

import { closeAllModals } from "../../services/modals/modalsSlice";
import { getIngredients } from "../../services/ingredients/ingredientsSlice";
import {
  setLoggedIn,
  getUserInfo,
  setUserInfo,
} from "../../services/auth/authSlice";
import EditForm from "../profile/edit-form/edit-form";
import Orders from "../profile/orders/orders";

function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken = getCookie("accessToken");
  const token = getCookie("refreshToken");
  const isLoggedIn = useSelector(getIsLoggedIn);
  const state = location.state
    ? location.state
    : { backgroundLocation: undefined };
  const isIngredientDetailsModalOpen = useSelector(
    getIsIngredientDetailsModalOpen
  );

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
        navigate("/login", { replace: true });
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
  }, [dispatch, accessToken, isLoggedIn]);

  return (
    <div className={styles.app}>
      <Routes location={state.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
          <Route
            path="login"
            element={
              <ProtectedRouteAuthorized
                element={Login}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRouteAuthorized
                element={Register}
                handleLogin={handleLogin}
              />
            }
          />
          <Route
            path="forgot-password"
            element={<ProtectedRouteAuthorized element={ForgotPassword} />}
          />
          <Route
            path="reset-password"
            element={
              <ProtectedRouteAuthorized
                element={ProtectedRoutePasswordReset}
                elem={ResetPassword}
              />
            }
          />
          <Route
            path="profile"
            element={
              <ProtectedRouteUnauthorized
                element={Profile}
                handleLogout={handleLogout}
              />
            }
          >
            <Route
              index
              element={<ProtectedRouteUnauthorized element={EditForm} />}
            />
            <Route
              path="orders"
              element={<ProtectedRouteUnauthorized element={Orders} />}
            />
          </Route>
          <Route path="ingredients/:id" element={<IngredientInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {state.backgroundLocation && (
        <Routes>
          <Route
            path="/ingredients/:id"
            element={
              <Modal
                isOpen={isIngredientDetailsModalOpen}
                onClose={() => {
                  navigate(-1);
                  dispatch(closeAllModals());
                }}
                title="Детали ингредиента"
              >
                <IngredientDetails />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
