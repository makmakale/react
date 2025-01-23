import klika from '@/assets/images/projects/klika.png';
import { ProjectDescription, ProjectImage2, SectionTitle } from '@/common/components/Experience';

function KlikaDescription() {
  return (
    <>
      <SectionTitle>Description:</SectionTitle>
      <ProjectDescription>
        <ProjectImage2 src={klika} alt="Klika Internal Projects" />

        <div style={{ marginLeft: 216 }}>
          <h4>Time Off Management:</h4>
          <p>A system for recording working hours, vacations, overtime and other
            things.
          </p>

          <h4>Employee Management:</h4>
          <p> An employee search system that displays brief information about an
            employee’s affiliation with a specific project.
          </p>

          <h4>Corporate Website.</h4>
        </div>
      </ProjectDescription>
    </>
  );
}

export default KlikaDescription;
