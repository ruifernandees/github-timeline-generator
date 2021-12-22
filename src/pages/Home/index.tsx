import React, { useState } from 'react';
import GithubIcon from '../../assets/icons/GithubIcon';
import { getAllRepositoriesByUsernameUseCase } from '../../useCases/GetAllRepositoriesByUsernameUseCase';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
 
  async function handleGetRepositories() {
    try {
      const response = await getAllRepositoriesByUsernameUseCase.execute(username);
      console.log("*** Home response: ", response);
    } catch (error) {
      console.log(error); 
    }
  }

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
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>
      <button 
        className="h-10 px-6 font-semibold rounded-md bg-orange-500 text-white"
        onClick={handleGetRepositories}
      >
        Gerar Timeline
      </button>
    </div>
  )
}

export default Home;