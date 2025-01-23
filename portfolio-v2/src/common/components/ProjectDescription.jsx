import { ProjectDescription as StyledProjectDescription, SectionTitle } from '@/common/components/Experience';
import PropTypes from 'prop-types';

function ProjectDescription({ showTitle, children }) {
  return (
    <>
      {showTitle ? <SectionTitle>Description:</SectionTitle> : null}
      <StyledProjectDescription>
        {children}
      </StyledProjectDescription>
    </>
  );
}

ProjectDescription.propTypes = {
  showTitle: PropTypes.bool,
  children: PropTypes.node,
};

ProjectDescription.defaultProps = {
  showTitle: true,
  children: null,
};

export default ProjectDescription;
