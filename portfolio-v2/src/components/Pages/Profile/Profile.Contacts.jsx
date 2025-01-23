import { ProfileSection, ProfileSectionTitle, ProfileTable } from '@/components/Pages/Profile/Profile.styled';

function ProfileContacts() {
  return (
    <ProfileSection>
      <ProfileSectionTitle>Contacts</ProfileSectionTitle>
      <ProfileTable>
        <tbody>
          <tr>
            <td>Phone:</td>
            <td><a href="tel:+375293783772">+375(29) 378-37-72</a></td>
          </tr>
          <tr>
            <td>Mail:</td>
            <td><a href="mailto:makmakale87@gmail.com">makmakale87@gmail.com</a></td>
          </tr>
          <tr>
            <td>Telegram:</td>
            <td><a href="https://t.me/makmakale" target="_blank" rel="noreferrer">t.me/makmakale</a></td>
          </tr>
          <tr>
            <td>LinkedIn:</td>
            <td>
              <a
                href="https://www.linkedin.com/in/makmakale"
                target="_blank"
                rel="noreferrer"
              >linkedin.com/in/makmakale
              </a>
            </td>
          </tr>
          <tr>
            <td>Github:</td>
            <td>
              <a
                href="https://github.com/makmakale?tab=repositories"
                target="_blank"
                rel="noreferrer"
              >
                View projects
              </a>
            </td>
          </tr>
        </tbody>
      </ProfileTable>
    </ProfileSection>
  );
}

export default ProfileContacts;
