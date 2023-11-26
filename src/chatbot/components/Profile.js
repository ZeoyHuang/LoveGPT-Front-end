import React from 'react';
import '../css/result.css';
import '../css/Profile.css';
import { useNavigate } from 'react-router-dom';
function Profile () {
const history = useNavigate();
  const handleLeftImgClick = () => {
    history('/Alexdetail')
  }

  const handleRightImgClick = () => {
    history ('/Emilydetail')
  }
  const handleChatAClick = () => {
    history('/chatroom/room')
}
const handleChatEClick = () => {
    history('/chatroom/room')
}

  return (
    <div className="body">
      <div className="root">
        <div className="left">
          <div className="img" onClick={handleLeftImgClick}>
            <div className="i1"></div>
            <div className="text">
              <p className="title">Alex Thompson, 35</p>
              <p className="t">More Information</p>
            </div>
            <div className="bg"></div>
          </div>
          <div className="button" onClick={handleChatAClick}>
            Start Chatting
          </div>
        </div>
        <div className="right">
          <div className="img" onClick={handleRightImgClick}>
            <div className="i2"></div>
            <div className="text">
              <p className="title">Emily Rodriguez, 28</p>
              <p className="t">More Information</p>
            </div>
            <div className="bg"></div>
          </div>
          <div className="button" onClick={handleChatEClick}>
            Start Chatting
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
