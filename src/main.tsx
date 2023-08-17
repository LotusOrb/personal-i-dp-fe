import React from "react";
import ReactDOM from "react-dom/client";
import { CoreMount } from "./core/mount";

fetch("/api/list")
  .then((v) => {
    v.json().then((v2) => {
      console.log(v2);
    });
  })
  .catch((err) => {
    console.log(err);
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CoreMount />
  </React.StrictMode>
);
