import React from "react";
import ReactDOM from "react-dom/client";
// step 2 - add react-redux to highest level component - index.js
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
// step 4 import store
import store from "./store/index"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // step 5 - set the store prop
  <Provider store={store}>
    <App />
  </Provider>
);
// step 3 - wrap the app in Provider
/* You don't have to wrap the whole app in the provider.
You could do it in nested components 
but only the components that are wrapped in Provider will have access to Redux */

// step 6 - in Counter component