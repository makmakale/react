import ProjectStack from '@/common/components/ProjectStack';
import { techs } from '@/common/constants/techs';

const tools = [
  techs.react,
  techs.rn,
  techs.redux,
  techs.rtk,
  techs.node,
  techs.postgre,
  techs.gMap,
  techs.sc,
];

function ItechartTools() {
  return (
    <ProjectStack tools={tools} showDivider={false} />
  );
}

export default ItechartTools;
