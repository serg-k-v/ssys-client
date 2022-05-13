import "./styles.css";

import AppRouter from "./components/AppRouter"

export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <div className="content-container" >
          <AppRouter/>
        </div>
      </Router>
    </div>
  );
}
