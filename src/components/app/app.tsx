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
import ProtectedRouteElement from "../protected-route-element/protected-route-element";

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
          <Route
            path="profile"
            element={<ProtectedRouteElement element={<Profile />} />}
          >
            <Route index element={<EditForm />} />
            <Route path="orders" element={<Orders />} />
          </Route>
          <Route path="ingredients/:id" element={<IngredientInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>

      {backgroundState.backgroundLocation && (
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
};

export default App;
