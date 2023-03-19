import React from 'react'
import BackProject from '../components/BackProject'
import DeleteProject from '../components/DeleteProject'
import ProjectBackers from '../components/ProjectBackers'
import ProjectDetails from '../components/ProjectDetails'
import UpdateProject from '../components/UpdateProject'

const Project = () => {
  return (
    <>
      <ProjectDetails />
      <UpdateProject />
      <ProjectBackers />
      <BackProject />
      <DeleteProject />
    </>
  )
}

export default Project
