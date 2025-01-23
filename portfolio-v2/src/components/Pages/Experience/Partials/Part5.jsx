import itechartLogo from '@/assets/images/companies/itechart.png';
import { CompanyHeader, CompanyLogo } from '@/common/components/Experience';
import Period from '@/common/components/Period';
import CargoHeader from '@/components/Pages/Experience/iTechArt/Cargo.Header';
import FoxhuntHeader from '@/components/Pages/Experience/iTechArt/Foxhunt.Header';
import FoxhuntResponsibilities from '@/components/Pages/Experience/iTechArt/Foxhunt.Responsibilities';
import KlikaResponsibilities2 from '@/components/Pages/Experience/KlikaInternal/Klika.Responsibilities2';
import KlikaTools from '@/components/Pages/Experience/KlikaInternal/Klika.Tools';

function Part5() {
  return (
    <>
      <KlikaResponsibilities2 />
      <KlikaTools />

      <CompanyHeader>
        <CompanyLogo src={itechartLogo} alt="iTechArt Group Logo" height={34} />
        <Period>Dec 2020 - Jun 2021</Period>
      </CompanyHeader>

      <FoxhuntHeader />
      <FoxhuntResponsibilities />
      <CargoHeader />
    </>
  );
}

export default Part5;
