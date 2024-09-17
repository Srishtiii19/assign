import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page1 from './Page1';
import Page2 from './Page2';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/projects" element={<Page2 />} />
      </Routes>
    </Router>
  );
}

export default App;
