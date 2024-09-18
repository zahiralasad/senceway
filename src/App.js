import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Home'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div className="App album bg-light">
        {/* <Header /> */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      {/* <Footer /> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
