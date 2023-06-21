import React from 'react';
import PropTypes from 'prop-types';
import INGREDIENTS from '../../../utils/data/INGREDIENTS';
import Item from '../Item/Item';
import styles from './Category.module.scss';

class Category extends React.Component {
  state = {
    items: [],
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      items: INGREDIENTS.filter(i => i.type === this.props.type).map((i) => (
        <li className={styles.listItem} key={`listItem-${i._id}`}>
          <Item 
            key={`listItem-${i._id}`}
            name={i.name}
            type={i.type}
            proteins={i.proteins}
            fat={i.fat}
            carbohydrates={i.carbohydrates}
            calories={i.calories}
            price={i.price}
            image={i.image} />
        </li>
      ))
    });
  }

  render() {
    return (
      <div className={`${styles.category}`}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <ul className={`${styles.list} pt-6 pr-4 pb-10 pl-4`}>
          {this.state.items}
        </ul>
      </div>
    )
  }
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}; 

export default Category;