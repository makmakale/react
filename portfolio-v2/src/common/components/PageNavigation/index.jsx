import { NextPage, PrevPage } from '@/common/components/PageNavigation/PageNavigation.styled';
import PropTypes from 'prop-types';
import { lastPageNavigation } from '@/common/constants/book';

function PageNavigation(props) {
  const {
    currentPage,
    handlePrevPage,
    handleNextPage,
  } = props;

  if (currentPage === lastPageNavigation) return null;

  if (currentPage % 2 === 0) {
    return (
      <PrevPage onClick={handlePrevPage}>
        <i className="bx bx-chevron-left" />
      </PrevPage>
    );
  }

  return (
    <NextPage onClick={handleNextPage}>
      <i className="bx bx-chevron-right" />
    </NextPage>
  );
}

PageNavigation.propTypes = {
  currentPage: PropTypes.number,
  handlePrevPage: PropTypes.func,
  handleNextPage: PropTypes.func,
};

PageNavigation.defaultProps = {
  currentPage: null,
  handlePrevPage: () => {
  },
  handleNextPage: () => {
  },
};

export default PageNavigation;
