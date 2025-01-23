import { useCoverHook } from '@/common/components/Cover/Cover.hooks';
import { CoverContent, CoverLeft, CoverRight } from '@/common/components/Cover/Cover.styled';
import Pages from '@/common/components/Pages';
import { MY_NAME } from '@/common/constants/common';
import { useBookContext } from '@/common/context/Book';
import useDeviceType from '@/common/hooks/useDeviceType';
import { BookWrapper } from '@/components/Book/Book.styled';
import { useRef } from 'react';

function Cover() {
  const leftCoverRef = useRef(null);
  const { isBookOpened, openBook } = useBookContext();
  const isMobileOrTablet = useDeviceType();

  useCoverHook(leftCoverRef);

  return (
    <BookWrapper open={isBookOpened}>
      <CoverLeft ref={leftCoverRef} onClick={isMobileOrTablet ? null : openBook}>
        <CoverContent>
          <h3>Portfolio</h3>
          <div align="center">
            <h1>{MY_NAME}</h1>
            <h2>Frontend Developer</h2>
          </div>
          <p>&copy; 2023-{new Date().getFullYear()}</p>
        </CoverContent>
      </CoverLeft>

      <Pages />

      <CoverRight />
    </BookWrapper>
  );
}

export default Cover;
