import klikaLogo from '@/assets/images/companies/klika.svg';
import { CompanyHeader, CompanyLogo } from '@/common/components/Experience';
import Period from '@/common/components/Period';
import CloudDescription from '@/components/Pages/Experience/IotechaCloud/Cloud.Description';
import CloudHeader from '@/components/Pages/Experience/IotechaCloud/Cloud.Header';
import CloudResponsibilities from '@/components/Pages/Experience/IotechaCloud/Cloud.Responsibilities';

function Part1() {
  return (
    <>
      <CompanyHeader>
        <CompanyLogo src={klikaLogo} alt="Klika-Tech, Inc Logo" />
        <Period>Jul 2021 - Nov 2023</Period>
      </CompanyHeader>

      <CloudHeader />
      <CloudDescription />
      <CloudResponsibilities />
    </>
  );
}

export default Part1;
