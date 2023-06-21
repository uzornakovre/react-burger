import React from 'react';
import burgerConstructorStyles from './BurgerConstructor.module.scss';

class BurgerConstructor extends React.Component {
  render() {
    return (
      <section className={`${burgerConstructorStyles.burgerConstructor} mt-25`}>
        Here will be constructor
      </section>
    )
  }
}

export default BurgerConstructor;