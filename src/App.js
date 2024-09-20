import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home';
import Header from './Header';
import Test from './Test';
import 'bootstrap/dist/css/bootstrap.css';


function App() {
  return (
    <div className="App bg-dark">

        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="test" element={<Test />} />
          </Routes>
        </BrowserRouter>
      </div>
    
  );
}

export default App;
