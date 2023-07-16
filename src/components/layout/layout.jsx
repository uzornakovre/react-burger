import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';

function Layout() {
  return (
    <>
      <AppHeader />
      <Outlet />
    </>
  )
}

export default Layout;
