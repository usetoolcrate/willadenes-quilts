import { Camera, HelpCircle } from "lucide-react";
import { SAMPLERS, UNLISTED } from "./samplersData";
import { Btn, C, Eyebrow, PageHero, Section } from "./ui";

function inches(size: string | null): number | null {
  if (!size) return null;
  const first = size.split("x")[0].trim();
  const m = first.match(/^(\d+)(?:\s+(\d+)\/(\d+))?$/);
  if (!m) return null;
  return Number(m[1]) + (m[2] ? Number(m[2]) / Number(m[3]) : 0);
}

function tier(size: string | null): { label: string; price: string } {
  const w = inches(size);
  if (w === null) return { label: "To be measured", price: "\u2014" };
  if (w <= 12) return { label: "Small", price: "$45" };
  if (w <= 16) return { label: "Medium", price: "$65" };
  return { label: "Large", price: "$95" };
}

export function SamplersPage() {
  const counts = SAMPLERS.reduce<Record<string, number>>((acc, s) => {
    const t = tier(s.size).label;
    acc[t] = (acc[t] ?? 0) + 1;
    return acc;
  }, {});

  return (
    <div>
      <PageHero
        eyebrow="Debbie’s samplers"
        title="Eighteen small quilts, each one finished by hand, each one for sale"
        intro="Debbie Springer made samplers her whole life: single-block quilts, wall size and table size. Selling them puts money straight back into backing and machine quilting for the quilts we give away."
      />

      <Section bg={C.cream}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>The inventory</Eyebrow>
            <h2 className="serif mt-3 text-[27px] md:text-[36px] leading-[1.12]" style={{ color: C.plumDeep }}>
              Catalogued from Kathy&rsquo;s own notes
            </h2>
            <p className="mt-4 text-[16.5px] leading-relaxed" style={{ color: "#4A403D" }}>
              Every entry below is a real sampler in hand, photographed flat, and described by its
              top, its binding and its backing in Kathy&rsquo;s own words. Seventeen of the eighteen
              are pictured. Where a photo carries a question mark, two entries on the list could fit
              it and Kathy still needs to say which.
            </p>
          </div>
          <dl className="flex gap-8">
            {[
              ["Samplers", String(SAMPLERS.length)],
              ["Smallest", "9 in"],
              ["Largest", "26 in"],
            ].map(([k, v]) => (
              <div key={k}>
                <dd className="serif text-[30px] leading-none" style={{ color: C.plum }}>
                  {v}
                </dd>
                <dt className="mt-2 text-[11px] uppercase tracking-[0.16em]" style={{ color: "#8A7C79" }}>
                  {k}
                </dt>
              </div>
            ))}
          </dl>
        </div>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {SAMPLERS.map((s, i) => {
            const t = tier(s.size);
            return (
              <li key={i} className="flex flex-col">
                <div
                  className="relative overflow-hidden"
                  style={{ background: "#fff", border: `1px solid ${C.sand}` }}
                >
                  {s.photo ? (
                    <img
                      src={`/images/${s.photo}.webp`}
                      alt={s.top}
                      loading="lazy"
                      className="w-full object-cover"
                      style={{ aspectRatio: "1/1" }}
                    />
                  ) : (
                    <div
                      className="flex w-full flex-col items-center justify-center gap-3"
                      style={{ aspectRatio: "1/1", background: C.cream }}
                    >
                      <Camera size={22} style={{ color: "#B8A9A5" }} />
                      <p className="text-[12px] tracking-[0.14em] uppercase" style={{ color: "#A2938F" }}>
                        photo still needed
                      </p>
                    </div>
                  )}
                  {s.photo && s.confirmed === false && (
                    <span
                      className="absolute left-3 top-3 inline-flex items-center gap-1.5 px-2.5 py-1 text-[11px] tracking-[0.1em] uppercase"
                      style={{ background: "rgba(251,247,241,.94)", color: C.plum }}
                      title="Two entries on Kathy's list could match this photo"
                    >
                      <HelpCircle size={12} /> to confirm
                    </span>
                  )}
                </div>

                <div className="mt-4 flex items-start justify-between gap-4">
                  <p className="serif text-[17px] leading-tight" style={{ color: C.plumDeep }}>
                    {s.size ? `${s.size} in` : "Size to confirm"}
                  </p>
                  <div className="text-right shrink-0">
                    <p className="serif text-[19px] leading-none" style={{ color: C.rose }}>
                      {t.price}
                    </p>
                    <p className="mt-1 text-[10.5px] uppercase tracking-[0.16em]" style={{ color: "#9A8C88" }}>
                      {t.label}
                    </p>
                  </div>
                </div>

                <p className="mt-2 text-[15px] leading-snug" style={{ color: C.ink }}>
                  {s.top}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: "#7A6C69" }}>
                  {[s.binding, s.backing].filter(Boolean).join(" \u00b7 ") ||
                    "Binding and backing to be recorded"}
                </p>
                <div className="mt-3 flex gap-1.5">
                  {s.sw.map(c => (
                    <span
                      key={c}
                      className="h-2.5 w-8 rounded-[2px]"
                      style={{ background: c, boxShadow: "inset 0 0 0 1px rgba(0,0,0,.06)" }}
                    />
                  ))}
                </div>
              </li>
            );
          })}
        </ul>

        <div className="mt-16 border-t pt-10" style={{ borderColor: "#EADFD0" }}>
          <Eyebrow>Not on the list</Eyebrow>
          <p className="mt-3 max-w-2xl text-[15.5px] leading-relaxed" style={{ color: "#5C514E" }}>
            Three more samplers turned up in Kathy&rsquo;s photographs that do not match any of the
            eighteen entries. They are almost certainly Debbie&rsquo;s too, but we are not going to
            guess them into the list.
          </p>
          <div className="mt-7 grid gap-5 sm:grid-cols-3">
            {UNLISTED.map(u => (
              <figure key={u.photo}>
                <img
                  src={`/images/${u.photo}.webp`}
                  alt={u.note}
                  loading="lazy"
                  className="w-full object-cover"
                  style={{ aspectRatio: "1/1", background: "#fff", border: `1px solid ${C.sand}` }}
                />
                <figcaption className="mt-2.5 text-[13px] leading-relaxed" style={{ color: "#7A6B68" }}>
                  {u.note}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <div
          className="mt-10 flex items-start gap-3 rounded-xl p-5"
          style={{ background: "#fff", border: "1px dashed #E0CFBB" }}
        >
          <Camera size={18} style={{ color: C.plum, marginTop: 2 }} />
          <p className="text-[14.5px] leading-relaxed" style={{ color: "#5C514E" }}>
            One sampler still has no photograph &mdash; the 20&frac12; &times; 29 inch green, yellow
            and red &ldquo;tree,&rdquo; the largest on the list. Pricing shown is a proposal for
            Kathy&rsquo;s approval, grouped by size:{" "}
            {Object.entries(counts)
              .map(([k, v]) => `${v} ${k.toLowerCase()}`)
              .join(", ")}
            .
          </p>
        </div>
      </Section>

      <Section bg={C.plumDeep}>
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <Eyebrow color="#E8B9C4">Why buy one</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[40px] leading-[1.1] text-white">
              A sampler on your wall pays for a quilt in someone&rsquo;s lap
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#D7C7CB" }}>
              Every sampler sold covers the backing and machine quilting on roughly one full-size
              quilt — the only cost we cannot get donated. Nothing here funds salaries. There are
              none.
            </p>
          </div>
          <div className="rounded-2xl p-7" style={{ background: "rgba(255,255,255,.07)" }}>
            <p className="text-[15px] leading-relaxed" style={{ color: "#F3E9E7" }}>
              Interested in a specific sampler? Email Kathy and she will send photos and measurements
              of the ones still available.
            </p>
            <div className="mt-6">
              <Btn href="mailto:kathy.g.patrick@gmail.com?subject=Sampler%20inquiry" variant="light">
                Ask about a sampler
              </Btn>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
