import { COMMERCIAL_PROJECTS, HOBBY_PROJECTS } from "@/lib/projects";

import ProjectList from "@/components/pages/Projects/ProjectList";

export default function Page() {
  return (
    <main className="max-w-7xl w-11/12 my-8 mx-auto">
      <ProjectList
        headingText={"Projekty komercyjne:"}
        projects={COMMERCIAL_PROJECTS}
      />
      <ProjectList
        headingText={"Projekty hobbistyczne:"}
        projects={HOBBY_PROJECTS}
      />
    </main>
  );
}
