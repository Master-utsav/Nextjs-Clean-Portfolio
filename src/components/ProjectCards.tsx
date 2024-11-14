import React from "react";
import { Project  } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";

const VisitSite = () => { return (<ExternalLink className="size-4 dark:text-white text-black" />) };

interface ProjectCardsProps {
  item: Project,
}

const ProjectCards: React.FC<ProjectCardsProps> = ({item}) => {
  return (
          <Card className="min-w-[40vw] dark:bg-black-200/30 bg-white-800/40 flex flex-col h-full relative justify-between border-[1px] border-blue-800/30 dark:border-blue-500/30 rounded-lg backdrop-blur-3xl">
            {(item.id === 4 || item.id === 3 ) ? (
                <video 
                autoPlay
                loop
                muted
                playsInline
                className="aspect-video rounded-t-lg object-cover z-30"
                >
                  <source src={item.imageSrc} type="video/mp4"/>
                </video>
            ) : (
              <>
                <Image
                src={item.imageSrc}
                alt={item.title}
                layout="responsive"
                width={400}
                height={250}
                loading="eager"
                className="rounded-t-lg object-cover z-30"
                />
                <Image
                src={item.imageSrc}
                alt={item.title}
                layout="responsive"
                width={400}
                height={250}
                className="absolute inset-0 rounded-t-lg -z-10 object-cover blur-xl"
                />
              </>
            )}
            <CardContent className="w-full relative flex flex-col p-4 h-full justify-between overflow-hidden ">
              <div className="w-full text-center flex flex-col justify-between">
                <h3 className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r dark:from-blue-300 from-blue-800 dark:to-blue-800 to-blue-300 font-[family-name:var(--font-salsa)] mb-2">
                  {item.title}
                </h3>
                <p className="whitespace-normal text-gray-600 dark:text-gray-400 text-sm mb-2 font-[family-name:var(--font-assistant)]">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2 items-center justify-center">
                  {item.techStack.map((tech, techIdx) => (
                    <div
                      key={techIdx}
                      className="flex items-center gap-1 rounded-full px-2 py-1 bg-transparent border-[1px] border-blue-800/30 dark:border-blue-500/30 "
                    >
                      <Image
                        src={tech.src}
                        alt={tech.name}
                        width={16}
                        height={16}
                      />
                      <span className="text-xs font-[family-name:var(--font-assistant)] text-black-200 dark:text-gray-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-between mt-2 flex-row gap-1 ">
                <Link href={item.gitLink} target="_blank">
                  <Button variant="gooeyLeft" className="bg-transparent gap-1 text-black-200 dark:text-white border-[1px] rounded-lg dark:border-blue-500/30 border-blue-800/30">
                    <FaGithub className="size-5 dark:text-white text-black" />GitHub
                  </Button>
                </Link>
                <Link href={item.liveLink} target="_blank">
                  <Button variant="expandIcon" className="gap-1 electric-lightning-effect rounded-lg dark:text-white text-black dark:bg-black-200 bg-white-600/30  text-base transition-all delay-100 duration-500 ease-in-out border-[1px] dark:border-blue-500/30 border-blue-800/30 dark:hover:bg-black-100 hover:bg-white-600/50" Icon={VisitSite} iconPlacement="hide-from-right">
                    Visit site
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
  );
};

export default ProjectCards;
