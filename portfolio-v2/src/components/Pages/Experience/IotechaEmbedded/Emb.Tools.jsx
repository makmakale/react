import ProjectStack from '@/common/components/ProjectStack';
import { techs } from '@/common/constants/techs';

const tools = [
  techs.react,
  techs.redux,
  techs.formik,
  techs.mui,
  techs.lang,
  techs.sc,
];

function EmbTools() {
  return (
    <ProjectStack tools={tools} />
  );
}

export default EmbTools;
