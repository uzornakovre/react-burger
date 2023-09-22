import styles from "./order-bottom.module.scss";
import { FC } from "react";
import Price from "../price/price";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import { useAppSelector } from "../../services/hooks";
import { getTotalPrice } from "../../services/order/selectors";

interface OrderBottomProps {
  type: "default" | "mobile";
  buttonText: string;
  buttonClickHandler: () => void;
}

const OrderBottom: FC<OrderBottomProps> = ({
  type,
  buttonText,
  buttonClickHandler,
}) => {
  const totalPrice = useAppSelector(getTotalPrice);
  return (
    <div
      className={`${styles.order_bottom} ${
        type === "default" && styles.default
      }`}
    >
      <Price
        value={`${totalPrice}`}
        size={type === "mobile" ? "normal" : "large"}
      />
      <Button
        htmlType="button"
        type="primary"
        size={type === "mobile" ? "small" : "large"}
        onClick={buttonClickHandler}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default OrderBottom;
