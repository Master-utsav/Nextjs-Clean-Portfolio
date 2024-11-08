import TechCards from "@/components/TechCards";
import { Frameworks , Frontend , Backend} from "@/constants";
import React from "react";


const TechSection: React.FC = () => {
  return (
    <section id="tech" className="w-full flex flex-col gap-10 px-4 py-8 md:pt-24 pt-28">
      <TechCards itemArray={Frameworks} title="Frameworks" />
      <TechCards itemArray={Frontend} title="Frontend" />
      <TechCards itemArray={Backend} title="Backend" />
    </section>
  );
};

export default TechSection;
