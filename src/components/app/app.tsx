// styles

import styles from "./app.module.scss";

// libraries

import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// hooks

import { useAppDispatch, useAppSelector } from "../../services/hooks";

// utils

import { getCookie } from "../../utils/cookies";

// store

import { getIsIngredientDetailsModalOpen } from "../../services/modals/selectors";
import { getIsLoggedIn } from "../../services/auth/selectors";

// components

import Layout from "../layout/layout";
import NotFound from "../../pages/not-found/not-found";
import BurgerConstructorPage from "../../pages/burger-constructor-page/burger-constructor-page";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Profile from "../../pages/profile/profile";
import Modal from "../modal/modal";
import IngredientInfo from "../../pages/ingredient-info/ingredient-info";
import IngredientDetails from "../ingredient-details/ingredient-details";
import ProtectedRouteElement from "../protected-route-element/protected-route-element";
import Feed from "../../pages/feed/feed";

// slices

import { getIngredients } from "../../services/ingredients/ingredientsSlice";
import {
  setLoggedIn,
  getUserInfo,
  setUserInfo,
} from "../../services/auth/authSlice";
import EditForm from "../../pages/profile/edit-form/edit-form";
import Orders from "../../pages/profile/orders/orders";
import OrderInfo from "../order-info/order-info";

const App = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const accessToken: string | undefined = getCookie("accessToken");
  const isLoggedIn = useAppSelector(getIsLoggedIn);
  const isIngredientDetailsModalOpen = useAppSelector(
    getIsIngredientDetailsModalOpen
  );
  const locationState = location.state as { backgroundLocation?: Location };
  const backgroundState = locationState
    ? locationState
    : { backgroundLocation: undefined };

  function checkUserAuth(): void {
    if (accessToken) {
      dispatch(setLoggedIn(true));
      dispatch(getUserInfo(accessToken));
    } else dispatch(setUserInfo({ name: "", email: "" }));
  }

  useEffect(() => {
    dispatch(getIngredients());
    checkUserAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, isLoggedIn]);

  return (
    <div className={styles.app}>
      <Routes location={backgroundState.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
          <Route
            path="login"
            element={
              <ProtectedRouteElement element={<Login />} onlyUnAuth={true} />
            }
          />
          <Route
            path="register"
            element={
              <ProtectedRouteElement element={<Register />} onlyUnAuth={true} />
            }
          />
          <Route
            path="forgot-password"
            element={
              <ProtectedRouteElement
                element={<ForgotPassword />}
                onlyUnAuth={true}
              />
            }
          />
          <Route
            path="reset-password"
            element={
              <ProtectedRouteElement
                element={<ResetPassword />}
                onlyUnAuth={true}
                onlyAllowed={true}
              />
            }
          />
          <Route path="feed" element={<Feed />} />
          <Route
            path="profile"
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route index element={<EditForm />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route
            path="profile/orders/:id"
            element={<ProtectedRouteElement element={<OrderInfo type="default" />} />}
          />
          <Route path="ingredients/:id" element={<IngredientInfo />} />
          <Route path="/feed/:id" element={<OrderInfo type="default" />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {backgroundState.backgroundLocation && (
        <Routes>
          <Route
            path="ingredients/:id"
            element={
              <Modal
                isOpen={isIngredientDetailsModalOpen}
                onClose={() => navigate(-1)}
                title="Детали ингредиента"
              >
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path="profile/orders/:id"
            element={
              <Modal isOpen={true} onClose={() => navigate(-1)} title="">
                <OrderInfo type="modal" />
              </Modal>
            }
          />
          <Route
            path="feed/:id"
            element={
              <Modal isOpen={true} onClose={() => navigate(-1)} title="">
                <OrderInfo type="modal" />
              </Modal>
            }
          />
        </Routes>
      )}
    </div>
  );
};

export default App;
