import foxhunt from '@/assets/images/projects/foxhunt.png';
import { ProjectImage, ProjectInfo, SectionTitle } from '@/common/components/Experience';
import ProjectDescription from '@/common/components/ProjectDescription';
import ProjectTable from '@/common/components/ProjectTable';

function FoxhuntHeader() {
  return (
    <>
      <SectionTitle>Project Info:</SectionTitle>

      <ProjectInfo>
        <ProjectImage src={foxhunt} alt="Fox Hunt" width={150} />

        <div className="content">
          <ProjectTable
            project="Fox Hunt"
            title="Frontend Developer"
            stack="React Native"
          />

          <ProjectDescription showTitle={false}>
            <p>
              Simulator of amateur racing sport that combines radio direction
              finding with the map and compass skills of orienteering.
            </p>
          </ProjectDescription>
        </div>
      </ProjectInfo>
    </>
  );
}

export default FoxhuntHeader;
