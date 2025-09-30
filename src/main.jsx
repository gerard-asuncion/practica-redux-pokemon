import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import './index.css'
import App from './App.jsx'
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { pokemonsReducer } from './reducers/pokemons.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

const store = createStore(
  pokemonsReducer
)

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
