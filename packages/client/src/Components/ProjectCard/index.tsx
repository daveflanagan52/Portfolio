import React, { ReactNode } from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { IProject } from '../../Types';
import Button, { ButtonType } from '../Button';
import Card from '../Card';

interface ProjectCardProps {
  project: IProject,
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => (
  <Card
    className="mb-4"
    headerItems={[
      <h6 key="title" className="card-title">{project.name}</h6>,
    ]}
  >
    <div className="mb-2">
      {project.tags.map((tag) => <span className="badge bg-primary text-white me-2">{tag}</span>)}
    </div>
    <p>{project.description}</p>
    <div className="d-flex">
      {project.url && <Button type={ButtonType.Primary} icon={faSearch} text="View" externalLink={project.url} />}
      {project.github && <Button type={ButtonType.Dark} icon={faGithub} externalLink={project.github} className="ms-auto" />}
    </div>
  </Card>
);

export default ProjectCard;
