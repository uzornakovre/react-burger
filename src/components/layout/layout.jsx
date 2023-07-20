import styles from './layout.module.scss';
import { Outlet } from 'react-router-dom';
import AppHeader from '../app-header/app-header';
import Modal from '../modal/modal';
import { useDispatch, useSelector } from 'react-redux';
import { getInfoModalText, getIsInfoModalOpen } from '../../utils/constants';
import { closeAllModals } from '../../services/modals/modalsSlice';

function Layout() {
  const dispatch = useDispatch();
  const isInfoModalOpen = useSelector(getIsInfoModalOpen);
  const infoModalText = useSelector(getInfoModalText);
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
    </>
  )
}

export default Layout;
