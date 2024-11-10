import React from 'react'
import { ContainerScroller } from './ui/ContainerScroller'
import ProjectCards from './ProjectCards'
import { ProjectsData } from '@/constants'

const ProjectsContainer = () => {
  return (
    <div className="flex flex-col overflow-hidden justify-center items-center px-1">
        {ProjectsData.map((item) => (
            <ContainerScroller
            key={item.id}
            titleComponent={
                <h1 className="text-3xl font-semibold text-black dark:text-white font-[family-name:var(--font-assistant)]">
                  Project {" "}{item.id} <br />
                  <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none font-[family-name:var(--font-salsa)]">
                    {item.title}
                  </span>
                </h1>
            }
          > 
            <ProjectCards item={item} key={item.id} />
          </ContainerScroller>
        ))}
    
  </div>
  )
}

export default ProjectsContainer
