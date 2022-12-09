import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaSass,
  FaBootstrap,
  FaReact,
  FaFigma,
  FaUbuntu,
  FaHardHat,
  FaVuejs,
  FaGithub,
  FaGitlab,
  FaBitbucket,
  FaTrello,
  FaJira,
  FaAws,
  FaDigitalOcean,
} from "react-icons/fa";
import {
  SiPython,
  SiPhp,
  SiExpress,
  SiFastify,
  SiMaterialui,
  SiThreedotjs,
  SiPixiv,
  SiPhabricator,
  SiAdobeillustrator,
  SiWindows,
  SiSolidity,
  SiTailwindcss,
  SiWeb3Dotjs,
  SiNextdotjs,
  SiAsana,
  SiAdobephotoshop,
  SiAdobexd,
  SiMacos,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiRubyonrails,
  SiLaravel,
  SiCodeigniter,
  SiPrisma,
  SiTypo3,
  SiSequelize,
  SiEthereum,
  SiGooglecloud,
  SiDocker,
  SiNumpy,
  SiPandas,
  SiOpencv,
  SiCypress,
  SiCucumber,
  SiJest,
  SiMocha,
  SiJenkins,
  SiTmobile,
  SiTypescript,
} from "react-icons/si";

const SkillsSection = () => {
  return (
    <div className="SkillsSection">
      <div className="skill-container">
        <div className="frontend">
          <h3>Front End</h3>
          <ul>
            <li className="icons tooltip">
              <FaReact size={42} />
              <span className="tooltiptext">ReactJs</span>
            </li>
            <li className="icons tooltip">
              <SiNextdotjs size={42} />
              <span className="tooltiptext">Next.js</span>
            </li>
            <li className="icons tooltip">
              <FaVuejs size={42} />
              <span className="tooltiptext">VueJs</span>
            </li>
            <li className="icons tooltip">
              <FaHtml5 size={42} className="icon" />
              <span className="tooltiptext">Html5</span>
            </li>
            <li className="icons tooltip">
              <FaCss3Alt size={42} />
              <span className="tooltiptext">CSS3</span>
            </li>
            <li className="icons tooltip">
              <FaJsSquare size={42} />
              <span className="tooltiptext">JavaScript</span>
            </li>
            <li className="icons tooltip">
              <FaSass size={42} />
              <span className="tooltiptext">Sass</span>
            </li>
            <li className="icons tooltip">
              <SiTailwindcss size={42} />
              <span className="tooltiptext">Tailwind CSS</span>
            </li>
            <li className="icons tooltip">
              <FaBootstrap size={42} />
              <span className="tooltiptext">BootStrap</span>
            </li>
            <li className="icons tooltip">
              <SiMaterialui size={42} />
              <span className="tooltiptext">Material UI</span>
            </li>
          </ul>
          <ul>
            <li className="icons tooltip">
              <SiThreedotjs size={42} />
              <span className="tooltiptext">Three.js</span>
            </li>
            <li className="icons tooltip">
              <SiPixiv size={42} />
              <span className="tooltiptext">Pixi.js</span>
            </li>
            <li className="icons tooltip">
              <SiPhabricator size={42} />
              <span className="tooltiptext">Phaser.JS</span>
            </li>
          </ul>
        </div>
        <div className="backend">
          <h3>Back End</h3>
          <ul>
            <li className="icons tooltip">
              <FaNodeJs size={42} />
              <span className="tooltiptext">NodeJs</span>
            </li>
            <li className="icons tooltip">
              <SiExpress size={42} />
              <span className="tooltiptext">Express</span>
            </li>
            <li className="icons tooltip">
              <SiFastify size={42} />
              <span className="tooltiptext">Fastify</span>
            </li>
            <li className="icons tooltip">
              <SiNestjs size={42} />
              <span className="tooltiptext">Nest</span>
            </li>
            <li className="icons tooltip">
              <SiTypescript size={42} />
              <span className="tooltiptext">Typescript</span>
            </li>
            <li className="icons tooltip">
              <SiPython size={42} />
              <span className="tooltiptext">Python</span>
            </li>
            <li className="icons tooltip">
              <SiDjango size={42} />
              <span className="tooltiptext">Django</span>
            </li>
            <li className="icons tooltip">
              <SiFlask size={42} />
              <span className="tooltiptext">Flask</span>
            </li>
            <li className="icons tooltip">
              <SiRubyonrails size={42} />
              <span className="tooltiptext">Ruby on Rails</span>
            </li>
            <li className="icons tooltip">
              <SiPhp size={42} />
              <span className="tooltiptext">PHP</span>
            </li>
            <li className="icons tooltip">
              <SiLaravel size={42} />
              <span className="tooltiptext">Laravel</span>
            </li>
            <li className="icons tooltip">
              <SiCodeigniter size={42} />
              <span className="tooltiptext">Codeigniter</span>
            </li>
          </ul>
        </div>
        <div className="database">
          <h3>Database</h3>
          <ul>
            <li className="icons tooltip">
              <SiPostgresql size={42} />
              <span className="tooltiptext">PostgreSQL</span>
            </li>
            <li className="icons tooltip">
              <SiMysql size={42} />
              <span className="tooltiptext">MySQL</span>
            </li>
            <li className="icons tooltip">
              <SiMongodb size={42} />
              <span className="tooltiptext">MongoDB</span>
            </li>
            <li className="icons tooltip">
              <SiRedis size={42} />
              <span className="tooltiptext">Redis</span>
            </li>
            <li className="icons tooltip">
              <SiTypo3 size={42} />
              <span className="tooltiptext">TypeORM</span>
            </li>
            <li className="icons tooltip">
              <SiSequelize size={42} />
              <span className="tooltiptext">Sequelize</span>
            </li>
            <li className="icons tooltip">
              <SiPrisma size={42} />
              <span className="tooltiptext">Prisma</span>
            </li>
            <li className="icons tooltip">
              <SiTypo3 size={42} />
              <span className="tooltiptext">Knex</span>
            </li>
          </ul>
        </div>
        <div className="blockchain">
          <h3>Blockchain</h3>
          <ul>
            <li className="icons tooltip">
              <SiSolidity size={42} />
              <span className="tooltiptext">Solidity</span>
            </li>
            <li className="icons tooltip">
              <FaHardHat size={42} />
              <span className="tooltiptext">HardHat</span>
            </li>
            <li className="icons tooltip">
              <SiWeb3Dotjs size={42} />
              <span className="tooltiptext">Web3.js</span>
            </li>
            <li className="icons tooltip">
              <SiEthereum size={42} />
              <span className="tooltiptext">Ethers.js</span>
            </li>
            <li className="icons tooltip">
              <SiTypo3 size={42} />
              <span className="tooltiptext">Moralis API</span>
            </li>
          </ul>
        </div>
        <div className="cicd">
          <h3>CI/CD</h3>
          <ul>
            <li className="icons tooltip">
              <FaGithub size={42} />
              <span className="tooltiptext">GitHub</span>
            </li>
            <li className="icons tooltip">
              <FaGitlab size={42} />
              <span className="tooltiptext">GitLab</span>
            </li>
            <li className="icons tooltip">
              <FaBitbucket size={42} />
              <span className="tooltiptext">Bitbucket</span>
            </li>
            <li className="icons tooltip">
              <FaAws size={42} />
              <span className="tooltiptext">AWS</span>
            </li>
            <li className="icons tooltip">
              <SiGooglecloud size={42} />
              <span className="tooltiptext">GCP</span>
            </li>
            <li className="icons tooltip">
              <FaDigitalOcean size={42} />
              <span className="tooltiptext">DigitalOcean</span>
            </li>
            <li className="icons tooltip">
              <SiDocker size={42} />
              <span className="tooltiptext">Docker</span>
            </li>
          </ul>
        </div>
        <div className="test">
          <h3>Test</h3>
          <ul>
            <li className="icons tooltip">
              <SiCypress size={42} />
              <span className="tooltiptext">Cypress</span>
            </li>
            <li className="icons tooltip">
              <SiCucumber size={42} />
              <span className="tooltiptext">Cucumber</span>
            </li>
            <li className="icons tooltip">
              <SiJest size={42} />
              <span className="tooltiptext">Jest</span>
            </li>
            <li className="icons tooltip">
              <SiMocha size={42} />
              <span className="tooltiptext">Mocha</span>
            </li>
            <li className="icons tooltip">
              <SiJenkins size={42} />
              <span className="tooltiptext">Jenkins (Auto Testing)</span>
            </li>
          </ul>
        </div>
        <div className="taskmng">
          <h3>Task Management</h3>
          <ul>
            <li className="icons tooltip">
              <FaTrello size={42} />
              <span className="tooltiptext">Trello</span>
            </li>
            <li className="icons tooltip">
              <FaJira size={42} />
              <span className="tooltiptext">Jira</span>
            </li>
            <li className="icons tooltip">
              <SiAsana size={42} />
              <span className="tooltiptext">Asana</span>
            </li>
          </ul>
        </div>
        <div className="others">
          <h3>Others</h3>
          <ul>
            <li className="icons tooltip">
              <SiNumpy size={42} />
              <span className="tooltiptext">Numpy</span>
            </li>
            <li className="icons tooltip">
              <SiPandas size={42} />
              <span className="tooltiptext">Pandas</span>
            </li>
            <li className="icons tooltip">
              <SiOpencv size={42} />
              <span className="tooltiptext">OpenCV</span>
            </li>
          </ul>
        </div>
        <div className="system">
          <h3>Operating System</h3>
          <ul>
            <li className="icons tooltip">
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
