import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { GithubData } from '../../entities/GithubData';

const RepositoriesTimeline: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const githubData = (location.state as GithubData) || null;

  useEffect(() => {
    if (!githubData) {
      navigate('/');
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      Hi, {githubData && githubData.user.name}
    </div>
  );
}

export default RepositoriesTimeline;