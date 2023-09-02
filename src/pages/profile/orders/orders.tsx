import styles from './orders.module.scss';
import OrdersList from '../../../components/orders-list/orders-list';
import { useAppDispatch, useAppSelector } from '../../../services/hooks';
import { useEffect } from 'react';
import { wsActions } from '../../../services/websocket/wsSlice';
import { WS_URL} from '../../../utils/constants';
import { getCookie } from '../../../utils/cookies';
import { getWSIsConnected } from '../../../services/websocket/selectors';

const Orders = () => {
  const dispatch = useAppDispatch();
  const isWSConnected = useAppSelector(getWSIsConnected);

  useEffect(() => {
    if (!isWSConnected) {
      dispatch(
        wsActions.connectionStart(`${WS_URL}?token=${getCookie('accessToken')}`)
      );
    }
    return () => {
      dispatch(wsActions.connectionClose());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return (
    <div className={styles.orders}>
      <OrdersList place="profile" />
    </div>
  )
}

export default Orders;
