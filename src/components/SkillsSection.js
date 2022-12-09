import React from 'react';
import { FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaSass, FaBootstrap, FaReact, FaFigma, FaUbuntu, FaHardHat, FaVuejs, FaGithub, FaGitlab, FaBitbucket, FaTrello, FaJira } from 'react-icons/fa';
import { SiPhp, SiAdobeillustrator, SiWindows, SiSolidity, SiTailwindcss, SiWeb3Dotjs, SiAsana, SiAdobephotoshop, SiAdobexd, SiMacos } from 'react-icons/si';

const SkillsSection = () => {
    return (
        <div className='SkillsSection'>
            <div className="skill-container">
                <div className="languages">
                    <h3>Languages</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaHtml5 size={42} className='icon' />
                            <span className="tooltiptext">Html5</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaCss3Alt size={42} />
                            <span className="tooltiptext">CSS3</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJsSquare size={42} />
                            <span className="tooltiptext">JavaScript</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiPhp size={42} />
                            <span className="tooltiptext">PHP</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiSolidity size={42} />
                            <span className="tooltiptext">Solidity</span>
                        </li>
                    </ul>
                </div>
                <div className="js-frameworks">
                    <h3>Frameworks</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaReact size={42} />
                            <span className="tooltiptext">ReactJs</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaVuejs size={42} />
                            <span className="tooltiptext">VueJs</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaNodeJs size={42} />
                            <span className="tooltiptext">NodeJs</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaHardHat size={42} />
                            <span className="tooltiptext">HardHat</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiWeb3Dotjs size={42} />
                            <span className="tooltiptext">Web3.js</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaSass size={42} />
                            <span className="tooltiptext">Sass</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaBootstrap size={42} />
                            <span className="tooltiptext">BootStrap</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiTailwindcss size={42} />
                            <span className="tooltiptext">Tailwind Css</span>
                        </li>
                    </ul>
                </div>
                <div className="js-frameworks">
                    <h3>Version Control</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaGithub size={42} />
                            <span className="tooltiptext">GitHub</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaGitlab size={42} />
                            <span className="tooltiptext">GitLab</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaBitbucket size={42} />
                            <span className="tooltiptext">Bitbucket</span>
                        </li>
                    </ul>
                </div>
                <div className="css-frameworks">
                    <h3>Task Management</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaTrello size={42} />
                            <span className="tooltiptext">Trello</span>
                        </li>
                        <li className='icons tooltip'>
                            <FaJira size={42} />
                            <span className="tooltiptext">Jira</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAsana size={42} />
                            <span className="tooltiptext">Asana</span>
                        </li>
                    </ul>
                </div>
                <div className="design-tools">
                    <h3>Designing Tools</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <FaFigma size={42} />
                            <span className="tooltiptext">Figma</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAdobephotoshop size={42} />
                            <span className="tooltiptext">PhotoShop</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAdobexd size={42} />
                            <span className="tooltiptext">Adobe Xd</span>
                        </li>
                        <li className='icons tooltip'>
                            <SiAdobeillustrator size={42} />
                            <span className="tooltiptext">Adobe Illustrator</span>
                        </li>
                    </ul>
                </div>
                <div className="system">
                    <h3>Operating System</h3>
                    <ul>
                        <li className='icons tooltip'>
                            <SiWindows size={42} />
                            <span className="tooltiptext">Windows</span>
                        </li>
                        <li className="icons tooltip">
                            <FaUbuntu size={42} />
                            <span className="tooltiptext">Ubuntu</span>
                        </li>
                        <li className="icons tooltip">
                            <SiMacos size={42} />
                            <span className="tooltiptext">macOS</span>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SkillsSection;
