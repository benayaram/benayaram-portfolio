// Skills.js
import React from 'react';
import './Skills.css';
import androidLogo from '../../assects/android.svg';
import firebaseLogo from '../../assects/firebase.svg';
import htmlLogo from '../../assects/html.svg';
import jsLogo from '../../assects//js.svg';
import bootstrapLogo from '../../assects/Bootstrap.svg';
import githubLogo from '../../assects/Github.svg';
import figmaLogo from '../../assects/Figma.svg';
import pythonLogo from '../../assects/Python.svg';
import mongodbLogo from '../../assects/MongoDB.svg';
import reactLogo from '../../assects/React.svg';
import cLogo from '../../assects/C.svg';
import javaLogo from '../../assects/Java.svg';
import flaskLogo from '../../assects/Flask.svg';
import photoshopLogo from '../../assects/Photoshop.svg';
import premierProLogo from '../../assects/Premiere.svg';
import csslogo from '../../assects/CSS.svg';

const Skills = () => {
    return (
        <section className="skills-section">
            {/* Left Skills */}
            <div className="skill-container skill-container-left">
                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">50%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '50%' }}></div>
                        </div>
                        <img src={androidLogo} alt="Android" className="skill-image" />
                    </div>
                </div>

                {/* Add more left skills with similar structure if needed */}
                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">50%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '50%' }}></div>
                        </div>
                        <img src={firebaseLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>
                


                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">100%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '100%' }}></div>
                        </div>
                        <img src={htmlLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>



                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">70%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <img src={bootstrapLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>


                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">70%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <img src={jsLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>


                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">30%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '30%' }}></div>
                        </div>
                        <img src={githubLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>


                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">70%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <img src={figmaLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>


                <div className="skill">
                    <div className="progress-bar-container">
                        <span className="percentage">70%</span>
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <img src={pythonLogo} alt="Firebase" className="skill-image" />
                    </div>
                </div>
            </div>

            {/* Middle Text */}
            <div className="skill-container skill-container-middle">
                <div className="skills-text">
                    <h2>Skills</h2>
                </div>
            </div>

            {/* Right Skills */}
            <div className="skill-container skill-container-right">
                <div className="skill">
                    <img src={mongodbLogo} alt="Firebase" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <span className="percentage">30%</span>
                    </div>
                </div>

                {/* Add more right skills with similar structure if needed */}
                <div className="skill">
                <img src={reactLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '60%' }}></div>
                        </div>
                        <span className="percentage">60%</span>
                    </div>
                </div>
                


                <div className="skill">
                <img src={cLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '60%' }}></div>
                        </div>
                        <span className="percentage">60%</span>
                    </div>
                </div>
                


                <div className="skill">
                <img src={javaLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '60%' }}></div>
                        </div>
                        <span className="percentage">60%</span>
                    </div>
                </div>
                


                <div className="skill">
                <img src={flaskLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <span className="percentage">70%</span>
                    </div>
                </div>
                

                <div className="skill">
                <img src={photoshopLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '90%' }}></div>
                        </div>
                        <span className="percentage">90%</span>
                    </div>
                </div>
                



                <div className="skill">
                <img src={premierProLogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <span className="percentage">70%</span>
                    </div>
                </div>
                



                <div className="skill">
                <img src={csslogo} alt="Android" className="skill-image" />
                    <div className="progress-bar-container">
                        <div className="progress-bar">
                            <div className="inner-progress-bar" style={{ width: '70%' }}></div>
                        </div>
                        <span className="percentage">70%</span>
                    </div>
                </div>
                
            </div>

            
        </section>
    );
};

export default Skills;