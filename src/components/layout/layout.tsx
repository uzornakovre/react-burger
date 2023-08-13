import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import Preloader from "../preloader/preloader";
import BurgerMenu from "../burger-menu/burger-menu";
import {
  getAuthIsLoading,
  getInfoModalText,
  getIngredientsIsLoading,
  getIsInfoModalOpen,
  getOrderIsLoading,
} from "../../utils/constants";
import { closeAllModals } from "../../services/modals/modalsSlice";

function Layout() {
  const dispatch = useAppDispatch();
  const isInfoModalOpen: boolean = useAppSelector(getIsInfoModalOpen);
  const infoModalText: string = useAppSelector(getInfoModalText);
  const isLoading: boolean = useAppSelector(
    getAuthIsLoading || getOrderIsLoading || getIngredientsIsLoading
  );

  return (
    <>
      <AppHeader />
      <Outlet />
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => dispatch(closeAllModals())}
        title=""
      >
        <span className={styles.error}>{infoModalText}</span>
      </Modal>
      <BurgerMenu />
      {isLoading && <Preloader />}
    </>
  );
}

export default Layout;
