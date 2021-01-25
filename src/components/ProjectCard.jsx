import React from 'react';

const ProjectCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { projectInfo } = props;
  const { name, url } = projectInfo;
  return (
    <a className="projects__card" href={url}>
      { name }
    </a>
  );
};

export default ProjectCard;
