import PageContent from '@/common/components/PageContent';
import PropTypes from 'prop-types';
import { getComponent } from '@/components/Pages/Experience/Experience.utils';

function Experience({ title, part }) {
  const Component = getComponent(part);
  return (
    <PageContent title={title}>
      <Component />
    </PageContent>
  );
}

Experience.propTypes = {
  title: PropTypes.string,
  part: PropTypes.number,
};

Experience.defaultProps = {
  title: null,
  part: null,
};

export default Experience;
