import { WorkPeriod } from '@/common/components/Experience';
import PropTypes from 'prop-types';

function Period({ children }) {
  return (
    <WorkPeriod>
      <i className="bx bx-calendar" /> {children}
    </WorkPeriod>
  );
}

Period.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Period;
