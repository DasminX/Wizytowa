import { DESCRIPTIONS_CONTENT } from "@/lib/contents"
import MotionBox from "../common/MotionBox"

export default function Descriptions() {
  return (
    <section className="descriptions">
      {DESCRIPTIONS_CONTENT.map((content, idx) => (
        <MotionBox key={idx} content={content} />
      ))}
    </section>
  )
}
