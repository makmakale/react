import PageNavigation from '@/common/components/PageNavigation';
import { usePages } from '@/common/components/Pages/Pages.hooks';
import { Page, PagesContainer, PageWrapper } from '@/common/components/Pages/Pages.styled';
import { bookPages, totalPages } from '@/common/constants/book';
import useDeviceType from '@/common/hooks/useDeviceType';
import { useEffect, useState } from 'react';

function Pages() {
  const { handlePrevPage, handleNextPage } = usePages();
  const isMobileOrTablet = useDeviceType();
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (isMobileOrTablet) {
      setPages(bookPages.filter((page) => page.page !== 1));
      return;
    }
    setPages(bookPages);
  }, [isMobileOrTablet]);

  return (
    <PagesContainer>
      {pages.map(({ page, component: Component, ...rest }, index) => (
        <Page
          key={`page-${page}`}
          id="page"
          data-page-id={page}
          style={{ zIndex: totalPages - index }}
        >
          <PageWrapper className={`${page % 2 === 0 ? 'front' : 'back'}`}>
            {Component ? <Component {...rest} /> : null}
          </PageWrapper>

          <PageNavigation
            currentPage={page}
            handlePrevPage={handlePrevPage}
            handleNextPage={handleNextPage}
          />

        </Page>
      ))}
    </PagesContainer>
  );
}

export default Pages;
