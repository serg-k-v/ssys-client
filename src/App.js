import "./styles.css";

import AppRouter from "./components/AppRouter"
import {
  BrowserRouter as Router
} from "react-router-dom"
import Header from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
          <AppRouter/>
      </Router>
    </div>
  );
}
