import ProjectStack from '@/common/components/ProjectStack';
import { techs } from '@/common/constants/techs';

const tools = [
  techs.react,
  techs.redux,
  techs.reduxForm,
  techs.echarts,
  techs.mui,
  techs.scss,
  techs.sc,
  techs.node,
];

function CloudTools() {
  return (
    <ProjectStack tools={tools} showDivider={false} />
  );
}

export default CloudTools;
