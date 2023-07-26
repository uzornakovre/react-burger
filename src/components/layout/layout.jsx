import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import Preloader from "../preloader/preloader";
import {
  getAuthIsLoading,
  getInfoModalText,
  getIngredientsIsLoading,
  getIsInfoModalOpen,
  getOrderIsLoading,
} from "../../utils/constants";
import { closeAllModals } from "../../services/modals/modalsSlice";

function Layout() {
  const dispatch = useDispatch();
  const isInfoModalOpen = useSelector(getIsInfoModalOpen);
  const infoModalText = useSelector(getInfoModalText);
  const isLoading = useSelector(
    getAuthIsLoading || getOrderIsLoading || getIngredientsIsLoading
  );

  return (
    <>
      <AppHeader />
      {/* <Outlet />
      <Modal
        isOpen={isInfoModalOpen}
        onClose={() => dispatch(closeAllModals())}
        title=""
      >
        <span className={styles.error}>{infoModalText}</span>
      </Modal>
      {isLoading && <Preloader />} */}
    </>
  );
}

export default Layout;
