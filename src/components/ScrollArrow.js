import React, { useState, useEffect } from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import Style from './scrollArrow.module.scss';
import '../App.scss';

const ScrollArrow = () => {
  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 1000) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 1000) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  });

  return (
    <IconContext.Provider
      value={{
        className: 'iconArrow',
      }}
    >
      <FaArrowCircleUp
        className={Style.scrollTop}
        onClick={scrollTop}
        style={{ height: 40, display: showScroll ? 'inline' : 'none' }}
      />
    </IconContext.Provider>
  );
};

export default ScrollArrow;
