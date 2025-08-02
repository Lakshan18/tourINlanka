import Home from './screens/Home.jsx';
import About from './screens/About.jsx';
import Blog from './screens/Blog.jsx';
import Packages from './screens/Packages.jsx';
import { Route, HashRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/blogs" element={<Blog />} />
      </Routes>
    </Router>
  );
}

export default App;