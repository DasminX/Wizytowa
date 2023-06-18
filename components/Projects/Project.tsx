import Link from "next/link";
import type { ProjectType } from "../../lib/types";

export default function Project({
  projectDetails,
}: {
  projectDetails: ProjectType;
}) {
  return (
    <div className="project">
      <h3>{projectDetails.name}</h3>
      <p>{projectDetails.description}</p>
      <ul>
        {projectDetails.stack.map((tech: string) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <Link href={projectDetails.github}>{projectDetails.github}</Link>
      {projectDetails.live && (
        <>
          <br></br>
          <Link href={projectDetails.live}>{projectDetails.live}</Link>
        </>
      )}
    </div>
  );
}
