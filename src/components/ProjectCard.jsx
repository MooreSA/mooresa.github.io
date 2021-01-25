import React from 'react';

const ProjectCard = (props) => {
  // eslint-disable-next-line no-unused-vars
  const { projectInfo } = props;
  const { name, url, description } = projectInfo;
  return (
    <a className="projects__link" href={url}>
      <div className="projects__card projects__card--upper">{name}</div>
      <div className="projects__card projects__card--lower">{description}</div>
    </a>
  );
};

export default ProjectCard;
