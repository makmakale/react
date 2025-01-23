import ProjectStack from '@/common/components/ProjectStack';

const tools = [
  '1C Enterprise 8.2/8.3',
  '1C Enterprise 7',
  'Illustrator',
  'InDesign',
  'Photoshop',
  '3ds max',
  'Word/Excel/Power Point',
  'Modx',
  'Joomla 1.5/3.3',
];

function ZavodTools() {
  return (
    <ProjectStack tools={tools} showDivider={false} />
  );
}

export default ZavodTools;
