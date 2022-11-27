import ScrollToTop from 'react-scroll-to-top';
import { TfiAngleDoubleUp } from 'react-icons/tfi';

const ScrollToTopButton = () => {
  return (
    <>
      <ScrollToTop
        smooth
        viewBox="0 0 24 24"
        style={{ backgroundColor: '#c0392b' }}
        component={
          <p style={{ color: '#ffffff' }}>
            <TfiAngleDoubleUp />
          </p>
        }
      />
    </>
  );
};
export default ScrollToTopButton;
