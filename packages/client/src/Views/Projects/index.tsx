import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

import Row from '../../Components/Row';
import Column from '../../Components/Column';
import Loader from '../../Components/Loader';

import { useGetProjectsQuery } from '../../Services/Data';
import ProjectCard from '../../Components/ProjectCard';

const Projects: React.FC = () => {
  const projects = useGetProjectsQuery(undefined);
  return (
    <>
      <Helmet>
        <title>Dave Flanagan | Projects</title>
      </Helmet>
      <Loader show={projects.isLoading} />
      <h2>Projects</h2>
      <Row>
        {(projects.data || []).map((project) => <Column md={6}><ProjectCard project={project} /></Column>)}
      </Row>
    </>
  );
};

export default Projects;
