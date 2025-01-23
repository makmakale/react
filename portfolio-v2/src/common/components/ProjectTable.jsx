import { ProjectTable as StyledProjectTable } from '@/common/components/Experience';
import PropTypes from 'prop-types';

function ProjectTable({
  project, title, stack, team,
}) {
  return (
    <StyledProjectTable>
      <tbody>
        {project ? (
          <tr>
            <td>Project</td>
            <td>{project}</td>
          </tr>
        ) : null}
        {title ? (
          <tr>
            <td>Title</td>
            <td>{title}</td>
          </tr>
        ) : null}
        {team ? (
          <tr>
            <td>Team</td>
            <td>{team}</td>
          </tr>
        ) : null}
        {stack ? (
          <tr>
            <td>Stack</td>
            <td>{stack}</td>
          </tr>
        ) : null}
      </tbody>
    </StyledProjectTable>
  );
}

ProjectTable.propTypes = {
  project: PropTypes.string,
  title: PropTypes.string,
  stack: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  team: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

ProjectTable.defaultProps = {
  project: null,
  title: null,
  stack: null,
  team: null,
};

export default ProjectTable;
