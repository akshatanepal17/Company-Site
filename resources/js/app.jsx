import { createRoot } from "react-dom/client";
import "../css/app.css";
import MyRouter from "./router/MyRouter";

function App() {
    return (
        <MyRouter/>
    );
}

createRoot(document.getElementById("app")).render(<App />);
