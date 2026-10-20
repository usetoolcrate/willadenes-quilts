import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

export const C = {
  cream: "#FBF7F1",
  paper: "#FFFFFF",
  ink: "#241F1D",
  plum: "#52304F",
  plumDeep: "#3B2039",
  rose: "#B4576F",
  blush: "#F0DCE0",
  sage: "#7E9A86",
  sand: "#EFE3D2",
  gold: "#C08A3E",
};

const NAV = [
  { to: "/", label: "Home" },
  { to: "/our-story", label: "Our Story" },
  { to: "/quilts", label: "The Quilts" },
  { to: "/stories", label: "Where They Go" },
  { to: "/get-involved", label: "Get Involved" },
  { to: "/contact", label: "Contact" },
];

export function Mark({ size = 34, color = C.plum }: { size?: number; color?: string }) {
  const s = size;
  return (
    <svg width={s} height={s} viewBox="0 0 48 48" aria-hidden="true">
      <rect x="1" y="1" width="46" height="46" rx="3" fill="none" stroke={color} strokeWidth="1.5" />
      <path d="M6 6h16v16H6z" fill={color} opacity="0.14" />
      <path d="M26 6h16v16H26z" fill={color} opacity="0.3" />
      <path d="M6 26h16v16H6z" fill={color} opacity="0.3" />
      <path d="M26 26h16v16H26z" fill={color} opacity="0.14" />
      <path d="M6 6l16 16M22 6L6 22M26 26l16 16M42 26L26 42" stroke={color} strokeWidth="1.2" />
      <path d="M24 1v46M1 24h46" stroke={color} strokeWidth="1.2" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-3 shrink-0">
      <Mark color={light ? "#FBF7F1" : C.plum} />
      <span className="leading-tight">
        <span
          className="serif block text-[19px] md:text-[21px]"
          style={{ color: light ? "#FBF7F1" : C.plumDeep }}
        >
          Willadene&rsquo;s Quilts
        </span>
        <span
          className="block text-[10px] tracking-[0.18em] uppercase"
          style={{ color: light ? "rgba(251,247,241,.7)" : "#8A7C79" }}
        >
          501(c)(3) nonprofit
        </span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur"
      style={{ background: "rgba(251,247,241,0.94)", borderColor: "#E7DCCE" }}
    >
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-[74px] flex items-center justify-between gap-4">
        <Wordmark />
        <nav className="hidden md:flex items-center gap-4 lg:gap-7 text-[13.5px] lg:text-[14px]">
          {NAV.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="transition-colors hover:opacity-100"
              style={{
                color: pathname === n.to ? C.plumDeep : "#5C514E",
                opacity: pathname === n.to ? 1 : 0.9,
                fontWeight: pathname === n.to ? 600 : 400,
              }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="rounded-full px-5 py-2.5 text-[14px] font-semibold text-white transition-transform hover:-translate-y-px"
            style={{ background: C.plum }}
          >
            Sponsor a Quilt
          </Link>
        </nav>
        <button
          type="button"
          aria-label="Menu"
          className="md:hidden p-2"
          onClick={() => setOpen(v => !v)}
          style={{ color: C.plumDeep }}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t px-5 pb-5 pt-2" style={{ borderColor: "#E7DCCE" }}>
          {NAV.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="block py-3 text-[16px] border-b"
              style={{ color: C.ink, borderColor: "#F0E7DA" }}
            >
              {n.label}
            </Link>
          ))}
          <Link
            to="/donate"
            className="mt-4 block rounded-full py-3 text-center font-semibold text-white"
            style={{ background: C.plum }}
          >
            Sponsor a Quilt
          </Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: C.plumDeep, color: "#F3E9E7" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-14 grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Wordmark light />
          <p className="mt-5 max-w-sm text-[14.5px] leading-relaxed" style={{ color: "#D7C7CB" }}>
            In loving memory of Willadene Springer. Every quilt is made by hand and hand-delivered
            to a woman in treatment &mdash; privacy always protected.
          </p>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "#B79BA9" }}>
            Explore
          </h4>
          <div className="mt-4 space-y-2.5 text-[14.5px]">
            {[...NAV, { to: "/samplers", label: "Samplers for Sale" }, { to: "/donate", label: "Donate" }].map(n => (
              <Link key={n.to} to={n.to} className="block hover:underline">
                {n.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-[11px] uppercase tracking-[0.18em]" style={{ color: "#B79BA9" }}>
            Reach us
          </h4>
          <div className="mt-4 space-y-2.5 text-[14.5px]">
            <a href="mailto:kathy.g.patrick@gmail.com" className="block hover:underline">
              kathy.g.patrick@gmail.com
            </a>
            <p style={{ color: "#D7C7CB" }}>Los Angeles, CA</p>
            <p style={{ color: "#D7C7CB" }}>
              Quilters working from home across the United States
            </p>
          </div>
        </div>
      </div>
      <div
        className="border-t px-5 md:px-8 py-6 text-[12.5px] mx-auto max-w-6xl flex flex-col sm:flex-row gap-2 justify-between"
        style={{ borderColor: "#54345A", color: "#B79BA9" }}
      >
        <span>&copy; {new Date().getFullYear()} Willadene&rsquo;s Quilts. All rights reserved.</span>
        <span>A 501(c)(3) nonprofit organization &mdash; donations are tax deductible.</span>
      </div>
    </footer>
  );
}

export function Eyebrow({ children, color = C.rose }: { children: React.ReactNode; color?: string }) {
  return (
    <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color }}>
      {children}
    </p>
  );
}

export function Btn({
  to,
  href,
  children,
  variant = "solid",
}: {
  to?: string;
  href?: string;
  children: React.ReactNode;
  variant?: "solid" | "outline" | "light";
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-semibold transition-transform hover:-translate-y-px";
  const style =
    variant === "solid"
      ? { background: C.plum, color: "#fff" }
      : variant === "light"
        ? { background: "#FBF7F1", color: C.plumDeep }
        : { border: `1.5px solid ${C.plum}`, color: C.plumDeep, background: "transparent" };
  if (href)
    return (
      <a href={href} className={base} style={style}>
        {children}
      </a>
    );
  return (
    <Link to={to ?? "/"} className={base} style={style}>
      {children}
    </Link>
  );
}

export function Section({
  children,
  bg = C.cream,
  className = "",
}: {
  children: React.ReactNode;
  bg?: string;
  className?: string;
}) {
  return (
    <section style={{ background: bg }} className={`px-5 md:px-8 py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl">{children}</div>
    </section>
  );
}

export function PageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <section
      className="px-5 md:px-8 pt-14 pb-14 md:pt-20 md:pb-20 border-b"
      style={{ background: C.sand, borderColor: "#E4D6C2" }}
    >
      <div className="mx-auto max-w-6xl">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1
          className="serif mt-3 text-[34px] md:text-[52px] leading-[1.08] max-w-3xl"
          style={{ color: C.plumDeep }}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-[17px] leading-relaxed" style={{ color: "#4A403D" }}>
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
