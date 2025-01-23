import { ProjectResponsibilities, SectionTitle } from '@/common/components/Experience';

function KlikaResponsibilities() {
  return (
    <>
      <SectionTitle>Responsibilities:</SectionTitle>
      <ProjectResponsibilities>
        <li>finalization and improvement of the vacation calculation system for different company offices (for different
          countries);
        </li>
        <li>optimization of the list of commands to display recorded working time, vacations and other things by
          optimizing the backend;
        </li>
        <li>unloading the user list page by adding a separate page for each user, adding a new API on the backend,
          updating the design, optimizing the old API;
        </li>
        <li>monitoring of system users with integration into the database (MySQL/PostgreSQL) and AWS;</li>
      </ProjectResponsibilities>
    </>
  );
}

export default KlikaResponsibilities;
