import { Mail, MapPin, Users } from "lucide-react";
import { C, Eyebrow, PageHero, Section } from "./ui";

function Field({
  label,
  placeholder,
  type = "text",
  wide = false,
}: {
  label: string;
  placeholder?: string;
  type?: string;
  wide?: boolean;
}) {
  return (
    <label className={wide ? "sm:col-span-2 block" : "block"}>
      <span className="text-[13px] uppercase tracking-[0.14em]" style={{ color: "#8A7C79" }}>
        {label}
      </span>
      <input
        type={type}
        placeholder={placeholder}
        className="mt-2 w-full rounded-xl px-4 py-3 text-[15px] outline-none"
        style={{ background: "#FBF7F1", border: "1.5px solid #EADFD0" }}
      />
    </label>
  );
}

export function ContactPage() {
  return (
    <div>
      <PageHero
        eyebrow="Contact"
        title="Tell us how you'd like to help — or who needs a quilt"
        intro="We read every message. If you know a woman in treatment who would welcome a quilt, write to us; names are never published and privacy is always protected."
      />

      <Section bg={C.cream}>
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <div
            className="rounded-3xl border p-7 md:p-9"
            style={{ background: "#fff", borderColor: "#EADFD0" }}
          >
            <h2 className="serif text-[26px]" style={{ color: C.plumDeep }}>
              Send a message
            </h2>
            <div className="mt-7 grid sm:grid-cols-2 gap-5">
              <Field label="First name" placeholder="Kathy" />
              <Field label="Last name" placeholder="Patrick" />
              <Field label="Email" type="email" placeholder="you@example.com" wide />
              <Field label="Phone (optional)" placeholder="(555) 555-5555" wide />
              <label className="sm:col-span-2 block">
                <span
                  className="text-[13px] uppercase tracking-[0.14em]"
                  style={{ color: "#8A7C79" }}
                >
                  How can we help?
                </span>
                <textarea
                  rows={5}
                  placeholder="I'd like to quilt / I have fabric to donate / I know someone in treatment..."
                  className="mt-2 w-full rounded-xl px-4 py-3 text-[15px] outline-none resize-y"
                  style={{ background: "#FBF7F1", border: "1.5px solid #EADFD0" }}
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-7 w-full sm:w-auto rounded-full px-8 py-3.5 text-[15.5px] font-semibold text-white"
              style={{ background: C.plum }}
            >
              Submit
            </button>
            <p className="mt-3 text-[12.5px]" style={{ color: "#8A7C79" }}>
              Preview only &mdash; the form is not wired up yet.
            </p>
          </div>

          <div className="space-y-5">
            {[
              [Mail, "Email us", "kathy.g.patrick@gmail.com", "mailto:kathy.g.patrick@gmail.com"],
              [MapPin, "Where we are", "Los Angeles, CA — with a special relationship with Cedars-Sinai", null],
              [Users, "Where we quilt", "All across the United States, from our own homes", null],
            ].map(([Icon, t, d, href]) => {
              const I = Icon as typeof Mail;
              return (
                <div
                  key={t as string}
                  className="rounded-2xl border p-6"
                  style={{ background: "#fff", borderColor: "#EADFD0" }}
                >
                  <I size={19} style={{ color: C.plum }} />
                  <h3 className="serif mt-4 text-[19px]" style={{ color: C.plumDeep }}>
                    {t as string}
                  </h3>
                  {href ? (
                    <a
                      href={href as string}
                      className="mt-1.5 block text-[15.5px] underline"
                      style={{ color: C.rose }}
                    >
                      {d as string}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-[15.5px] leading-relaxed" style={{ color: "#4A403D" }}>
                      {d as string}
                    </p>
                  )}
                </div>
              );
            })}
            <div className="rounded-2xl p-6" style={{ background: C.blush }}>
              <Eyebrow color={C.plum}>A note on privacy</Eyebrow>
              <p className="mt-3 text-[15px] leading-relaxed" style={{ color: "#4A403D" }}>
                Quilts are delivered to hospitals, clinics and homes without publishing any
                recipient&rsquo;s name or story. If you nominate someone, we handle it quietly.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
