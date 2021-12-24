import React, { useState } from 'react';
import ReactLoading from 'react-loading';
import { toast } from 'react-toastify';
import GithubIcon from '../../assets/icons/GithubIcon';
import { getRepositoriesByUsernameUseCase } from '../../useCases/GetRepositoriesByUsernameUseCase';

import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  function handleError(errorMessage: string) {
    toast.error(errorMessage, {
      theme: 'colored'
    });
  }

  function handleSuccess(name: string) {
    toast.success(`Hi, ${name}!`, {
      theme: 'colored'
    });
  }
 
  async function handleGetRepositories() {
    if (username.length === 0) {
      handleError('Please type a username.');
      return;
    }
    try {
      setIsLoading(true);
      const response = await getRepositoriesByUsernameUseCase.execute(username);
      setIsLoading(false);
      handleSuccess(response.user.name);
      navigate('/timeline', {
        state: response
      })
    } catch (error) {
      console.log(error); 
      let errorMessage = 'Unexpected error!';
      if (error instanceof Error) {
        errorMessage = error.message;
      }
      handleError(errorMessage);
      setIsLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">

      <h1 className="text-center text-blue text-2xl font-black">
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
        className="h-10 px-6 font-semibold rounded-md bg-orange-500 hover:bg-orange-600 transition-all ease-in text-white"
        onClick={handleGetRepositories}
      >
        {
          isLoading
          ?
          <ReactLoading type="spin" color="white" height={24} width={24} />
          :
          <p>Generate Timeline</p>
        }
      </button>
    </div>
  )
}

export default Home;