
import './style/App.css';
import Header from './components/Header';
import Home from './pages/Home';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Card from './pages/Card';
import Login from './pages/Login';

function App() {
  return (
    <div className="App">
      <Router> 
      <Header />
      <div className="spacer"/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/card" element={<Card/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
