import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './Components/Signup';
import Login from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import ResetPassword from './Components/ResetPassword';
import Home from './Components/Home';
import About from './Components/About';
import Profile from './Components/Profile';
import EditProfile from './Components/EditProfile'; // Import EditProfile component
import Review from './Components/Review'; // Import Review component
import Wishlist from './Components/Wishlist'; // Import Wishlist component
import Setting from './Components/Setting'; // Import Setting component
import Navbar from './Components/Navbar';

function App() {
  return (
    <div style={{width:"90rem"}}>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Define the routes for the application */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/:token" element={<ResetPassword />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />

          {/* Add route for EditProfile page */}
          <Route path="/edit-profile" element={<EditProfile />} />

          {/* Add routes for Review and Wishlist pages */}
          <Route path="/review" element={<Review />} />
          <Route path="/wishlist" element={<Wishlist />} />

          {/* Add route for Setting page */}
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
