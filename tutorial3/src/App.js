import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Registration/Registration';
import Profile from './components/Profile/Profile';

function App() {
  return (
  <>  
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm />} />  
        <Route path="/profile" element={<Profile />} />   
      </Routes>
    </Router>
  </>
  );
}

export default App;