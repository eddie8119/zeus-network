import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/delegate" element={<Home />} />
        <Route path="/delegations" element={<Home />} />
        <Route path="/guardians" element={<Home />} />
        <Route path="/doc" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
