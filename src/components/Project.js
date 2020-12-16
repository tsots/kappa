import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import sanityClient from '../client';

const Project = () => {
  const [projectData, setProjectData] = useState(null);

useEffect(() => {
  sanityClient
  .fetch(`*[_type == "project"]{
    title,
    date,
    place,
    description,
    projectType,
    link,
    tags
   
  }`)
  .then((data) => setProjectData(data))
  .catch(console.error)
}, []);
  return (
    <main className="bg-green-100 min-h-screen p-12">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center">
          The Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12"> Welcome to my projects</h2>
        <section className="grid grid-cols-3 gap-8">
          {projectData && projectData.map((project, index) => (

            <article className="relative rounded-lg shadow-xl bg-white p-16">
            <h3 className="text-gray-600 text-3xl font-bold mb-2 hover:text-red-700">
              <a href={project.link} 
              alt={project.title}
              target="_blank"
              rel="noopener noreffer"
              >{project.title}</a>
              </h3>
            <div className="text-gray-500 text-xs space-x-4">
              <span>
                <strong className="font-bold">Finished on</strong>:{" "}
                {new Date(project.date).toLocaleDateString()}
              </span>
              <span></span>
              <span></span>
              <p className="my-6 text-lg text-gray-700 leading-relaxed">
                {project.description}
              </p>
          <span role="img" aria-label="right pointer flex justify-center items-center">
            <a href={project.link} 
              alt={project.title}
              target="_blank"
              rel="noopener noreffer"
              className="text-red-500 font-bold hover:underline hover:text-red-400 text-xl">
            View Th Project {" "}👉
            </a>
          </span>
            </div>
          </article>
         ))}
        </section>
      </section>
    </main>
  )
}

export default Project
