import React from 'react';
import GithubIcon from '../../assets/icons/GithubIcon';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      <h1 className="text-center text-blue text-2xl">
        Github Timeline Generator
      </h1>
      <div className="group relative">
        <GithubIcon 
          size={24} 
          className="absolute left-3 top-1/2 -mt-2.5 -ml-1" 
          color={'#333'}
        />
        <input 
          type="text" 
          className="focus:ring-2 focus:ring-gray-400 focus:outline-none my-10 text-gray-900 leading-6 placeholder-gray-400 rounded-md py-2 pl-10 ring-1 ring-gray-200 shadow-sm"
          placeholder='Username'
        />
      </div>
      <button 
        className="h-10 px-6 font-semibold rounded-md bg-orange-500 text-white"
      >
        Gerar Timeline
      </button>
    </div>
  )
}

export default Home;