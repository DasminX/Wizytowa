import type { ProjectType } from "../../../lib/types";
import TextGenerator from "./TextGenerator";
import ListGenerator from "./ListGenerator";
import ProjectLinks from "./ProjectLinks";

export default function Project({
  projectDetails,
  className = "",
}: {
  projectDetails: ProjectType;
  className?: string;
}) {
  return (
    <div
      className={`my-12 lg:my-0 col-span-3 p-6 relative flex flex-col rounded-[2rem] border-2 border-dashed border-secondary-color shadow-sm shadow-active-link duration-300 ${className}`}
    >
      <h3 className="text-center border-b-2 mb-4 border-secondary-color w-full">
        {projectDetails.name}
      </h3>
      <TextGenerator
        text={projectDetails.description}
        buttonText={"Pokaż opis projektu"}
      />
      <ListGenerator
        list={projectDetails.stack}
        buttonText={"Pokaż technologie"}
      />
      <ProjectLinks
        gh={projectDetails.github ?? ""}
        live={projectDetails.live || ""}
      />
    </div>
  );
}
