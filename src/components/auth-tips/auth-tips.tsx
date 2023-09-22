import { Link } from "react-router-dom";
import styles from "./auth-tips.module.scss";
import { FC } from "react";

interface AuthTip {
  id: number;
  text: string;
  link: string;
  linkText: string;
}

interface AuthTipsProps {
  tipsData: Array<AuthTip>;
}

const AuthTips: FC<AuthTipsProps> = ({ tipsData }) => {
  const tips = tipsData.map((tip) => (
    <li className={styles.tips_item} key={tip.id}>
      <p className={styles.tip}>
        {tip.text}
        {
          <Link to={tip.link} className={styles.tip_link}>
            {tip.linkText}
          </Link>
        }
      </p>
    </li>
  ));

  return <ul className={styles.tips}>{tips}</ul>;
};

export default AuthTips;
