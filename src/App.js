import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Header from './Header';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App bg-dark">

        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
