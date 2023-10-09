import { TECHNOLOGIES } from "@/lib/contents";
import MotionHeading from "../../shared/MotionHeading";
import MotionList from "../../shared/MotionList";

const headingVariant = {
  hidden: {
    opacity: 0,
    y: 0,
  },
  visible: {
    opacity: 1,
    y: 40,
    transition: {
      duration: 0.4,
      delay: 0.3,
    },
  },
};

export default function Technologies() {
  return (
    <section className="max-w-7xl w-10/12 mx-auto">
      <MotionHeading
        variant={headingVariant}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        Technologie, które:
      </MotionHeading>
      <div className="my-24 w-full max-w-7xl mx-auto lg:grid lg:grid-cols-4 lg:gap-12">
        {Object.entries(TECHNOLOGIES).map(([proficience, technologyArray]) => {
          const h2Title =
            proficience === "good"
              ? "Znam bardzo dobrze"
              : proficience === "quite_good"
              ? "Znam całkiem dobrze"
              : "W planach do nauki";
          return (
            <MotionList
              key={proficience}
              content={{ title: h2Title, text: technologyArray }}
              className="lg:col-span-2 last:col-start-2"
            />
          );
        })}
      </div>
    </section>
  );
}
