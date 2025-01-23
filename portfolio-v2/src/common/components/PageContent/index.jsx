import PropTypes from 'prop-types';
import { PageContainer, PageTitle } from '@/common/components/PageContent/PageContent.styled';

function PageContent({ title, centered, children }) {
  return (
    <PageContainer className={centered ? 'center' : ''}>
      {title ? <PageTitle>{title}</PageTitle> : null}
      {children}
    </PageContainer>
  );
}

PageContent.propTypes = {
  title: PropTypes.string,
  centered: PropTypes.bool,
  children: PropTypes.node,
};

PageContent.defaultProps = {
  title: null,
  centered: false,
  children: null,
};

export default PageContent;
