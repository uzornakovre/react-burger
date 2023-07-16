import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import './styles/index.scss';
import App from './components/app/app';
import reportWebVitals from './reportWebVitals';
import store from './services/store';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
reportWebVitals();
