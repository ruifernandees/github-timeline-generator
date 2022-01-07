import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon';
import TimelineFragment from '../../components/TimelineFragment';
import TimelineHeader from '../../components/TimelineHeader';
import { GithubData } from '../../entities/GithubData';
import { getRepositoriesByUsernameUseCase } from '../../useCases/GetRepositoriesByUsernameUseCase';

import './styles.css';

const RepositoriesTimeline: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const githubData = (location.state as GithubData) || null;

  const [isAsc, setIsAsc] = useState(true);
  const [amount, setAmount] = useState(50);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState(githubData);


  useEffect(() => {
    if (!filteredData) {
      navigate('/');
    }
  }, []);

  function formattedDate(date: Date) {
    return date.toUTCString().substring(0, 16);
  }

  function formattedDescription(description: string) {
    const descriptionAsArray = description.split(" ");
    const maxCharacters = 80;
    let totalOfCharacters = 0;
    const limitedDescriptionArray = [];
    for (const word of descriptionAsArray) {
      const nextTotalOfCharacters = totalOfCharacters + word.length;
      if (nextTotalOfCharacters > maxCharacters) break;
      totalOfCharacters = nextTotalOfCharacters;
      limitedDescriptionArray.push(word);
    }
    return limitedDescriptionArray.join(" ") + "...";
  }

  function onChangeDirection(event: React.ChangeEvent<HTMLInputElement>) {
    setIsAsc(event.target.value === 'ASC');
  }

  function onChangeAmount(event: React.ChangeEvent<HTMLInputElement>) {
    setAmount(Number(event.target.value));
  }

  function handleSuccess(message: string) {
    toast.success(message, {
      theme: 'colored'
    });
  }

  function handleError(errorMessage: string) {
    toast.error(errorMessage, {
      theme: 'colored'
    });
  }

  async function handleFilter() {
    try {
      setIsLoading(true);
      const response = await getRepositoriesByUsernameUseCase.execute(githubData.user.username, amount, isAsc);
      handleSuccess(`Filtered ${amount} repositories in ${isAsc ? 'ascending' : 'descending'} order successfully!`)
      setIsLoading(false);
      setFilteredData(response);
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
    <div className="timeline-screen-container">
      <header className='timeline-screen-header'>
        <TimelineHeader name={filteredData.user.name} />
        <img 
          src={filteredData.user.avatarUrl} 
          alt={`${filteredData.user.name}`}
          className='user-image'
        />
      </header>
      <div className="flex flex-col mb-10 w-250 sm:w-350 justify-center">
        <div className="flex flex-col">
          <div 
            onChange={onChangeDirection}
            className="flex justify-between items-center flex-col sm:flex-row my-3"
          >
            <h1 className="mb-2 sm:mb-0 font-semibold">Order:</h1>
            <div className='flex'>
              <div className="mr-4">
                <input 
                  type="radio" 
                  value="ASC" 
                  id="ASC"
                  name="direction" 
                  defaultChecked 
                  className="mr-1"
                /> 
                <label htmlFor="ASC">ASC</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  value="DESC" 
                  id="DESC"
                  name="direction" 
                  className="mr-1"
                /> 
                <label htmlFor="DESC">DESC</label>
              </div>
            </div>
          </div> 
          <div 
            onChange={onChangeAmount}
            className="flex justify-between items-center flex-col sm:flex-row my-3"
          >
            <h1 className="mb-2 sm:mb-0 font-semibold">Number of <br />repositories:</h1>
            <div className="flex">
              <div className="mr-3">
                <input 
                  type="radio" 
                  value="1" 
                  id="amount-1"
                  name="amount" 
                  className="mr-1"
                />
                <label htmlFor="amount-1">1</label>
              </div>
              <div className="mr-3">
                <input 
                  type="radio" 
                  value="10" 
                  id="amount-10"
                  name="amount" 
                  className="mr-1"
                /> 
                <label htmlFor="amount-10">10</label>
              </div>
              <div className="mr-3">
                <input 
                  type="radio" 
                  value="20" 
                  id="amount-20"
                  name="amount" 
                  className="mr-1"
                /> 
                <label htmlFor="amount-20">20</label>
              </div>
              <div>
                <input 
                  type="radio" 
                  value="50" 
                  id="amount-50"
                  name="amount" 
                  defaultChecked 
                  className="mr-1"
                /> 
                <label htmlFor="amount-50">50</label>
              </div>
            </div>
          </div>
        </div>
        <button
          className="h-10 w-50 px-6 mt-5 flex justify-center items-center font-semibold rounded-md border-2 border-black bg-black hover:bg-white hover:text-black transition-all ease-in text-white"
          onClick={handleFilter}
        >
          {
            isLoading
            ?
            <ReactLoading type="spin" color="#3b82f6" height={24} width={24} />
            :
            <p>Filter</p>
          }
        </button>
      </div>
      <ul className="timeline">
        {
          filteredData.repositories.map((repository, index) => {
            const isLeft = index % 2 !== 0; 

            return (
              <li 
                className={`timeline-item ${isLeft ? 'left' : 'right'}`}
                key={index}
              >
                <div className='complement'></div>
                <TimelineFragment />
                <a 
                  className="repository-container" 
                  href={repository.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <p className="repository-name">{repository.name}</p>
                  <hr className='repository-hr' />
                  <p>{formattedDate(new Date(repository.createdAt))}</p>
                  {
                    repository.description &&
                    <p className='repository-description'>
                      {formattedDescription(repository.description)}
                    </p>
                  }
                </a>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
}

export default RepositoriesTimeline;