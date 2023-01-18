import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './Landing';
import About from './About';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Landing />} />
        <Route path="nosotros" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
