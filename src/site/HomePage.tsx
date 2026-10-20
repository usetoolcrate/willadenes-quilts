import { ArrowRight, Heart, HeartHandshake, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router";
import { QuiltLabel } from "./StoriesPage";
import { Btn, C, Eyebrow, Section } from "./ui";

export function HomePage() {
  return (
    <div>
      {/* HERO — split, no text over photo */}
      <section className="border-b" style={{ background: C.cream, borderColor: "#E7DCCE" }}>
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 items-stretch">
          <div className="px-5 md:pl-8 md:pr-12 py-14 md:py-24 flex flex-col justify-center">
            <Eyebrow>Handmade &middot; Hand-delivered &middot; 501(c)(3) nonprofit</Eyebrow>
            <h1
              className="serif mt-4 text-[38px] md:text-[56px] leading-[1.05]"
              style={{ color: C.plumDeep }}
            >
              A quilt says what
              <br />
              words can&rsquo;t:
              <br />
              <em style={{ color: C.rose }}>you are not alone.</em>
            </h1>
            <p className="mt-6 text-[17.5px] leading-relaxed max-w-md" style={{ color: "#4A403D" }}>
              We are a 501(c)(3) nonprofit of home quilters who make quilts for women going through
              breast cancer treatment &mdash; then hand-deliver them, quietly and privately, to the
              hospitals and homes where they&rsquo;re needed.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/donate">
                Sponsor a quilt &mdash; $100
              </Btn>
              <Btn to="/get-involved" variant="outline">
                I&rsquo;d like to quilt
              </Btn>
            </div>
            <div
              className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-[13.5px]"
              style={{ color: "#6B605C" }}
            >
              <span className="inline-flex items-center gap-2">
                <ShieldCheck size={16} style={{ color: C.sage }} /> Privacy always protected
              </span>
              <span className="inline-flex items-center gap-2">
                <Heart size={16} style={{ color: C.rose }} /> 100% volunteer-made
              </span>
              <span className="inline-flex items-center gap-2">
                <HeartHandshake size={16} style={{ color: C.plum }} /> Partner of Cedars-Sinai, LA
              </span>
            </div>
          </div>
          <div className="relative min-h-[320px] md:min-h-[620px]">
            <img
              src="/images/hero-sunshine.webp"
              alt="Handmade quilt with a sunflower center panel reading 'let the Sunshine in'"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className="absolute bottom-5 left-5 right-5 md:left-8 md:right-8 rounded-2xl px-5 py-4 backdrop-blur"
              style={{ background: "rgba(255,255,255,0.92)" }}
            >
              <p className="serif text-[16px] md:text-[17px]" style={{ color: C.plumDeep }}>
                &ldquo;Let the sunshine in.&rdquo;
              </p>
              <p className="text-[13px] mt-1" style={{ color: "#6B605C" }}>
                One of the quilts delivered this year &mdash; each one is one of a kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* THE NUMBERS */}
      <Section bg="#FFFFFF" className="!py-12 md:!py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            ["150+", "quilts finished and given away"],
            ["100%", "hand-sewn by volunteers"],
            ["Cedars-Sinai", "our home hospital in LA"],
            ["$0", "we charge a woman for her quilt"],
          ].map(([big, small]) => (
            <div key={small}>
              <p className="serif text-[26px] md:text-[32px]" style={{ color: C.plum }}>
                {big}
              </p>
              <p className="mt-1 text-[13.5px] leading-snug" style={{ color: "#6B605C" }}>
                {small}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY IT MATTERS */}
      <Section bg={C.sand}>
        <div className="grid md:grid-cols-[1fr_1.05fr] gap-12 md:gap-16 items-center">
          <div className="order-2 md:order-1 grid grid-cols-2 gap-4">
            <img
              src="/images/quilt-mint.webp"
              alt="Coral and mint quilt with a hand-lettered center panel"
              className="rounded-2xl h-full w-full object-cover shadow-sm"
            />
            <div className="grid gap-4">
              <img
                src="/images/cedars-visit.webp"
                alt="A volunteer delivering quilts at the hospital"
                className="rounded-2xl w-full object-cover shadow-sm"
                style={{ aspectRatio: "4/3" }}
              />
              <img
                src="/images/quilt-dots.webp"
                alt="Bright quilt made from hundreds of colored circles"
                className="rounded-2xl w-full object-cover shadow-sm"
                style={{ aspectRatio: "4/3" }}
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Eyebrow>Why a quilt</Eyebrow>
            <h2
              className="serif mt-3 text-[30px] md:text-[42px] leading-[1.1]"
              style={{ color: C.plumDeep }}
            >
              Chemo chairs are cold. Waiting rooms are lonely.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              A quilt is warmth you can carry into an infusion room, wrap around your shoulders at
              3 a.m., and keep long after treatment ends. It is also proof that a stranger spent
              forty hours thinking about you.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Our founder Kathy Patrick lost her mother, Willadene, to breast cancer in 1976. She
              still remembers how it felt to be handed a quilt made by her grandmother. That feeling
              is the whole organization.
            </p>
            <Link
              to="/our-story"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold"
              style={{ color: C.plum }}
            >
              Read Willadene&rsquo;s story <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ONE STORY */}
      <Section bg="#FFFFFF">
        <div className="grid gap-10 md:grid-cols-[1fr_1.15fr] md:gap-14 md:items-center">
          <div>
            <Eyebrow>Where they go</Eyebrow>
            <h2
              className="serif mt-3 text-[30px] md:text-[42px] leading-[1.1]"
              style={{ color: C.plumDeep }}
            >
              Recipients are never named. One of them found us anyway.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Quilts are handed over quietly, so we rarely hear what happens next. Every so often we
              do.
            </p>
            <Link
              to="/stories"
              className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold"
              style={{ color: C.plum }}
            >
              Read four of their stories <ArrowRight size={17} />
            </Link>
          </div>
          <QuiltLabel
            large
            tilt={-0.5}
            title={"\u201cIt\u2019s you!\u201d"}
            paragraphs={[
              "She was cured and returned to work grateful to everyone who was part of her journey. What\u2019s amazing is she and two other hospital employees came to meet me where I was donating another group of quilts. She said \u201cit\u2019s you!\u201d One of our quilts was given to her \u2014 we both cried.",
            ]}
          />
        </div>
      </Section>

      {/* HOW IT WORKS */}
      {/* AT THE MACHINE — video band replaces the old three-step card row */}
      <Section bg={C.cream}>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="relative">
            <video
              className="w-full object-cover"
              style={{ aspectRatio: "16/9", background: C.sand }}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/media/sewing-poster.jpg"
              aria-label="Kathy stitching a binding down at her sewing machine"
            >
              <source src="/media/sewing.webm" type="video/webm" />
              <source src="/media/sewing.mp4" type="video/mp4" />
            </video>
            <p className="mt-3 text-[13px]" style={{ color: "#8A7C79" }}>
              Binding going down by machine. Roughly the last hour of a forty-hour quilt.
            </p>
          </div>

          <div>
            <Eyebrow>How a quilt gets made</Eyebrow>
            <h2
              className="serif mt-3 text-[30px] md:text-[42px] leading-[1.08]"
              style={{ color: C.plumDeep }}
            >
              Forty hours, three pairs of hands, no overhead
            </h2>

            <ol className="mt-8">
              {[
                {
                  t: "The fabric arrives donated",
                  d: "Quilters, shops and estates send fabric, batting and thread. Nothing beautiful goes to waste.",
                },
                {
                  t: "It is pieced and quilted at home",
                  d: "Our quilters work from their own sewing rooms, all across the country. Around forty hours per quilt.",
                },
                {
                  t: "It is delivered by hand",
                  d: "To Cedars-Sinai and directly to women who need one. Names are never published.",
                },
              ].map((step, i, arr) => (
                <li key={step.t} className="relative flex gap-5 pb-7 last:pb-0">
                  <div className="flex flex-col items-center">
                    <span
                      className="serif flex h-8 w-8 shrink-0 items-center justify-center text-[14px]"
                      style={{
                        color: C.plum,
                        border: `1px solid ${C.rose}`,
                        borderRadius: 2,
                        background: "#fff",
                      }}
                    >
                      {i + 1}
                    </span>
                    {i < arr.length - 1 && (
                      <span
                        aria-hidden="true"
                        className="mt-1 w-px grow"
                        style={{
                          backgroundImage: `repeating-linear-gradient(to bottom, ${C.rose} 0 5px, transparent 5px 10px)`,
                        }}
                      />
                    )}
                  </div>
                  <div className="pt-0.5">
                    <h3 className="serif text-[20px] leading-snug" style={{ color: C.plumDeep }}>
                      {step.t}
                    </h3>
                    <p className="mt-1.5 text-[15.5px] leading-relaxed" style={{ color: "#5C514E" }}>
                      {step.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* SPONSOR BAND */}
      <Section bg={C.plumDeep}>
        <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow color="#E8B9C4">Sponsor a quilt</Eyebrow>
            <h2 className="serif mt-3 text-[30px] md:text-[42px] leading-[1.1] text-white">
              $100 gets one quilt finished &mdash; and you&rsquo;ll see it before it goes
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#DCCBCF" }}>
              Our fabric is donated, and the sewing is done for free. What we actually have to pay
              for is the backing and the machine quilting &mdash; about $75 to $100 a quilt. That is
              the whole gap. Sponsor one and we send you a photo of the finished piece before it is
              delivered. Sponsor five or more and you can choose the colors. Smaller gifts are
              pooled &mdash; every donor is part of every quilt.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/donate" variant="light">
                Give now
              </Btn>
              <a
                href="mailto:kathy.g.patrick@gmail.com"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-[15px] font-semibold"
                style={{ border: "1.5px solid rgba(251,247,241,.5)", color: "#FBF7F1" }}
              >
                <Mail size={17} /> Ask us a question
              </a>
            </div>
          </div>
          <div className="grid gap-4">
            {[
              ["$25", "Backing fabric and thread toward one quilt"],
              ["$100", "One quilt fully backed and machine quilted"],
              ["$500", "Five quilts &mdash; and you pick the palette"],
            ].map(([amt, desc]) => (
              <div
                key={amt}
                className="flex items-baseline gap-5 rounded-xl px-6 py-5"
                style={{ background: "rgba(251,247,241,0.08)" }}
              >
                <span className="serif text-[24px]" style={{ color: "#F0DCE0" }}>
                  {amt}
                </span>
                <span
                  className="text-[15px] leading-snug"
                  style={{ color: "#DCCBCF" }}
                  dangerouslySetInnerHTML={{ __html: desc }}
                />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* GALLERY TEASER */}
      <Section bg="#FFFFFF">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-xl">
            <Eyebrow>The quilts</Eyebrow>
            <h2 className="serif mt-3 text-[30px] md:text-[42px]" style={{ color: C.plumDeep }}>
              No two are ever the same
            </h2>
          </div>
          <Link
            to="/quilts"
            className="inline-flex items-center gap-2 text-[15px] font-semibold"
            style={{ color: C.plum }}
          >
            See the full collection <ArrowRight size={17} />
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            ["quilt-power", "Quilt with an 'Own Your Power' center panel"],
            ["quilt-patchwork", "Scrappy patchwork quilt in navy and cream"],
            ["quilt-yellow", "Soft yellow and cream quilt on the line"],
            ["quilt-sampler", "Sampler quilt in pinks and purples"],
          ].map(([f, alt]) => (
            <img
              key={f}
              src={`/images/${f}.webp`}
              alt={alt}
              className="rounded-2xl w-full object-cover"
              style={{ aspectRatio: "3/4" }}
            />
          ))}
        </div>
      </Section>

      {/* GET INVOLVED */}
      <Section bg={C.blush}>
        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-center">
          <div>
            <Eyebrow color={C.plum}>Get involved</Eyebrow>
            <h2
              className="serif mt-3 text-[30px] md:text-[42px] leading-[1.1]"
              style={{ color: C.plumDeep }}
            >
              You don&rsquo;t have to know how to sew
            </h2>
            <ul className="mt-6 space-y-4">
              {[
                ["Quilters", "Have a machine? We'll pair you with a pattern. Never quilted? We'll teach you."],
                ["Volunteers", "Cutting, pressing, packing, delivering, organizing events."],
                ["Fabric & funds", "Fabric, batting, thread, longarm quilting services, or a gift of any size."],
              ].map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span
                    className="mt-2 h-2.5 w-2.5 shrink-0 rotate-45"
                    style={{ background: C.rose }}
                  />
                  <span>
                    <strong className="block text-[16px]" style={{ color: C.plumDeep }}>
                      {t}
                    </strong>
                    <span className="text-[15.5px] leading-relaxed" style={{ color: "#4A403D" }}>
                      {d}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/get-involved">See how to help</Btn>
              <Btn to="/contact" variant="outline">
                Contact Kathy
              </Btn>
            </div>
          </div>
          <img
            src="/images/delivery-team.webp"
            alt="Volunteers carrying Willadene's Quilts tote bags into the hospital"
            className="rounded-3xl w-full object-cover shadow-sm"
            style={{ aspectRatio: "4/5" }}
          />
        </div>
      </Section>
    </div>
  );
}
