import React from 'react';
import '../css/resultEmily.css';
import '../css/Emily-detail.css';
import { useNavigate } from 'react-router-dom';
function EmilyDetail() {
  const history = useNavigate();
  const handleButtonClick = () => {
      history('/Profile')
  }
  const handleChatEClick = () => {
    history('/chatroom/room')
}

  return (
    <div className="Emily">
      <div className="root">
        <div className="left">
          <div className="img">
            <img/>
            <div className="text">
              <p className="title">Emily Rodriguez</p>
            </div>
            <div className="bg">

            </div>
          </div>
          <div className="content">
            <div>
              <p className="title">Basic Information</p>
              <ul>
                <li>
                  <span>AGE</span>
                  <span>28</span>
                </li>
                <li>
                  <span>GENDER</span>
                  <span>Female</span>
                </li>
                <li>
                  <span>OCCUPATION</span>
                  <span>Graphic Designer</span>
                </li>
                <li>
                  <span>LOCNTION</span>
                  <span>456 Art Street, Creativity Town</span>
                </li>
                <li>
                  <span>SEXUAL ORIENTATION</span>
                  <span>Pansexual</span>
                </li>
              </ul>
            </div>
            <div>
              <p className="title">Self Introduction</p>
              <span>"Hi, I'm Emily! As a graphic designer, I find inspiration in the beauty of art and the world around me. I'm thrilled to be a part of this virtual chat software, connecting with fascinating individuals and exploring diverse perspectives."</span>
            </div>
          </div>
        </div>
        <div className="center">
          <div>
            <p className="title">About me</p>
            <ul>
              <li>Emily is a creative and imaginative individual with a love for all things artistic.</li>
              <li>She enjoys painting, sketching, and experimenting with various visual mediums.</li>
              <li>Her warm and empathetic nature makes her a great listener and someone who values emotional connections.</li>
            </ul>
          </div>
          <div>
            <p className="title">Interested in</p>
            <ul>
              <li>Emily spends her free time exploring art galleries, attending painting workshops, and visiting museums.</li>
              <li>She is an avid traveler and often seeks inspiration from different cultures and traditions.</li>
              <li>Additionally, she enjoys photography, yoga, and trying out new cuisines.</li>
            </ul>
          </div>
          <div>
            <p className="title">Looking for</p>
            <p className="text">Emily hopes to connect with individuals who appreciate art and creativity in all its forms. She seeks someone who can share their passions and experiences, providing new perspectives and enriching conversations. In her ideal future, she envisions a partner who is supportive, caring, and ready to embark on exciting journeys together.</p>
          </div>
        </div>
        <div className="right">
          <div>
            <div className="progressBar">
              <p className="title">Personality</p>
              <ul>
                <li>
                  <div className="top">
                    <span>Extrovert</span>
                    <span>Introvert</span>
                  </div>
                  <div className="buttom">
                    <div></div>
                  </div>
                </li>
                <li>
                  <div className="top">
                    <span>Sensing</span>
                    <span>Intuition</span>
                  </div>
                  <div className="buttom">
                    <div></div>
                  </div>
                </li>
                <li>
                  <div className="top">
                    <span>Thinking</span>
                    <span>Feeling</span>
                  </div>
                  <div className="buttom">
                    <div></div>
                  </div>
                </li>
                <li>
                  <div className="top">
                    <span>Judging</span>
                    <span>Perceiving</span>
                  </div>
                  <div className="buttom">
                    <div></div>
                  </div>
                </li>
              </ul>
            </div>
            <div className="list">
              <p className="title">Keywords</p>
              <ul>
                <li>Graphic Designer</li>
                <li>Art</li>
                <li>Painting</li>
                <li>Empathetic</li>
                <li>Traveler</li>
                <li>Photography</li>
                <li>Yoga</li>
                <li>Creative</li>
                <li>INFP</li>
              </ul>
            </div>
          </div>
          <div className="button">
            <div className="left" onClick={handleButtonClick}>
              <div className="leftArrow">
                <div></div>
              </div>
            </div>
            <div className="right" onClick={handleChatEClick}>
              <div className="btn">
                Start Chatting
              </div>
              <div className="rightArrow">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmilyDetail;
