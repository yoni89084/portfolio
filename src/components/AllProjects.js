import port1 from '../images/html-css.jpg';
import port2 from '../images/responsive.jpg';
import port3 from '../images/javascript.jpg';
import port4 from '../images/react.jpg';
import port5 from '../images/dark-theme.jpg';
import port6 from '../images/clone.jpg';
import port7 from '../images/landing_page.jpg';
import port8 from '../images/nft-game.png';
import port9 from '../images/nft.jpg';
import { FaGithubSquare } from 'react-icons/fa';
import { SiWebflow } from "react-icons/si";

const projects = [
    {
        id: 1,
        category: 'React Js',
        link1: 'https://spacerunners.com',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port1,
        title: 'NFT metaverse',
        description: 'Website made with React and Tailwind CSS'
    },
    {
        id: 2,
        category: 'Sass',
        link1: 'https://frog-mint-page.vercel.app/',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port7,
        title: 'Simple NFT mint page',
        description: 'Responsive website made with React and Scss'
    },
    {
        id: 3,
        category: 'BootStrap',
        link1: 'https://stellular-yeot-44a55f.netlify.app',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port3,
        title: 'BootStrap Website',
        description: 'Website made using BootStrap CDN'
    },
    {
        id: 4,
        category: 'Css',
        link1: 'https://snavy.netlify.app',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port5,
        title: 'Css Website',
        description: 'Dark theme website made with html and Css'
    },
    {
        id: 5,
        category: 'React Js',
        link1: 'https://thenftitsclub.com/',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port4,
        title: 'NFT Landing Page',
        description: 'Nipple NFT landing page'
    },
    {
        id: 6,
        category: 'Css',
        link1: 'https://cryptodickheads.com',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port2,
        title: 'Introduction section',
        description: 'Huddle Introductory Section'
    },
    {
        id: 7,
        category: 'JavaScript',
        link1: 'https://mekaformers.com',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port6,
        title: 'Web3 project',
        description: 'NFT project'
    },
    {
        id: 8,
        category: 'Web3',
        link1: 'https://gck8sdx9taib.usemoralis.com/',
        link2: 'https://github.com/nirban256/Car_Slayer-NFT-Game',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port8,
        title: 'NFT Game - Car Slayer',
        description: 'A NFT based game made using Solidity and ReactJs'
    },
    {
        id: 9,
        category: 'Web3',
        link1: 'https://prysm.xyz',
        link2: '#',
        icon1: <SiWebflow size={42} color='white' />,
        icon2: <FaGithubSquare size={42} color='white' />,
        image: port9,
        title: 'NFT Minting Site',
        description: 'A NFT Minting website made with Solidity and ReactJs'
    }
]

export default projects;