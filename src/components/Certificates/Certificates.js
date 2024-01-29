// Certificates.js

import React from 'react';
import './Certificates.css';
import certificate1 from '../../assects/fmml iiith.jpeg';
import certificate2 from '../../assects/android perfecr e learning.jpeg';
import certificate3 from '../../assects/fast track python ineuron.jpeg';
import certificate4 from '../../assects/basics of python infosys spring board.jpeg';
import certificate5 from '../../assects/cyber sceurity essectionals was issued by cisco.png';
import certificate6 from '../../assects/ttl kiet.jpeg';
import certificate7 from '../../assects/IIIT H Internship.png';
import certificate8 from '../../assects/Artificial Intelligence Fundamentals was issued by IBM SkillsBuild to Benayaram Rekha.png';
// Add more certificate images as needed

const Certificates = () => {
    return (
        <section className="certifications-section">
            <div className="certifications-text">Certifications</div>
            <div className="certificates-rows">
                <div className="certificates-row">
                    <div className="certificate">
                        <img src={certificate1} alt="Certificate 1" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>FOUNDATIONS OF MODERN MACHINE LEARNING</h3>
                            <p>By IIIT Hyderabad..</p>
                        </div>
                    </div>
                    {/* Add more certificates with similar structure if needed */}
                    <div className="certificate">
                        <img src={certificate2} alt="Certificate 2" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Android Fundamentals</h3>
                            <p>By perfect elearning.</p>
                        </div>
                    </div>
                    <div className="certificate">
                        <img src={certificate3} alt="Certificate 3" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Fast Track Python</h3>
                            <p>By Ineuron.</p>
                        </div>
                    </div>
                    <div className="certificate">
                        <img src={certificate4} alt="Certificate 3" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Basics of Python</h3>
                            <p>By Infosys spring board.</p>
                        </div>
                    </div>
                </div>
                <div className="certificates-row">
                    <div className="certificate">
                        <img src={certificate5} alt="Certificate 4" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Cyber Security Essentials</h3>
                            <p>By Cisco.</p>
                        </div>
                    </div>
                    {/* Add more certificates with similar structure if needed */}
                    <div className="certificate">
                        <img src={certificate6} alt="Certificate 3" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Teach to Learn-Leadership program</h3>
                            <p>By Kiet colloge .</p>
                        </div>
                    </div>
                    <div className="certificate">
                        <img src={certificate7} alt="Certificate 3" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>Summer Internship </h3>
                            <p>By IIIT Hyderabad.</p>
                        </div>
                    </div>
                    <div className="certificate">
                        <img src={certificate8} alt="Certificate 3" className="certificate-image" />
                        <div className="certificate-details">
                            <h3>AI Fundamentals </h3>
                            <p>By IBM Skill Build.</p>
                        </div>
                    </div>
                </div>
                {/* Add more rows if needed */}
            </div>
        </section>
    );
};

export default Certificates;
