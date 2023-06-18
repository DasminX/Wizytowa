import { TECHNOLOGIES } from "@/lib/contents";
import MotionHeading from "../common/MotionHeading";
import MotionList from "../common/MotionList";

export default function Technologies() {
  return (
    <div className="about__whoiam--techwrapper">
      <MotionHeading className="about__whoiam--title">
        Technologie, które:
      </MotionHeading>
      <div className="about__whoiam--techwrapper--tech descriptions">
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
            />
          );
        })}
      </div>
    </div>
  );
}
