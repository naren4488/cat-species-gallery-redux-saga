import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catReducer from "./catState.js";
import catSaga from "./catSaga.js";

const saga = createSagaMiddleware();
const store = configureStore({
  reducer: { cats: catReducer },
  middleware: () => [saga],
});

saga.run(catSaga);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
