import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Style from './scrollArrow.module.scss';
import '../App.scss';

const ScrollArrow = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <IconContext.Provider
      value={{
        className: 'iconArrow',
      }}
    >
      <FaArrowCircleUp className={Style.scrollTop} onClick={scrollTop} />
    </IconContext.Provider>
  );
};

export default ScrollArrow;
