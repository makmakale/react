import cvDownload from '@/assets/files/resume-mmakarenko-en.pdf';
import { ProfileDownloadCV } from '@/components/Pages/Profile/Profile.styled';

function ProfileDownloadCv() {
  return (
    <ProfileDownloadCV href={cvDownload} target="_blank">
      <span />
      <span />
      <span />
      <span />
      Download CV
    </ProfileDownloadCV>
  );
}

export default ProfileDownloadCv;
