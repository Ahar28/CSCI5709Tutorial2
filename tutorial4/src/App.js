import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login/login';
import ProfileListing from './components/ProfileListing/profilelisting';
import ProfileDetail from './components/ProfileDetail/profiledetail';

function App() {
  return (
  <>  
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/profile-listing" element={<ProfileListing />} />  
        <Route path="/profiledetail/:id" element={<ProfileDetail />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;