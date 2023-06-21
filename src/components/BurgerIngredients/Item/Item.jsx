import React from 'react';
import styles from './Item.module.scss';

class Item extends React.Component {
  render() {
    return (
      <div className={styles.item}>
        {this.props.name}
      </div>
    )
  }
}

export default Item;