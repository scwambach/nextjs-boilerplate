import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Delayed = ({ waitBeforeShow, children }) => {
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setHidden(false);
    }, waitBeforeShow);
  }, []);
  return hidden ? '' : children;
};

Delayed.propTypes = {
  waitBeforeShow: PropTypes.number.isRequired,
};

export default Delayed;
