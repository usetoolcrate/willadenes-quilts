import { C, Btn, Eyebrow, PageHero, Section } from "./ui";

/**
 * Kathy's own accounts of where four quilts ended up, from
 * "WILLADENE'S QUILTS STORIES" (Aug 2026). Kept in her words.
 */
const STORIES: { t: string; p: string[] }[] = [
  {
    t: "\u201cIt\u2019s you!\u201d",
    p: [
      "One of our quilts was given to a patient undergoing cancer treatment. While in the hospital she was so grateful and comforted by this small gesture. She was cured and returned to work grateful to everyone who was part of her journey.",
      "What\u2019s amazing is she and two other hospital employees came to meet me where I was donating another group of quilts. She said \u201cit\u2019s you!\u201d One of our quilts was given to her \u2014 we both cried.",
    ],
  },
  {
    t: "She never took it off",
    p: [
      "Another elderly lady was hospitalized while taking treatment and the staff brought a quilt to her room and placed it on her bed. She never took the quilt off!",
    ],
  },
  {
    t: "A place to lay the baby",
    p: [
      "A sweet girl was having a difficult pregnancy so a quilt was given to her. After the baby was born the girl was diagnosed with cancer and had to undergo treatment. She brought the baby with her to every treatment and laid her on the quilt.",
    ],
  },
  {
    t: "Her lucky charm",
    p: [
      "One of my dear friends had been battling breast cancer for years and when I gave her a quilt she used it as a lap quilt while watching tv and on her bed. She said there wasn\u2019t a day that she didn\u2019t have her quilt and said it was her lucky charm and her cancer hadn\u2019t returned.",
    ],
  },
];

/** A quilt label: the muslin patch a quilter stitches onto the back of a finished quilt. */
export function QuiltLabel({
  title,
  paragraphs,
  tilt = 0,
  large = false,
}: {
  title: string;
  paragraphs: string[];
  tilt?: number;
  large?: boolean;
}) {
  return (
    <figure
      className="relative rounded-[10px] p-[13px] shadow-sm"
      style={{
        background: "#FFFDF8",
        border: "1px solid #E7DCCE",
        transform: `rotate(${tilt}deg)`,
      }}
    >
      <div
        className="rounded-[6px] px-6 py-7 md:px-8 md:py-9 h-full"
        style={{ border: `1.5px dashed ${C.rose}55` }}
      >
        <h3
          className="serif"
          style={{
            color: C.plumDeep,
            fontSize: large ? "clamp(24px, 3.2vw, 34px)" : "21px",
            lineHeight: 1.15,
          }}
        >
          {title}
        </h3>
        <div className="mt-4 space-y-3.5">
          {paragraphs.map(p => (
            <p
              key={p.slice(0, 24)}
              className={large ? "text-[17px] md:text-[19px] leading-relaxed" : "text-[15.5px] leading-relaxed"}
              style={{ color: "#4A403D" }}
            >
              {p}
            </p>
          ))}
        </div>
        <figcaption
          className="mt-6 text-[12px] uppercase tracking-[0.16em]"
          style={{ color: "#9A8C88" }}
        >
          As told by Kathy Patrick, founder
        </figcaption>
      </div>
    </figure>
  );
}

export function StoriesPage() {
  return (
    <div>
      <PageHero
        eyebrow="Where they go"
        title="We rarely learn a name. Sometimes a quilt comes back to us anyway."
        intro="Quilts are handed over quietly and recipients are never named on this site. But a few stories have found their way back to Kathy. These are hers, in her words."
      />

      <Section bg={C.cream}>
        <div className="grid gap-7 md:grid-cols-2 md:gap-9 items-start">
          {STORIES.map((s, i) => (
            <div key={s.t} className={i % 2 === 1 ? "md:mt-10" : undefined}>
              <QuiltLabel title={s.t} paragraphs={s.p} tilt={i % 2 === 0 ? -0.5 : 0.45} />
            </div>
          ))}
        </div>
        <p className="mt-10 max-w-2xl text-[14.5px] leading-relaxed" style={{ color: "#7A6C69" }}>
          Quilters traditionally stitch a small fabric label onto the back of a finished quilt —
          who made it, and for whom. These are ours.
        </p>
      </Section>

      <Section bg={C.sand}>
        <div className="max-w-2xl">
          <Eyebrow>What one costs us</Eyebrow>
          <h2 className="serif mt-3 text-[28px] md:text-[40px] leading-[1.12]" style={{ color: C.plumDeep }}>
            The sewing is free. The backing and the machine quilting are not.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
            Fabric is donated and every hour of piecing is volunteered. The one bill we cannot avoid
            is backing fabric and long-arm machine quilting — $75 to $100 per quilt. That is the
            number a donation actually moves.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Btn to="/donate">Cover a quilt</Btn>
            <Btn to="/quilts" variant="outline">
              See the quilts
            </Btn>
          </div>
        </div>
      </Section>
    </div>
  );
}
