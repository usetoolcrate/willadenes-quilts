import { Btn, C, Eyebrow, PageHero, Section } from "./ui";

/**
 * The archive. Every image here is one of Kathy's own photographs of a finished
 * Willadene's Quilts quilt (WeTransfer batch, Aug 2026). Captions describe what is
 * visible in the photo — the pattern, the fabric, the finishing. No recipient is
 * named or implied, because Kathy does not share that.
 */
type Item = { f: string; t: string; d?: string; wide?: boolean; tall?: boolean };

const FAMILIES: { key: string; label: string; lead: string; items: Item[] }[] = [
  {
    key: "panels",
    label: "Panel quilts",
    lead: "A printed center panel, then borders pieced outward until it is bed-size. The panel carries the message; the borders carry the hours.",
    items: [
      { f: "g-power-teal", t: "Own Your Power", d: "Teal, magenta and butter yellow, mitred at every corner.", tall: true },
      { f: "g-power-yellow", t: "Own Your Power, second version", d: "Same panel, a completely different quilt around it." },
      { f: "g-power-coral", t: "Own Your Power in coral", d: "Rose and berry borders on a pieced floral frame.", wide: true },
      { f: "g-panel-gold", t: "Wildflower panel, gold and rose", d: "Six borders deep, hand-guided quilting throughout.", tall: true },
      { f: "g-panel-orange", t: "Wildflower panel, apricot and sea glass" },
      { f: "g-panel-mint", t: "Wildflower panel, mint and peach" },
      { f: "g-panel-pink", t: "Wildflower panel in pinks", d: "The brightest of the set." },
      { f: "g-panel-berry", t: "Wildflower panel, berry and black", d: "A darker frame than she usually chooses, and it works.", wide: true },
    ],
  },
  {
    key: "ninepatch",
    label: "Nine-patch and scrap quilts",
    lead: "Nine small squares to a block, dozens of blocks to a quilt. This is where donated fabric goes: nothing matches, and that is the point.",
    items: [
      { f: "g-ninepatch-scrappy", t: "Scrap nine-patch", d: "Every block a different pair of fabrics.", tall: true },
      { f: "g-ninepatch-pastel", t: "Nine-patch in pastels", d: "Soft prints on a low-volume background." },
      { f: "g-ninepatch-bright", t: "Nine-patch, full brights", d: "Reds, yellows and blues against cream." },
      { f: "g-ninepatch-sage", t: "Nine-patch with sage sashing", d: "Backed in butter yellow, folded here to show it.", tall: true },
      { f: "g-ninepatch-bold", t: "Nine-patch on white", d: "Bold blocks, wide sashing, quiet ground." },
      { f: "g-cream-sashing", t: "Framed blocks in cream", d: "Each block set on point inside its own cream frame.", wide: true },
      { f: "g-diamond-blocks", t: "Diamonds in squares", d: "Vintage-look prints, one to a block." },
      { f: "g-pastel-squares", t: "Pastel squares", d: "Simple, large-scale, and fast to make when time is short.", tall: true },
      { f: "g-pastel-top", t: "A finished top, not yet quilted", d: "This is the stage where the $75 to $100 is needed." },
    ],
  },
  {
    key: "pieced",
    label: "Pieced patterns",
    lead: "Stars, pinwheels, braids, medallions. Same fabric, harder maths.",
    items: [
      { f: "g-pinwheel-scrappy", t: "Scrap pinwheels", d: "Hundreds of triangles, all of them off-cuts.", tall: true },
      { f: "g-diamonds-rainbow", t: "Diamonds on white", d: "Colour-ordered, from blush through to navy.", tall: true },
      { f: "g-braid-pink", t: "Braid quilt in pinks and greens", d: "Strips pieced on the diagonal, chevron by chevron.", wide: true },
      { f: "g-pink-pinwheel", t: "Pink pinwheel medallion" },
      { f: "g-navy-medallion", t: "Navy-framed medallion", d: "A pieced center, then navy and cream borders." },
      { f: "g-navy-frame", t: "The same pattern, backed in deep blue" },
      { f: "g-nine-blocks", t: "Nine blocks, nine ideas", d: "A sampler at quilt scale — every block a different design." },
      { f: "g-blues-mosaic", t: "Blues and indigo mosaic", d: "Backed in turquoise.", wide: true },
      { f: "g-tulip-border", t: "Tulip border, modern center" },
    ],
  },
  {
    key: "applique",
    label: "Appliqué",
    lead: "Shapes cut, turned and stitched down by hand before the quilting starts. The slowest work she does.",
    items: [
      { f: "g-teapots", t: "Teapots", d: "Twelve appliqué teapots with a pieced triangle border.", wide: true },
      { f: "g-strawberries", t: "Strawberries and blossom", d: "Appliquéd fruit and flowers on a scalloped-look border.", wide: true },
    ],
  },
];

