import React from 'react';
import LoginPage from "./login/components/LoginPage";
import Page2 from "./login/components/Page2";
import Page3 from "./chatroom/components/Page3";
import Room from "./chatroom/components/room";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Profile from './chatbot/components/Profile';
import Alexdetail from './chatbot/components/Alexdetail';
import Emilydetail from './chatbot/components/Emilydetail';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <GoogleOAuthProvider clientId="706887665079-mgckk8kcmj7gjv13sfd8orgi6d3j8vcr.apps.googleusercontent.com">
      <Router>
        <Routes>
          <Route path="/" element={<LoginPage />} /> {/* LoginPage as the initial page */}
          <Route path="/Alexdetail" element={<Alexdetail />} />
          <Route path="/Emilydetail" element={<Emilydetail />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/chatroom/Page3" element={<Page3 />} />
          <Route path="/chatroom/room" element={<Room />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
