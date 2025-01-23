import echartsIcon from '@/assets/images/skills/echarts.png';
import i18nextIcon from '@/assets/images/skills/i18next.png';
import muiIcon from '@/assets/images/skills/material-ui.png';
import mobxIcon from '@/assets/images/skills/mobx.svg';
import nextjsIcon from '@/assets/images/skills/nextjs.svg';
import formikIcon from '@/assets/images/skills/formik.svg';
import PageContent from '@/common/components/PageContent';
import { SkillsBox, SkillsContent, SkillsSection } from '@/components/Pages/Skills/Skills.styled';
import PropTypes from 'prop-types';

const prismaIcon = 'https://cdn.icon-icons.com/icons2/2148/PNG/512/prisma_icon_132076.png';
const sequelizeIcon = 'https://cdn.icon-icons.com/icons2/2415/PNG/512/sequelize_original_logo_icon_146348.png';

function Skills({ title }) {
  return (
    <PageContent title={title}>
      <SkillsSection>
        <h2>Frontend</h2>
        <SkillsContent>
          <SkillsBox><i className="bx bxl-html5" />html</SkillsBox>
          <SkillsBox><i className="bx bxl-css3" />css</SkillsBox>
          <SkillsBox><i className="bx bxl-javascript" />js</SkillsBox>
          <SkillsBox><i className="bx bxl-sass" /> scss</SkillsBox>
          <SkillsBox><i className="bx bxl-react" />react</SkillsBox>
          <SkillsBox><img src={nextjsIcon} alt="next" />next</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux form</SkillsBox>
          <SkillsBox><img src={formikIcon} alt="formik" />formik</SkillsBox>
          <SkillsBox><i className="bx bxl-redux" />redux toolkit</SkillsBox>
          <SkillsBox><img src={muiIcon} alt="material-ui" />material-ui</SkillsBox>
          <SkillsBox><img src={echartsIcon} alt="mobx" />echarts</SkillsBox>
          <SkillsBox><img src={i18nextIcon} alt="i18nextIcon" />i18next</SkillsBox>
          <SkillsBox><img src={mobxIcon} alt="mobx" />mobx</SkillsBox>
          <SkillsBox><i className="bx bxl-bootstrap" />bootstrap</SkillsBox>
        </SkillsContent>
      </SkillsSection>

      <SkillsSection>
        <SkillsSection>
          <h2>Backend</h2>
          <SkillsContent className="content">
            <SkillsBox><i className="bx bxl-nodejs" />node /<br /> express</SkillsBox>
            <SkillsBox><img src={nextjsIcon} alt="next" />next</SkillsBox>
          </SkillsContent>
        </SkillsSection>
      </SkillsSection>

      <SkillsSection>
        <h2>Data</h2>
        <SkillsContent className="content">
          <SkillsBox><i className="bx bxl-postgresql" />mysql / postgresql</SkillsBox>
          <SkillsBox><img src={sequelizeIcon} alt="sequelize" />Sequelize</SkillsBox>
          <SkillsBox><i className="bx bxl-mongodb" />mongodb</SkillsBox>
          <SkillsBox><img src={prismaIcon} alt="Prisma" />Prisma</SkillsBox>
        </SkillsContent>
      </SkillsSection>
    </PageContent>
  );
}

Skills.propTypes = {
  title: PropTypes.string,
};

Skills.defaultProps = {
  title: null,
};

export default Skills;
