import { DESCRIPTIONS_CONTENT } from "@/lib/contents";
import MotionList from "../../shared/MotionList";

export default function Descriptions() {
  return (
    <section className="my-12 w-full max-w-7xl mx-auto lg:grid lg:grid-cols-4 lg:gap-12">
      {DESCRIPTIONS_CONTENT.map((content, idx) => (
        <MotionList
          key={idx}
          content={content}
          className="col-span-full row-auto lg:col-span-2 last:col-start-2 last:col-end-4 border-dashed my-8"
        />
      ))}
    </section>
  );
}
