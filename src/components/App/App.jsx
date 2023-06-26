import { useState, useEffect } from 'react';
import { api } from '../../utils/api';
import styles from './App.module.scss';
import AppHeader from '../AppHeader/AppHeader';
import Content from '../Content/Content';
import ModalOverlay from '../ModalOverlay/ModalOverlay';
import { IngredientsListContext } from '../../contexts/IngredientsListContext';

function App() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [isIngredientDetailsModalOpen, setIsIngredientDetailsModalOpen] = useState(false);
  const [isOrderDetailsModalOpen, setIsOrderDetailsModalOpen] = useState(false);

  useEffect(() => {
    api.getIngredients()
      .then((data) => {
        setIngredientsList(data.data);
      })
      .catch((error) => {
        console.log(`Ошибка при получении данных: ${error}`);
    });
  }, []);

  function handleIngredientClick() {
    setIsIngredientDetailsModalOpen(true);
  }

  function handleOrderClick() {
    setIsOrderDetailsModalOpen(true);
  }

  function closeAllModals() {
    setIsIngredientDetailsModalOpen(false);
    setIsOrderDetailsModalOpen(false);
  }

  function handleModalOverlayClick(evt) {
    evt.target.classList.forEach((className) => {
      if (className.includes('opened')) {
        closeAllModals();
      }
    });
  }

  useEffect(() => {
    function handleEscClick(evt) {
      if (evt.key === 'Escape') {
        closeAllModals();
      }
    }
    if (isIngredientDetailsModalOpen || isOrderDetailsModalOpen) {
          document.addEventListener('keydown', handleEscClick);
        }
      return () => {
        document.removeEventListener('keydown', handleEscClick);
      }
  }, [isIngredientDetailsModalOpen, isOrderDetailsModalOpen]);

  return (
    <IngredientsListContext.Provider value={ingredientsList}>
      <div className={styles.app}>
        <AppHeader />
        <Content 
          onIngredientClick={handleIngredientClick}
          onOrderClick={handleOrderClick} />
        <ModalOverlay
          isOpen={isIngredientDetailsModalOpen || isOrderDetailsModalOpen}
          onClose={closeAllModals}
          onOverlayClick={handleModalOverlayClick}/>
      </div>
    </IngredientsListContext.Provider>
  );
}

export default App;
