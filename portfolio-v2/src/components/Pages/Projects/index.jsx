import PageContent from '@/common/components/PageContent';
import { projects } from '@/components/Pages/Projects/Projects.constants';
import {
  ProjectCard,
  ProjectCardButtonsGroup,
  ProjectCardContent,
  ProjectCardContentDetails,
  ProjectCardImage,
  ProjectLines,
  ProjectsContainer,
} from '@/components/Pages/Projects/Projects.styled';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

function Projects({ title, part }) {
  const [slicedProjects, setSlicedProjects] = useState(projects);

  useEffect(() => {
    const nextPart = part * 3;
    setSlicedProjects(projects.slice(nextPart - 3, nextPart));
  }, [part]);

  return (
    <PageContent title={title}>
      <ProjectsContainer>
        {slicedProjects.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectLines />

            <ProjectCardContent>
              <ProjectCardImage>
                <img src={project.img} alt={project.title} />
              </ProjectCardImage>

              <ProjectCardContentDetails>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ProjectCardButtonsGroup>
                  {project.viewLink
                    ? (
                      <a href={project.viewLink} target="_blank" rel="noreferrer">
                        <i className="bx bx-link" /> View App
                      </a>
                    ) : null}
                  <a href={project.sourceLink} target="_blank" rel="noreferrer">
                    <i className="bx bxl-github" /> Source Code
                  </a>
                </ProjectCardButtonsGroup>
              </ProjectCardContentDetails>
            </ProjectCardContent>
          </ProjectCard>
        ))}
      </ProjectsContainer>
    </PageContent>
  );
}

Projects.propTypes = {
  title: PropTypes.string,
  part: PropTypes.number,
};

Projects.defaultProps = {
  title: null,
  part: 1,
};

export default Projects;
