import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import TimelineFragment from '../../components/TimelineFragment';
import { GithubData } from '../../entities/GithubData';

import './styles.css';

const RepositoriesTimeline: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const githubData = (location.state as GithubData) || null;

  useEffect(() => {
    if (!githubData) {
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

  return (
    <div className="timeline-screen-container">
      <header className='timeline-screen-header'>
        <img 
          src={githubData.user.avatarUrl} 
          alt={`${githubData.user.name}'s image`}
          className='user-image'
        />
        <h1 className="text-xl font-semibold">
          Repository Timeline of {githubData.user.name}
        </h1>
      </header>
      <ul className="timeline">
        {
          githubData.repositories.map((repository, index) => {
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