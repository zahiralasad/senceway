import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home'
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App">
      <div className="container bg-dark text-info">
        {/* <Header/> */}
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
