import { usePages } from '@/common/components/Pages/Pages.hooks';
import { bookPages } from '@/common/constants/book';
import { ContentList, ContentListItem } from '@/components/Pages/Intro/Content/Content.styled';
import useDeviceType from '@/common/hooks/useDeviceType.js';

function IntroContent() {
  const { moveToPage } = usePages();
  const isMobileOrTablet = useDeviceType();

  if (isMobileOrTablet) return null;

  return (
    <>
      <h2>Content</h2>
      <ContentList>
        {bookPages.filter((page) => page.title && page.page > 1).map((page) => (
          <ContentListItem
            key={page.page}
            onClick={() => moveToPage(page.page)}
          >
            <span>{page.title}</span>
            <span>{page.page}</span>
          </ContentListItem>
        ))}
      </ContentList>
    </>
  );
}

export default IntroContent;
