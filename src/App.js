import './App.css';
import Ipo from './pages/Ipo';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/ipo' element={<Ipo />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
