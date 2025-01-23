import zavodLogo from '@/assets/images/companies/zavod.png';
import pumps from '@/assets/images/projects/nasosy.webp';
import {
  CompanyHeader, CompanyLogo, ProjectImage, ProjectInfo,
} from '@/common/components/Experience';
import Period from '@/common/components/Period';
import ManagerResponsibilities from '@/components/Pages/Experience/Zavod/Manager.Responsibilities';
import MarketerResponsibilities from '@/components/Pages/Experience/Zavod/Marketer.Responsibilities';
import ZavodTools from '@/components/Pages/Experience/Zavod/Zavod.Tools';

function Part8() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={zavodLogo} alt="Zavod Promburvod Logo" height={40} />
        <Period>Apr 2010 - May 2020</Period>
      </CompanyHeader>

      <ProjectInfo>
        <ProjectImage src={pumps} alt="PLant Production" />

        <div>
          Plant for the production of pumps and pumping equipment, supply of imported pumps.
        </div>
      </ProjectInfo>

      <MarketerResponsibilities />
      <ManagerResponsibilities />
      <ZavodTools />
    </>
  );
}

export default Part8;
