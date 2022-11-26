import { useEffect, useState } from 'react';
// import { BiArrowFromBottom } from 'react-icons/bi';
import { Cover, Button } from './Scroll.styled';

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      <Cover>
        <Button
          type="button"
          onClick={scrollToTop}
          className={isVisible ? 'opacity-100' : 'opacity-0'}
        ></Button>
      </Cover>
    </>
  );
};

/* <BiArrowFromBottom
            aria-hidden="true"
            height="15px"
            weight="15px"
            color="red"
            background-color="black"
            fill="#fff"
          /> */
