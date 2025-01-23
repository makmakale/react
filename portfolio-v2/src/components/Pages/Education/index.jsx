import PropTypes from 'prop-types';
import PageContent from '@/common/components/PageContent';
import {
  EduCard,
  EduCardContent,
  EduCardImage,
  EduCardImageZoom,
  EduCardPeriod,
  EduTimeline,
} from '@/components/Pages/Education/Education.styled';
import { education } from '@/common/constants/education';
import { useFullScreenImageContext } from '@/common/context/FullScreenImage';

function Education({ title }) {
  const { showFullImage } = useFullScreenImageContext();

  return (
    <PageContent title={title}>
      <EduTimeline>
        {education.map((educ) => (
          <EduCard key={educ.id}>
            {educ.zoomIn ? (
              <EduCardImage image={educ.image} onClick={() => showFullImage(educ.image)}>
                <EduCardImageZoom>
                  <i className="bx bx-zoom-in" />
                </EduCardImageZoom>
              </EduCardImage>
            ) : (
              <EduCardImage image={educ.image} />
            )}

            <EduCardContent>
              <EduCardPeriod><span>{educ.period}</span></EduCardPeriod>
              <h3>{educ.title}</h3>
              <p>{educ.spec}</p>
            </EduCardContent>
          </EduCard>
        ))}
      </EduTimeline>
    </PageContent>
  );
}

Education.propTypes = {
  title: PropTypes.string,
};

Education.defaultProps = {
  title: null,
};

export default Education;
