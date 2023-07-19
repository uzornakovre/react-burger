import styles from './app.module.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getIngredients } from '../../services/ingredients/ingredientsSlice';
import { setLoggedIn, setLoggedOut } from '../../services/auth/authSlice';
import Layout from '../layout/layout';
import NotFound from '../not-found/not-found';
import BurgerConstructorPage from '../burger-constructor-page/burger-constructor-page';
import Login from '../login/login';
import Register from '../register/register';
import ForgotPassword from '../forgot-password/forgot-password';
import ResetPassword from '../reset-password/reset-password';
import Profile from '../profile/profile';
import IngredientInfo from '../ingredient-info/ingredient-info';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);

  function handleLogin() {
    dispatch(setLoggedIn());
  }

  // function handleLogout() {
  //   dispatch(setLoggedOut());
  //   // localStorage.removeItem('jwt');
  // }

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BurgerConstructorPage />} />
          <Route path="login" element={<Login handleLogin={handleLogin} />} />
          <Route path="register" element={<Register />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
          <Route path="reset-password" element={<ResetPassword />} />
          <Route path="profile" element={<Profile />} />
          <Route path="ingredient-info" element={<IngredientInfo />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
