import MotionHeading from "../../shared/MotionHeading";
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

export default function ProjectList({
  headingText,
  projects,
}: {
  headingText: string;
  projects: any[];
}) {
  return (
    <>
      <MotionHeading
        initial="hidden"
        animate="visible"
        variant={headingVariant}
        className="text-center"
      >
        {headingText}
      </MotionHeading>

      <div className="my-12 mx-auto lg:grid lg:grid-cols-5 lg:gap-12 w-full max-w-4xl">
        {projects.map((project, idx, arr) => {
          let gridClasses = "";
          if (arr.length === 1) {
            gridClasses = "col-start-2";
          } else {
            if (idx % 2 === 0) {
              gridClasses = "col-start-1";
            } else {
              gridClasses = "col-start-3";
            }
          }
          return (
            <Project
              className={gridClasses}
              key={project.name}
              projectDetails={project}
            />
          );
        })}
      </div>
    </>
  );
}
