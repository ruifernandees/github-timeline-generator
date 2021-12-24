import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon';
import GithubIcon from '../../assets/icons/GithubIcon';
import LinkedInIcon from '../../assets/icons/LinkedInIcon';
import WebIcon from '../../assets/icons/WebIcon';

const About: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center h-screen w-screen">
      <img src="/gtg.png" alt="Github Timeline App Logo" className="w-20 h-20 mb-5" />
      <div className='flex items-center justify-center'>
        <ArrowBackIcon
          className="cursor-pointer"
          size={24} 
          onClick={() => navigate('/')}
        /> 
        <h1 className='ml-2 text-center text-blue text-2xl font-black'>Github Timeline Generator</h1>
      </div>
      <h2 className='text-center text-blue text-xl font-medium my-5'>Author: Rui Fernandes</h2>
      <a
        className="h-10 px-6 w-300 mb-3 flex justify-center items-center font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in text-white"
        href="https://ruifernandes.dev"
        target="_blank"
        rel="noreferrer"
      >
        <WebIcon size={24} color="#FFF" />
        <p className="ml-2">Portfolio and Blog</p>
      </a>
      <a
        className="h-10 px-6 w-300 mb-3 flex justify-center items-center font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in text-white"
        href="https://github.com/ruifernandees"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon size={24} color="#FFF" />
        <p className="ml-2">Github</p>
      </a>
      <a
        className="h-10 px-6 w-300 mb-3 flex justify-center items-center font-semibold rounded-md bg-blue-500 hover:bg-blue-600 transition-all ease-in text-white"
        href="https://www.linkedin.com/in/ruifernandees"
        target="_blank"
        rel="noreferrer"
      >
        <LinkedInIcon size={24} color="#FFF" />
        <p className="ml-2">LinkedIn</p>
      </a>
    </div>
  );
}

export default About;