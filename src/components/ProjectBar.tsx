import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import Image from "next/image";

const ProjectBar = () => {
  const links = [
    {
      id: 1,
      title: "My Brain",
      icon: (
        <Image
          src="/images/my_brain_logo.png"
          width={100}
          height={100}
          alt="my-brain Logo"
          loading="eager"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 2,
      title: "Course Yuga",
      icon: (
        <Image
          src="/images/course_yuga_logo.png"
          width={100}
          height={100}
          alt="course-yuga Logo"
          loading="eager"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 3,
      title: "ThreeJs Portfolio",
      icon: (
        <Image
          src="/images/threejs_portfolio_logo.png"
          width={100}
          height={100}
          loading="eager"
          alt="threejs-portfolio Logo"
          className="size-12 object-cover p-0 rounded-full dark:invert"
        />
      ),
    },
    {
      id: 4,
      title: "Master's Recipe an Expo App",
      icon: (
        <Image
          src="/images/master_reciepe.png"
          width={100}
          height={100}
          loading="eager"
          alt="master-reciepe Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 5,
      title: "Kronoskill ~ Skill learning platform",
      icon: (
        <Image
          src="/images/kronoskill.png"
          width={100}
          height={100}
          loading="eager"
          alt="kronoskill Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 6,
      title: "KM Solar Energy",
      icon: (
        <Image
          src="/images/km_solar_energy_logo.png"
          width={100}
          height={100}
          loading="eager"
          alt="km-solar-energy Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
   
    // {
    //   id: 6,
    //   title: "KM Solar Energy",
    //   icon: (
    //     <Image
    //       src="/images/km_solar_energy_logo.png"
    //       width={100}
    //       height={100}
    //       alt="km-solar-energy Logo"
    //       className="size-12 object-cover p-0 rounded-full"
    //     />
    //   ),
    // },
  ];
  return (
    <div className="flex items-end justify-end h-[8rem] w-full">
      <FloatingDock items={links} />
    </div>
  );
};

export default ProjectBar;
