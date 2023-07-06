import Link from "next/link";
import type { ProjectType } from "../../lib/types";
import TextGenerator from "./TextGenerator";
import ListGenerator from "./ListGenerator";
import ProjectLinks from "./ProjectLinks";

export default function Project({
  projectDetails,
}: {
  projectDetails: ProjectType;
}) {
  return (
    <div className="project">
      <h3>{projectDetails.name}</h3>
      <TextGenerator text={projectDetails.description} />
      <ListGenerator list={projectDetails.stack} />
      <ProjectLinks
        gh={projectDetails.github ?? ""}
        live={projectDetails.live || ""}
      />
    </div>
  );
}
