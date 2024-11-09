import React from "react";
import { FloatingDock } from "@/components/ui/FloatingDock";
import Image from "next/image";

const ProjectBar = () => {
  const links = [
    {
      id: 1,
      title: "Course Yuga",
      icon: (
        <Image
          src="/images/course_yuga_logo.png"
          width={100}
          height={100}
          alt="course-yuga Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 2,
      title: "ThreeJs Portfolio",
      icon: (
        <Image
          src="/images/my_picture_logo.jpg"
          width={100}
          height={100}
          alt="threejs-portfolio Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 3,
      title: "KM Solar Energy",
      icon: (
        <Image
          src="/images/km_solar_energy_logo.png"
          width={100}
          height={100}
          alt="km-solar-energy Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 4,
      title: "Course Yuga",
      icon: (
        <Image
          src="/images/course_yuga_logo.png"
          width={100}
          height={100}
          alt="course-yuga Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
    {
      id: 5,
      title: "ThreeJs Portfolio",
      icon: (
        <Image
          src="/images/my_picture_logo.jpg"
          width={100}
          height={100}
          alt="threejs-portfolio Logo"
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
          alt="km-solar-energy Logo"
          className="size-12 object-cover p-0 rounded-full"
        />
      ),
    },
  ];
  return (
    <div className="flex items-end justify-end h-[8rem] w-full">
      <FloatingDock items={links} />
    </div>
  );
};

export default ProjectBar;
