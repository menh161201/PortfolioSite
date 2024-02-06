import React from 'react'
import './experience.css'
import HTML from './html.svg';
import CSS from './css.svg';
import JS from './js.svg';
import SASS from './sass.svg';
import JAVA from './java.svg';
import PYTHON from './python.svg';
import REACT from './react.svg';
import BOOTSTRAP from './bootstrap.svg';
import FIGMA from './figma.svg';
import WORDPRESS from './wordpress.svg';
import NODE from './node.svg';
import EXPRESS from './express.svg';
import FIREBASE from './firebase.svg';
import MONGODB from './mongodb.svg'
import VSCODE from './vscode.svg';
import GIT from './git.svg';
import GITHUB from './github.svg';
import ADOBE from './adobe.png'

function Experience() {
    return (
        <div>
            <section id="experience">
                <h5>What do I have</h5>
                <h2>My Professional Skills</h2>
    
                <div className="container experience-container">
                    <div className="experience-block">
                        <h3 className="experience-category">
                            <span className='experience-heading-left'>Programming Languages</span>
                            
                            <span className='experience-heading-right'>Web Technologies</span>
                        </h3>
                        <div className="experience-content experience-content-1">
                            <ul className="experience-list experience-list-1">
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={HTML} alt="" />
                                    </div>
                                    <div className="experience-item-name">HTML</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={CSS} alt="" />
                                    </div>
                                    <div className="experience-item-name">CSS</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={JS} alt="" />
                                    </div>
                                    <div className="experience-item-name">JavaScript</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={SASS} alt="" />
                                    </div>
                                    <div className="experience-item-name">Sass</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={JAVA} alt="" />
                                    </div>
                                    <div className="experience-item-name">Java</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={PYTHON} alt="" />
                                    </div>
                                    <div className="experience-item-name">Python</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-block">
                        <h3 className="experience-category">
                            <span className='experience-heading-left'>Frontend Development</span>
                            
                            <span className='experience-heading-right'>Frameworks</span>
                        </h3>
                        <div className="experience-content ">
                            <ul className="experience-list experience-list-2">
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={REACT} alt="" />
                                    </div>
                                    <div className="experience-item-name">React</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={BOOTSTRAP} alt="" />
                                    </div>
                                    <div className="experience-item-name">Bootstrap</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={FIGMA} alt="" />
                                    </div>
                                    <div className="experience-item-name">Figma</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={WORDPRESS} alt="" />
                                    </div>
                                    <div className="experience-item-name">WordPress</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-block">
                        <h3 className="experience-category">
                            <span className='experience-heading-left'>Backend Development</span>
                            
                            <span className='experience-heading-right'>Databases</span>
                        </h3>
                        <div className="experience-content ">
                            <ul className="experience-list experience-list-2">
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={NODE} alt="" />
                                    </div>
                                    <div className="experience-item-name">Node.js</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={EXPRESS} alt="" />
                                    </div>
                                    <div className="experience-item-name">Express</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={FIREBASE} alt="" />
                                    </div>
                                    <div className="experience-item-name">Firebase</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={MONGODB} alt="" />
                                    </div>
                                    <div className="experience-item-name">MongoDB</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="experience-block">
                        <h3 className="experience-category">
                            <span className='experience-heading-left'>Development Tools</span>
                            
                            <span className='experience-heading-right'>Version Control</span>
                        </h3>
                        <div className="experience-content ">
                            <ul className="experience-list experience-list-2">
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={VSCODE} alt="" />
                                    </div>
                                    <div className="experience-item-name">Visual Studio Code</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={GIT} alt="" />
                                    </div>
                                    <div className="experience-item-name">Git</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={GITHUB} alt="" />
                                    </div>
                                    <div className="experience-item-name">GitHub</div>
                                </li>
                                <li className="experience-item">
                                    <div className="experience-item-logo">
                                        <img src={ADOBE} alt="" />
                                    </div>
                                    <div className="experience-item-name">Adobe Suite</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
      )
}

export default Experience