const LIFE: Item[] = [
  { f: "g-life-boxes", t: "Six quilts boxed and ribboned, lined up on the floor before a delivery." },
  { f: "g-life-bed", t: "A finished quilt where it is meant to be — on a bed, in use." },
  { f: "g-life-held", t: "Held up full-height. This is the actual size of a lap quilt." },
  { f: "g-life-studio", t: "Quilts folded on the bench at Formation Pilates, where donations are collected." },
  { f: "g-life-october", t: "The October collection crate: “In October We Wear Pink.”" },
];

function Tile({ it }: { it: Item }) {
  return (
    <figure className="group mb-9 break-inside-avoid">
      <div className="overflow-hidden" style={{ background: "#fff", border: `1px solid ${C.sand}` }}>
        <img
          src={`/images/${it.f}.webp`}
          alt={it.t}
          loading="lazy"
          className="w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          style={{ aspectRatio: it.wide ? "4/3" : it.tall ? "3/4" : "1/1" }}
        />
      </div>
      <figcaption className="mt-3 pr-2">
        <h3 className="serif text-[17px] leading-snug" style={{ color: C.plumDeep }}>
          {it.t}
        </h3>
        {it.d && (
          <p className="mt-1 text-[13.5px] leading-relaxed" style={{ color: "#6A5F5C" }}>
            {it.d}
          </p>
        )}
      </figcaption>
    </figure>
  );
}

export function QuiltsPage() {
  const total = FAMILIES.reduce((n, f) => n + f.items.length, 0) + LIFE.length;

  return (
    <div>
      <PageHero
        eyebrow="The archive"
        title="More than a hundred and fifty quilts have left this house"
        intro="Kathy photographs each one before it goes. These are her photographs — no stock images, no borrowed pictures. Roughly forty hours of cutting, piecing, quilting and binding sit behind every quilt on this page."
      />

      <Section bg={C.cream}>
        <div className="flex flex-wrap gap-x-8 gap-y-2 pb-2">
          {FAMILIES.map(f => (
            <a
              key={f.key}
              href={`#${f.key}`}
              className="text-[12px] tracking-[0.16em] uppercase hover:opacity-70"
              style={{ color: C.rose }}
            >
              {f.label}
            </a>
          ))}
        </div>
        <p className="mt-6 text-[15px]" style={{ color: "#6A5F5C" }}>
          {total} quilts shown here, grouped the way she makes them. The full archive is larger.
        </p>
      </Section>

      {FAMILIES.map((fam, i) => (
        <Section key={fam.key} bg={i % 2 === 0 ? C.paper : C.cream}>
          <div id={fam.key} className="scroll-mt-24 max-w-2xl">
            <Eyebrow>{fam.label}</Eyebrow>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              {fam.lead}
            </p>
          </div>
          <div className="mt-10 columns-1 sm:columns-2 lg:columns-3 gap-6">
            {fam.items.map(it => (
              <Tile key={it.f} it={it} />
            ))}
          </div>
        </Section>
      ))}

      <Section bg={C.blush}>
        <div className="max-w-2xl">
          <Eyebrow>Out of the sewing room</Eyebrow>
          <h2 className="serif mt-3 text-[28px] md:text-[38px] leading-[1.12]" style={{ color: C.plumDeep }}>
            Boxed, ribboned, and handed over
          </h2>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {LIFE.map(it => (
            <figure key={it.f}>
              <img
                src={`/images/${it.f}.webp`}
                alt={it.t}
                loading="lazy"
                className="w-full object-cover"
                style={{ aspectRatio: "4/3", border: `1px solid rgba(82,48,79,.12)` }}
              />
              <figcaption className="mt-3 text-[13.5px] leading-relaxed" style={{ color: "#5C4A56" }}>
                {it.t}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section bg={C.sand}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow>What goes into one</Eyebrow>
            <h2 className="serif mt-3 text-[28px] md:text-[40px] leading-[1.12]" style={{ color: C.plumDeep }}>
              About $100 of fabric, batting, thread and quilting
            </h2>
            <p className="mt-5 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Labor is donated. Materials are not. Sponsoring one quilt covers the whole thing, and
              we&rsquo;ll photograph the finished quilt for you before it goes out the door. At five
              quilts or more, you can request the colors.
            </p>
            <p className="mt-4 text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
              Debbie Springer&rsquo;s samplers are a different story: eighteen small quilts she
              finished herself, now offered for sale so the money can go back into the ones we give
              away.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Btn to="/donate">Sponsor a quilt</Btn>
              <Btn to="/samplers" variant="outline">
                Samplers for sale
              </Btn>
            </div>
          </div>
          <img
            src="/images/display.webp"
            alt="Quilts and gift bags set up for a delivery day"
            className="rounded-3xl w-full object-cover shadow-sm"
            style={{ aspectRatio: "4/3" }}
          />
        </div>
      </Section>
    </div>
  );
}
