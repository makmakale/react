import { ProjectInfo } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function EmbHeader() {
  return (
    <>
      <h2 align="center">IoT.ON™ Embedded Software</h2>

      <ProjectInfo>
        <ProjectTable
          title="Frontend Developer"
          team={(
            <div>
              <div>More than two teams.</div>
              <div>Project Manager</div>
              <div>Frontend developer (one for all)</div>
              <div>4-8 - Backend developers</div>
              <div>2 - QA Engineer</div>
            </div>
          )}
          stack={(
            <div>
              <div>Frontend - React, Redux</div>
              <div>Backend - C++</div>
            </div>
          )}
        />
      </ProjectInfo>
    </>
  );
}

export default EmbHeader;
