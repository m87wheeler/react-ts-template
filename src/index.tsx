import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/app/app";

const container = document.querySelector("#root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(<App />);
