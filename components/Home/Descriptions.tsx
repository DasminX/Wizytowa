import { DESCRIPTIONS_CONTENT } from "@/lib/contents";
import MotionList from "../common/MotionList";

export default function Descriptions() {
  return (
    <section className="descriptions">
      {DESCRIPTIONS_CONTENT.map((content, idx) => (
        <MotionList key={idx} content={content} />
      ))}
    </section>
  );
}
