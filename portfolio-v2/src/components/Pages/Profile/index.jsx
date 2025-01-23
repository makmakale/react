import photo from '@/assets/images/profile/photo.jpg';
import PageContent from '@/common/components/PageContent';
import { MY_NAME } from '@/common/constants/common';
import ProfileAbout from '@/components/Pages/Profile/Profile.About';
import ProfileContacts from '@/components/Pages/Profile/Profile.Contacts';
import ProfileDownloadCv from '@/components/Pages/Profile/Profile.DownloadCV';
import {
  ProfileDescription,
  ProfileImage,
  ProfileJobTitle,
  ProfileName,
} from '@/components/Pages/Profile/Profile.styled';
import { getExperienceYears } from '@/components/Pages/Profile/Profile.utils';

function ProfilePage() {
  const experience = getExperienceYears();

  return (
    <PageContent centered>
      <ProfileImage>
        <img src={photo} alt={MY_NAME} />
      </ProfileImage>

      <ProfileName>{MY_NAME}</ProfileName>
      <ProfileJobTitle>Frontend Developer</ProfileJobTitle>

      <ProfileDescription>
        Hi, I&apos;m {MY_NAME}, and I&apos;m highly skilled and motivated
        Frontend Developer with more than {experience} years of experience in developing
        user-friendly and responsive web applications on such library as React.
      </ProfileDescription>

      <ProfileAbout />
      <ProfileContacts />

      <ProfileDownloadCv />
    </PageContent>
  );
}

export default ProfilePage;
