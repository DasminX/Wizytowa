import { PROJECTS } from "@/lib/projects";
import MotionHeading from "../common/MotionHeading";
import Project from "./Project";

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export default function ProjectList() {
  return (
    <>
      <MotionHeading
        initial="hidden"
        animate="visible"
        variant={headingVariant}
      >
        Lista moich projektów, które do tej pory zrealizowałem:
      </MotionHeading>

      <div className="projects-list">
        {PROJECTS.map((project) => (
          <Project key={project.name} projectDetails={project} />
        ))}
      </div>
    </>
  );
}
