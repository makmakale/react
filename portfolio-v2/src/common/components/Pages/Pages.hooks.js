import { setNextPage, setPreviousPage, setSpecificPage } from '@/common/components/Pages/Pages.utils';
import { coverRotateTimeout, initialPage, lastPageNavigation } from '@/common/constants/book';
import { useBookContext } from '@/common/context/Book';
import { useCallback, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export const usePages = () => {
  const [searchParams, setSearchParams] = useSearchParams({ page: initialPage.toString() });
  const activePage = Number(searchParams.get('page'));
  const { isBookOpened } = useBookContext();

  function handleSearchParams(fn, ...args) {
    setSearchParams((prev) => {
      fn(prev, ...args);
      return prev;
    }, { replace: true });
  }

  const handlePrevPage = useCallback(() => {
    handleSearchParams(setPreviousPage);
  }, [activePage]);

  const handleNextPage = useCallback(() => {
    handleSearchParams(setNextPage);
  }, [activePage]);

  const moveToPage = useCallback((pageNumber) => {
    handleSearchParams(setSpecificPage, pageNumber);
  }, [activePage]);

  function initialAnimation() {
    handleSearchParams(setSpecificPage, activePage, initialPage);
  }

  useEffect(() => {
    if (!isBookOpened) return;

    const coverTimeout = setTimeout(() => {
      initialAnimation();
    }, coverRotateTimeout - 500);
    const handleKeyPress = (e) => {
      e.preventDefault();

      if (e.code === 'ArrowLeft') {
        handlePrevPage();
      } else if (e.code === 'ArrowRight') {
        handleNextPage();
      } else if (e.code === 'Home') {
        moveToPage(3);
      } else if (e.code === 'End') {
        moveToPage(lastPageNavigation);
      }
    };

    document.addEventListener('keyup', handleKeyPress);

    // eslint-disable-next-line consistent-return
    return () => {
      document.removeEventListener('keyup', handleKeyPress);
      clearTimeout(coverTimeout);
    };
  }, [isBookOpened, handlePrevPage, handleNextPage]);

  return { handlePrevPage, handleNextPage, moveToPage };
};
