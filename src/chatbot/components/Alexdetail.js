import React from 'react';
import '../css/resultAlex.css';
import '../css/Alex-detail.css';
import { useNavigate } from 'react-router-dom';
function AlexDetail() {
    const history = useNavigate();
    const handleButtonClick = () => {
        history('/Profile')
    }
    const handleChatAClick = () => {
        history('/chatroom/room')
    }

    return (
        <div className="Alex">
            <div className="root">
                <div className="left">
                    <div className="img">
                        <img />
                        <div className="text">
                            <p className="title">Alex Thompson</p>
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
                                    <span>30</span>
                                </li>
                                <li>
                                    <span>GENDER</span>
                                    <span>Male</span>
                                </li>
                                <li>
                                    <span>OCCUPATION</span>
                                    <span>Software Engineer</span>
                                </li>
                                <li>
                                    <span>LOCNTION</span>
                                    <span>123 Tech Avenue, Cityville</span>
                                </li>
                                <li>
                                    <span>SEXUAL ORIENTATION</span>
                                    <span>Heterosexual</span>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <p className="title">Self Introduction</p>
                            <span>"Hey there! I'm Alex, a passionate software engineer who loves exploring the world of virtual
                                chat software. I'm always excited to connect with new people and learn about their unique
                                experiences."</span>
                        </div>
                    </div>
                </div>
                <div className="center">
                    <div>
                        <p className="title">About me</p>
                        <ul>
                            <li>Alex is a tech-savvy individual with a curious and open-minded personality. </li>
                            <li>Alex enjoys discussing the latest advancements in technology, gaming, and pop culture. </li>
                            <li>Alex is a good listener and believes in the power of meaningful conversations.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="title">Interested in</p>
                        <ul>
                            <li>Alex's hobbies include gaming, reading sci-fi novels, and attending tech conferences.</li>
                            <li>He leads an active lifestyle and enjoys hiking and playing soccer on weekends. </li>
                            <li>He also loves experimenting with new coding projects and contributing to open-source
                                communities.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="title">Looking for</p>
                        <p className="text">Alex is looking for someone who shares his passion for technology and can engage in deep
                            conversations about various subjects. He hopes to find a connection with someone who appreciates
                            both the virtual and real-world adventures. Ultimately, he envisions a future with a loving partner
                            who embraces life's challenges together.</p>
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
                                <li>Software Engineer</li>
                                <li>Gaming</li>
                                <li>Sci-fi</li>
                                <li>Technology</li>
                                <li>Meaningful conversations</li>
                                <li>Open-minded</li>
                                <li>Hiking</li>
                                <li>Active lifestyle</li>
                                <li>ENTP</li>
                            </ul>
                        </div>
                    </div>
                    <div className="button">
                        <div className="left" onClick={handleButtonClick}>
                            <div className="leftArrow">
                                <div></div>
                            </div>
                        </div>
                        <div className="right" onClick={handleChatAClick}>
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
    );
}

export default AlexDetail;
