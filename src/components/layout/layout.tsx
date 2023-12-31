import styles from "./layout.module.scss";
import { Outlet } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/hooks";
import AppHeader from "../app-header/app-header";
import Modal from "../modal/modal";
import Preloader from "../preloader/preloader";
import BurgerMenu from "../burger-menu/burger-menu";
import { getAuthIsLoading } from "../../services/auth/selectors";
import { getWSIsPending } from "../../services/websocket/selectors";
import { getIngredientsIsLoading } from "../../services/ingredients/selectors";
import {
  getInfoModalText,
  getIsInfoModalOpen,
} from "../../services/modals/selectors";
import { closeAllModals } from "../../services/modals/modalsSlice";
import { getOrderIsLoading } from "../../services/order/selectors";

const Layout = () => {
  const dispatch = useAppDispatch();
  const isInfoModalOpen = useAppSelector(getIsInfoModalOpen);
  const infoModalText = useAppSelector(getInfoModalText);
  const authLoading = useAppSelector(getAuthIsLoading);
  const ingredientsLoading = useAppSelector(getIngredientsIsLoading);
  const wsPending = useAppSelector(getWSIsPending);
  const isOrderLoading = useAppSelector(getOrderIsLoading);
  const isLoading = authLoading || ingredientsLoading || wsPending || isOrderLoading;

  return (
    <>
      <AppHeader />
      <Outlet />
      <Modal
        type="default"
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
};

export default Layout;
