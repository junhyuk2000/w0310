import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./css/reset.css";
import "./css/common.css";
import "pretendard/dist/web/variable/pretendardvariable.css";

createRoot(document.getElementById("root")).render(<App />);
