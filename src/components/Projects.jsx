import React from "react";
import { Link } from "react-router-dom";
import Identicons from "react-identicons";
import { truncate, daysRemaining } from '../store'
import { FaEthereum } from 'react-icons/fa'

const Projects = ({projects}) => {
  return (
    <div className="flex flex-col px-6 mb-7">
      <div className="flex justify-center items-center flex-wrap">
        {projects
          .map((project, i) => (
            <ProjectCard key={i} id={i} project={project}/>
          ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, id }) => (
  <div className="rounded-lg shadow-lg bg-white w-64 m-4" id="projects">
    <Link to={"/projects/" + project.id}>
      <img
        src={project.imageURL}
        className="rounded-xl h-64 w-full object-cover"
        alt={project.title}
      />

      <div className="p-4">
        <h5>{project.title}</h5>
        <div className="flex flex-col">
          <div className="flex justify-between items-center mb-3">
            <Identicons
              className="rounded-full shadow-md"
              string={project.owner}
              size={15}
            />
            <small className="text-grey-700">{truncate(project.owner, 4, 4, 11)}</small>
          </div>
          <small className="text-grey-500">2 days left
            {/* {new Date.getTime() > Number(project.expiresAt + '000')
          ? "Expired" : daysRemaining(project.expiresAt)}{" "} 
          left */}
          {/* {expired ? 'Expired' : daysRemaining(project.expiresAt) + ' left'} */}
          </small>
        </div>
        <div className="w-full bg-gray-300">
          <div
            className="bg-green-600 text-xs font-medium
            text-green-100 text-center p-0.5 leading-none
            rounded-l-full"
            style={{ width: `${(project.raised / project.cost) * 100}%` }}
          ></div>
        </div>

        <div
            className="flex justify-between items-center 
        font-bold mt-1 mb-2 text-gray-700"
          >
            <small>{project.raised} ETH Raised</small>
            <small className="flex justify-start items-center">
              <FaEthereum />
              <span>{project.cost} ETH</span>
            </small>
          </div>

        <div className="flew justify-between items-center flex-wrap mt-4 mb-2">
          <small small className="font-bold">
          {project.backers} Backer{project.backers == 1 ? '' : 's'}
          </small>
          <div>
              {
              // project.status == 0 ? (
              //   <small className="text-red-500">Expired</small>
              // ) : 
              project?.status == 0 ? (
                <small className="text-gray-500">Open</small>
              ) : project?.status == 1 ? (
                <small className="text-green-500">Accepted</small>
              ) : project?.status == 2 ? (
                <small className="text-gray-500">Reverted</small>
              ) : project?.status == 3 ? (
                <small className="text-red-500">Deleted</small>
              ) : (
                <small className="text-orange-500">Paid</small>
              )}
            </div>
        </div>
      </div>
    </Link>
  </div>
);

export default Projects;
