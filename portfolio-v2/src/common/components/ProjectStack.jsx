import { Chip } from '@/common/components/Chip';
import Divider from '@/common/components/Divider';
import { ToolsList, ToolsWrapper } from '@/common/components/Tools';
import PropTypes from 'prop-types';

function ProjectStack({ showTitle, tools, showDivider }) {
  return (
    <>
      <ToolsWrapper>
        {showTitle ? <div className="title">Tools and Technologies</div> : null}

        <ToolsList>
          {tools.map((tool) => (
            <Chip key={tool}>
              <span>{tool}</span>
            </Chip>
          ))}
        </ToolsList>
      </ToolsWrapper>
      {showDivider ? <Divider /> : null}
    </>
  );
}

ProjectStack.propTypes = {
  showTitle: PropTypes.bool,
  showDivider: PropTypes.bool,
  tools: PropTypes.arrayOf(PropTypes.string),
};

ProjectStack.defaultProps = {
  showTitle: true,
  showDivider: true,
  tools: [],
};

export default ProjectStack;
