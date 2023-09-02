// styles

import styles from "./app.module.scss";

// libraries

import { useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";

// hooks

import { useAppDispatch, useAppSelector } from "../../services/hooks";

// utils

import { getCookie } from "../../utils/cookies";
import {
  EP_ALL,
  EP_FEED,
  EP_FEED_ITEM,
  EP_FORGOT_PASSWORD,
  EP_HOME,
  EP_INGREDIENT_INFO,
  EP_LOGIN,
  EP_ORDERS,
  EP_ORDER_ITEM,
  EP_PROFILE,
  EP_REGISTER,
  EP_RESET_PASSWORD,
} from "../../utils/constants";

// store

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
  const locationState = location.state as {
    backgroundLocation?: Location;
    previousLocation?: Location;
  };
  const backgroundState = locationState
    ? locationState
    : { backgroundLocation: undefined, previousLocation: undefined };

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
        <Route path={EP_HOME} element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
          <Route
            path={EP_LOGIN}
            element={
              <ProtectedRouteElement element={<Login />} onlyUnAuth={true} />
            }
          />
          <Route
            path={EP_REGISTER}
            element={
              <ProtectedRouteElement element={<Register />} onlyUnAuth={true} />
            }
          />
          <Route
            path={EP_FORGOT_PASSWORD}
            element={
              <ProtectedRouteElement
                element={<ForgotPassword />}
                onlyUnAuth={true}
              />
            }
          />
          <Route
            path={EP_RESET_PASSWORD}
            element={
              <ProtectedRouteElement
                element={<ResetPassword />}
                onlyUnAuth={true}
                onlyAllowed={true}
              />
            }
          />
          <Route path={EP_FEED} element={<Feed />} />
          <Route
            path={EP_PROFILE}
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route index element={<EditForm />} />
            <Route path={EP_ORDERS} element={<Orders />} />
          </Route>
          <Route
            path={EP_ORDER_ITEM}
            element={
              <ProtectedRouteElement element={<OrderInfo type="default" />} />
            }
          />
          <Route path={EP_INGREDIENT_INFO} element={<IngredientInfo />} />
          <Route path={EP_FEED_ITEM} element={<OrderInfo type="default" />} />
        </Route>
        <Route path={EP_ALL} element={<NotFound />} />
      </Routes>

      {backgroundState.backgroundLocation && (
        <Routes>
          <Route
            path={EP_INGREDIENT_INFO}
            element={
              <Modal
                type="route"
                onClose={() => navigate(-1)}
                title="Детали ингредиента"
              >
                <IngredientDetails />
              </Modal>
            }
          />
          <Route
            path={EP_ORDER_ITEM}
            element={
              <ProtectedRouteElement
                element={
                  <Modal type="route" onClose={() => navigate(-1)} title="">
                    <OrderInfo type="modal" />
                  </Modal>
                }
              />
            }
          />
          <Route
            path={EP_FEED_ITEM}
            element={
              <Modal type="route" onClose={() => navigate(-1)} title="">
                <OrderInfo type="modal" />
              </Modal>
            }
          />
          <Route
            path={EP_LOGIN}
            element={
              <ProtectedRouteElement element={<Login />} onlyUnAuth={true} />
            }
          />
          <Route
            path={EP_PROFILE}
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route index element={<EditForm />} />
            <Route path={EP_ORDERS} element={<Orders />} />
          </Route>
        </Routes>
      )}
    </div>
  );
};

export default App;
