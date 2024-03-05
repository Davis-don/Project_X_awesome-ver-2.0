import './App.css';
import Homepage from './pages/Homepage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Testimonials from './Components/Comments';

function App() {
  return (
    <div className="App">
        <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Testimonials" element={<Testimonials />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
    </div>
  );
}

export default App;
