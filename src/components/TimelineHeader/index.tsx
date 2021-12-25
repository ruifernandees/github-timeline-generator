import React from 'react';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '../../assets/icons/ArrowBackIcon';

interface ITimelineHeaderProps {
  name: string;
}

const TimelineHeader: React.FC<ITimelineHeaderProps> = ({name}) => {
  const navigate = useNavigate();

  return (
    <section className='flex items-center justify-center w-full sm:w-400'>
      <ArrowBackIcon
        className="cursor-pointer"
        size={24} 
        onClick={() => navigate('/')}
      /> 
      <h1 className="text-xl font-black sm:text-center ml-2 w-3/4 sm:w-400">
        Repository Timeline of {name}
      </h1>
    </section>
  );
}

export default TimelineHeader;