import { ConstructorElement,  DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import styles from './result-list.module.scss';

function ResultList() {
  return (
    <ul className={styles.result_list}>
        <li className={`${styles.item} ${styles.item_top}`}>
          <ConstructorElement
            type="top"
            isLocked={true}
            text="Краторная булка N-200i (верх)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
        <li className={`${styles.item} ${styles.item_middle}`}>
          <ul className={styles.middle_list}>
            {/* <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li>
            <li className={styles.middle_item}>
              <DragIcon type="primary" />
              <ConstructorElement
                text="Краторная булка N-200i (верх)"
                price={50}
                thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
              />
            </li> */}
          </ul>
        </li>
        <li className={`${styles.item} ${styles.item_bottom}`}>
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text="Краторная булка N-200i (низ)"
            price={200}
            thumbnail="https://code.s3.yandex.net/react/code/bun-02.png"
          />
        </li>
      </ul>
  )
}

export default ResultList;