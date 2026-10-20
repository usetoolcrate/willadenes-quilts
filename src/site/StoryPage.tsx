import { Btn, C, Eyebrow, PageHero, Section } from "./ui";

export function StoryPage() {
  return (
    <div>
      <PageHero
        eyebrow="Our story"
        title="In loving memory of Willadene Springer"
        intro="Willadene died of breast cancer in 1976. Her daughter Kathy started this nonprofit so that no woman in treatment has to feel forgotten — and so that Willadene's name keeps doing good work."
      />

      <Section bg={C.cream}>
        <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-12 md:gap-16 items-start">
          <div>
            <img
              src="/images/willadene.webp"
              alt="Willadene Springer holding her young daughter, 1940s"
              className="rounded-2xl w-full object-cover shadow-sm"
            />
            <p className="mt-3 text-[13px] leading-snug" style={{ color: "#8A7C79" }}>
              Willadene Springer with Kathy. She passed away from breast cancer in 1976.
            </p>
          </div>
          <div>
            <Eyebrow>Our mission</Eyebrow>
            <h2
              className="serif mt-3 text-[28px] md:text-[38px] leading-[1.12]"
              style={{ color: C.plumDeep }}
            >
              Warmth, comfort and hope &mdash; delivered one quilt at a time
            </h2>
            <div
              className="mt-6 space-y-5 text-[17px] leading-relaxed"
              style={{ color: "#4A403D" }}
            >
              <p>
                Every quilt we make is a symbol of compassion, strength and solidarity. With every
                stitch we honor Willadene&rsquo;s legacy and extend support to women facing their own
                diagnosis &mdash; reminding them they are not alone.
              </p>
              <p>
                Kathy Patrick founded Willadene&rsquo;s Quilts after losing her mother. Her
                grandmother was always quilting, and Kathy never forgot the love she felt each time a
                quilt arrived from her. When her sister-in-law, Debbie Springer, mentioned she had a
                lot of fabric on hand, Kathy had an idea: let&rsquo;s make quilts for women who are
                in treatment right now.
              </p>
              <p>
                Today our quilts go to women across the United States. We are based in Los Angeles
                and have a special relationship with Cedars-Sinai, where most of our quilts are
                delivered. Whenever there is a request or a need, Kathy sends a quilt directly to a
                woman who needs to feel the love of one.
              </p>
            </div>
            <blockquote
              className="mt-8 border-l-2 pl-5 serif text-[20px] md:text-[23px] leading-snug"
              style={{ borderColor: C.rose, color: C.plumDeep }}
            >
              &ldquo;Our quilts are made with love. That is not a slogan &mdash; it is the actual
              method.&rdquo;
            </blockquote>
          </div>
        </div>
      </Section>

      {/* FOUNDERS */}
      <Section bg="#FFFFFF">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <img
            src="/images/founders.webp"
            alt="Kathy Patrick and Debbie Springer together"
            className="rounded-3xl w-full object-cover shadow-sm"
          />
          <div>
            <Eyebrow>The two who started it</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[38px]" style={{ color: C.plumDeep }}>
              Kathy and Debbie
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              A daughter who lost her mother, and a sister-in-law with a room full of fabric. Between
              them they turned grief into something a woman in an infusion chair can hold onto.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              What began at two sewing machines is now a network of quilters working from their own
              homes in cities all over the country.
            </p>
          </div>
        </div>
      </Section>

      {/* KATHY TODAY */}
      <Section bg={C.cream}>
        <div className="grid md:grid-cols-[0.85fr_1fr] gap-12 md:gap-16 items-center">
          <div>
            <img
              src="/images/kathy-racks.webp"
              alt="Kathy Patrick standing beside racks of finished quilts"
              className="rounded-3xl w-full object-cover shadow-sm"
            />
            <p className="mt-3 text-[13px]" style={{ color: "#7A6B68" }}>
              Kathy with quilts finished this year. Every one of them is given away.
            </p>
          </div>
          <div>
            <Eyebrow>Where it stands today</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[38px] leading-[1.15]" style={{ color: C.plumDeep }}>
              She can only make as many quilts as she has fabric for.
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              The sewing is donated. The fabric is donated. Kathy has never sold a quilt and never
              intends to. What that leaves is a small, stubborn cost at the very end of the
              process &mdash; backing fabric and machine quilting, roughly $75 to $100 per quilt.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              That is the whole ask. Fabric, or the cost of finishing. Nothing else.
            </p>
          </div>
        </div>
      </Section>

      {/* DEBBIE MEMORIAL + EDMOND GUILD */}
      <Section bg={C.blush}>
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow color={C.plum}>In memoriam</Eyebrow>
          <h2
            className="serif mt-3 text-[28px] md:text-[40px] leading-[1.12]"
            style={{ color: C.plumDeep }}
          >
            Debbie Springer &mdash; March 2025
          </h2>
          <div className="stitch mx-auto mt-6 w-24" />
          <p className="mt-7 text-[17.5px] leading-relaxed" style={{ color: "#4A403D" }}>
            With Debbie&rsquo;s passing in March 2025, many of her beloved quilts were donated to the
            Edmond, Oklahoma Quilt Guild. Their Artisan Store showcased Debbie&rsquo;s many sampler
            and full-size quilts, and each one found its way into a new home.
          </p>
          <p className="mt-4 text-[17.5px] leading-relaxed" style={{ color: "#4A403D" }}>
            We congratulate and thank the Edmond Quilt Guild for the kindness and care they gave to
            every single quilt.
          </p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-4">
          {[
            ["edmond-estate-table", "Debbie's estate quilts on display at the Edmond Guild Artisan Store"],
            ["sampler-star", "A pieced star sampler, hand-bound"],
            ["sampler-logcabin", "A four-block log cabin sampler"],
          ].map(([f, alt]) => (
            <figure key={f}>
              <img
                src={`/images/${f}.webp`}
                alt={alt}
                className="rounded-2xl w-full object-cover"
                style={{ aspectRatio: "4/3" }}
              />
              <figcaption className="mt-2 text-[13px]" style={{ color: "#7A6B68" }}>
                {alt}
              </figcaption>
            </figure>
          ))}
        </div>

      </Section>

      <Section bg={C.plumDeep}>
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="serif text-[28px] md:text-[40px] leading-[1.12] text-white">
            Willadene&rsquo;s name is still keeping people warm
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#DCCBCF" }}>
            Sponsor a quilt in memory of someone you love. We&rsquo;ll send you a photo of the
            finished quilt before it is delivered.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Btn to="/donate" variant="light">
              Sponsor a quilt
            </Btn>
            <Btn to="/get-involved" variant="light">
              Become a quilter
            </Btn>
          </div>
        </div>
      </Section>
    </div>
  );
}
