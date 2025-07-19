import React from "react";
import ReactDOM from "react-dom/client"; // <-- importante: "client"
import App from "./components/app";
import "./styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
