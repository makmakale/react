import PageContent from '@/common/components/PageContent';
import IntroContent from '@/components/Pages/Intro/Content';
import IntroHero from '@/components/Pages/Intro/Hero';
import IntroNavigation from '@/components/Pages/Intro/Navigation';

function IntroPage() {
  return (
    <PageContent>
      <IntroHero />
      <IntroNavigation />
      <IntroContent />
    </PageContent>
  );
}

export default IntroPage;
