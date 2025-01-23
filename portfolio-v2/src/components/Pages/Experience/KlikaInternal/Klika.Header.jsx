import { ProjectInfo } from '@/common/components/Experience';
import ProjectTable from '@/common/components/ProjectTable';

function KlikaHeader() {
  return (
    <>
      <h2 align="center">Klika Internal Projects</h2>

      <ProjectInfo>
        <ProjectTable
          title="Fullstack Developer"
          team={(
            <div>
              <div>Project Manager</div>
              <div>2 - Fullstack developers</div>
              <div>QA Engineer</div>
            </div>
          )}
          stack={(
            <div>
              <div>Frontend - React, Redux/Mobx</div>
              <div>Backend:</div>
              <ul style={{ marginLeft: '1rem' }}>
                <li><b>Time Off</b> - Nodejs</li>
                <li><b>Employee management</b> - Symfony (PHP)</li>
              </ul>
            </div>
          )}
        />
      </ProjectInfo>
    </>
  );
}

export default KlikaHeader;
