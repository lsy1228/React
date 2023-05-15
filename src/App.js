import logo from './logo.svg';
import './App.css';
import Main from './songs/Main';
import Home from './songs/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path='/Home' element={<Home />} />

      </Routes>
    </Router>
  );
}

export default App;
