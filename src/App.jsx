import './styles/reset.css';
import './styles/App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Contacts from './pages/Contact';
import Users from './pages/Users';
import Header from './components/layout/header/Header';

function App() {
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}
export default App;
