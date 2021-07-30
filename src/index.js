import { StrictMode } from "react";
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import App from "./App";
import basketReducer from './store/reducers/basket';

const store=createStore(basketReducer);

const app=(
  <Provider store={store} >
    <App />
  </Provider>
)

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {app}
  </StrictMode>,
  rootElement
);
