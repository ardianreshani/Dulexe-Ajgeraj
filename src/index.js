import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import SimpleReactLightbox from "simple-react-lightbox";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SimpleReactLightbox>
        <App />
      </SimpleReactLightbox>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
