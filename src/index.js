import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux'
import App from "./App";
import setupStore from "./store/store";

const store = setupStore()
const rootElement = document.getElementById("root");

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  rootElement
);
