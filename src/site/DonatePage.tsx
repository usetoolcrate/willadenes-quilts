import { Camera, Palette, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { C, Eyebrow, PageHero, Section } from "./ui";

const AMOUNTS = ["$25", "$50", "$100", "$250", "$500", "Other"];

export function DonatePage() {
  const [amount, setAmount] = useState("$100");
  const [freq, setFreq] = useState<"once" | "monthly">("once");

  return (
    <div>
      <PageHero
        eyebrow="Donate"
        title="$100 makes one quilt. You'll see a photo of it before it's delivered."
        intro="Every beautiful quilt costs about $100 in fabric, batting, thread and quilting. Sponsor one, or ten. Can't sponsor a whole quilt? We accept gifts of any size — every donor is part of every quilt."
      />

      <Section bg={C.cream}>
        <div className="grid lg:grid-cols-[1.05fr_1fr] gap-12">
          {/* form card */}
          <div
            className="rounded-3xl border p-7 md:p-9"
            style={{ background: "#fff", borderColor: "#EADFD0" }}
          >
            <h2 className="serif text-[26px]" style={{ color: C.plumDeep }}>
              Make a gift
            </h2>

            <div
              className="mt-6 inline-flex rounded-full p-1"
              style={{ background: C.sand }}
              role="group"
            >
              {(["once", "monthly"] as const).map(f => (
                <button
                  key={f}
                  type="button"
                  onClick={() => setFreq(f)}
                  className="rounded-full px-5 py-2 text-[14px] font-semibold transition-colors"
                  style={{
                    background: freq === f ? C.plum : "transparent",
                    color: freq === f ? "#fff" : "#5C514E",
                  }}
                >
                  {f === "once" ? "One time" : "Monthly"}
                </button>
              ))}
            </div>

            <div className="mt-7 grid grid-cols-3 gap-3">
              {AMOUNTS.map(a => (
                <button
                  key={a}
                  type="button"
                  onClick={() => setAmount(a)}
                  className="serif rounded-xl py-4 text-[19px] transition-all"
                  style={
                    amount === a
                      ? { background: C.blush, border: `1.5px solid ${C.rose}`, color: C.plumDeep }
                      : { background: "#FBF7F1", border: "1.5px solid #EADFD0", color: "#5C514E" }
                  }
                >
                  {a}
                </button>
              ))}
            </div>

            <label
              className="mt-7 block text-[13px] uppercase tracking-[0.14em]"
              style={{ color: "#8A7C79" }}
            >
              In honor of (optional)
            </label>
            <input
              className="mt-2 w-full rounded-xl px-4 py-3 text-[15px] outline-none"
              style={{ background: "#FBF7F1", border: "1.5px solid #EADFD0" }}
              placeholder="A name we should stitch this gift to"
            />

            <button
              type="button"
              className="mt-7 w-full rounded-full py-4 text-[16px] font-semibold text-white"
              style={{ background: C.plum }}
            >
              Donate {amount === "Other" ? "" : amount}
              {freq === "monthly" ? " a month" : ""}
            </button>
            <p className="mt-3 text-center text-[12.5px]" style={{ color: "#8A7C79" }}>
              Preview only &mdash; not yet connected to payment processing.
            </p>

            <div
              className="mt-6 flex items-start gap-2.5 rounded-xl px-4 py-3 text-[13.5px] leading-relaxed"
              style={{ background: "#F6F1E8", color: "#5C514E" }}
            >
              <ShieldCheck size={17} style={{ color: C.sage }} className="mt-0.5 shrink-0" />
              Willadene&rsquo;s Quilts is a registered 501(c)(3) nonprofit. Your donation is tax
              deductible and you will receive a receipt by email.
            </div>
          </div>

          {/* what it does */}
          <div>
            <Eyebrow>What your gift does</Eyebrow>
            <h2
              className="serif mt-3 text-[28px] md:text-[38px] leading-[1.12]"
              style={{ color: C.plumDeep }}
            >
              Nothing here pays a salary
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Our quilters are volunteers sewing in their own homes. Your gift buys the materials
              that go into a quilt and gets it into the hands of a woman in treatment.
            </p>

            <div className="mt-8 space-y-4">
              {[
                ["$25", "Backing fabric and thread for one quilt"],
                ["$50", "Batting and binding, or a half sponsorship"],
                ["$100", "One complete quilt, start to finish"],
                ["$500", "Five quilts — and you choose the color palette"],
              ].map(([amt, desc]) => (
                <div
                  key={amt}
                  className="flex items-baseline gap-5 rounded-xl border px-6 py-5"
                  style={{ borderColor: "#EADFD0", background: "#fff" }}
                >
                  <span className="serif text-[23px] shrink-0" style={{ color: C.plum }}>
                    {amt}
                  </span>
                  <span className="text-[15.5px] leading-snug" style={{ color: "#4A403D" }}>
                    {desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {[
                [Camera, "A photo of your quilt", "Sponsor a quilt and we send you a picture of the finished piece before it is delivered."],
                [Palette, "Pick the colors", "Sponsor five or more quilts and you can request the palette."],
              ].map(([Icon, t, d]) => {
                const I = Icon as typeof Camera;
                return (
                  <div key={t as string} className="rounded-2xl p-6" style={{ background: C.blush }}>
                    <I size={20} style={{ color: C.plum }} />
                    <h3 className="serif mt-4 text-[18px]" style={{ color: C.plumDeep }}>
                      {t as string}
                    </h3>
                    <p className="mt-2 text-[14.5px] leading-relaxed" style={{ color: "#4A403D" }}>
                      {d as string}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section bg={C.sand}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/quilt-mint.webp"
            alt="A coral and mint quilt made for a patient"
            className="rounded-3xl w-full object-cover shadow-sm"
            style={{ aspectRatio: "4/3" }}
          />
          <div>
            <Eyebrow>Other ways to give</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[38px]" style={{ color: C.plumDeep }}>
              Fabric, quilting time, or a legacy gift
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              We gratefully accept donated fabric and batting, longarm quilting services, and quilts
              from the collections of quilters who have passed &mdash; the way the Edmond Quilt Guild
              cared for Debbie Springer&rsquo;s quilts. Write to us and we will make it simple.
            </p>
            <a
              href="mailto:kathy.g.patrick@gmail.com"
              className="mt-7 inline-flex rounded-full px-6 py-3 text-[15px] font-semibold text-white"
              style={{ background: C.plum }}
            >
              kathy.g.patrick@gmail.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
