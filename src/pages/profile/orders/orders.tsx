import styles from './orders.module.scss';
import OrdersList from '../../../components/orders-list/orders-list';
import { useAppDispatch } from '../../../services/hooks';
import { useEffect } from 'react';
import { wsActions } from '../../../services/websocket/wsSlice';
import { wsUrl } from '../../../utils/constants';
import { getCookie } from '../../../utils/cookies';

const Orders = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      wsActions.connectionStart(`${wsUrl}?token=${getCookie('accessToken')}`)
    );
    return () => {
      dispatch(wsActions.connectionClose());
    }
  }, [dispatch]);

  return (
    <div className={styles.orders}>
      <OrdersList place="profile" />
    </div>
  )
}

export default Orders;
