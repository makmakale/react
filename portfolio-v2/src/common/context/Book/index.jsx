import {
  createContext, useContext, useMemo, useState,
} from 'react';
import PropTypes from 'prop-types';

const BookContext = createContext();

export const useBookContext = () => {
  const context = useContext(BookContext);

  if (!context) {
    throw new Error('Component must be rendered as child component of BookContext');
  }

  return context;
};

export function BookProvider({ children }) {
  const [isBookOpened, setBookOpened] = useState(false);

  function openBook() {
    setBookOpened(true);
  }

  const value = useMemo(() => ({ isBookOpened, openBook }), [isBookOpened]);

  return (
    <BookContext.Provider value={value}>
      {children}
    </BookContext.Provider>
  );
}

BookProvider.propTypes = {
  children: PropTypes.node,
};

BookProvider.defaultProps = {
  children: null,
};
