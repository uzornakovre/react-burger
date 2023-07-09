import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import configureStore from './services/store';

const store = configureStore();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
reportWebVitals();
