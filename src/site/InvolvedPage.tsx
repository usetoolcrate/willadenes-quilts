import { Gift, HandHeart, Scissors } from "lucide-react";
import { Btn, C, Eyebrow, PageHero, Section } from "./ui";

const WAYS = [
  {
    icon: Scissors,
    t: "Quilters",
    lead: "Have a sewing machine? That is the only requirement.",
    d: "We pair you with a pattern and fabric and you sew from home, at your own pace. Never made a quilt before? We will teach you — if you are willing to make quilts for women with breast cancer, we are willing to show you how.",
    cta: "Sign up to quilt",
  },
  {
    icon: HandHeart,
    t: "Volunteers",
    lead: "There is plenty to do that has nothing to do with sewing.",
    d: "Cutting and pressing fabric, packing quilts, organizing deliveries, helping at events, keeping our records straight. Your time goes straight to a woman in treatment.",
    cta: "Volunteer with us",
  },
  {
    icon: Gift,
    t: "Fabric & funds",
    lead: "Fabric, batting, thread, longarm quilting services — or a gift of any size.",
    d: "Each quilt runs about $100 in materials and quilting costs. If you cannot sponsor a whole quilt, smaller gifts are pooled and every donor becomes part of every quilt. Clearing out a fabric stash? We would love it.",
    cta: "Donate materials",
  },
];

export function InvolvedPage() {
  return (
    <div>
      <PageHero
        eyebrow="Get involved"
        title="We need quilters, volunteers, fabric — and people who simply care"
        intro="If you can't sew, help us find fabric. If you can't find fabric, help us fund a quilt. All are welcome on this mission of love and support."
      />

      <Section bg={C.cream}>
        <div className="grid gap-6 md:grid-cols-3">
          {WAYS.map(w => (
            <div
              key={w.t}
              className="flex flex-col rounded-2xl border p-8"
              style={{ background: "#fff", borderColor: "#EADFD0" }}
            >
              <w.icon size={24} style={{ color: C.plum }} />
              <h3 className="serif mt-5 text-[23px]" style={{ color: C.plumDeep }}>
                {w.t}
              </h3>
              <p className="mt-2 text-[15.5px] font-medium" style={{ color: C.rose }}>
                {w.lead}
              </p>
              <p className="mt-3 flex-1 text-[15.5px] leading-relaxed" style={{ color: "#5C514E" }}>
                {w.d}
              </p>
              <a
                href="mailto:kathy.g.patrick@gmail.com"
                className="mt-6 inline-flex items-center justify-center rounded-full py-3 text-[15px] font-semibold"
                style={{ border: `1.5px solid ${C.plum}`, color: C.plumDeep }}
              >
                {w.cta}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section bg={C.sand}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/quilt-yellow.webp"
            alt="A soft yellow quilt hanging in the light"
            className="rounded-3xl w-full object-cover shadow-sm"
            style={{ aspectRatio: "4/5" }}
          />
          <div>
            <Eyebrow>What we&rsquo;re always looking for</Eyebrow>
            <h2
              className="serif mt-3 text-[28px] md:text-[40px] leading-[1.12]"
              style={{ color: C.plumDeep }}
            >
              A short, honest wish list
            </h2>
            <ul className="mt-7 space-y-3.5">
              {[
                "100% cotton quilting fabric — fat quarters to full yardage",
                "Batting, thread, and backing fabric",
                "Longarm quilting time, donated or discounted",
                "Quilters who can finish one quilt a quarter",
                "Hospitals and clinics who would welcome quilts for patients",
                "Sponsors who can fund $100 quilts, one or ten at a time",
              ].map(item => (
                <li key={item} className="flex gap-3.5 text-[16px]" style={{ color: "#4A403D" }}>
                  <span
                    className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45"
                    style={{ background: C.rose }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="mailto:kathy.g.patrick@gmail.com">Email Kathy</Btn>
              <Btn to="/donate" variant="outline">
                Give a gift instead
              </Btn>
            </div>
          </div>
        </div>
      </Section>

      <Section bg="#FFFFFF">
        <div className="grid md:grid-cols-[1fr_1.1fr] gap-12 items-center">
          <div>
            <Eyebrow>Never quilted?</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[38px]" style={{ color: C.plumDeep }}>
              Start with one simple quilt
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Most of our quilts are straightforward patchwork — squares and strips. It is the
              friendliest possible place to learn, and the finished quilt goes somewhere it truly
              matters. Tell us you&rsquo;re interested and we&rsquo;ll walk you through your first
              one.
            </p>
          </div>
          <img
            src="/images/delivery-team.webp"
            alt="Volunteers with Willadene's Quilts tote bags on a delivery day"
            className="rounded-3xl w-full object-cover shadow-sm"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
      </Section>
    </div>
  );
}
