"use client";

import { useState } from "react";
import "../globals.css";

const slots = ["Tuesday / 11:00", "Wednesday / 14:30", "Thursday / 09:30"];

export default function BookPage() {
  const [selected, setSelected] = useState<string | null>(null);

  return <main className="booking-shell">
    <header className="site-header"><a className="brand-logo-link" href="/" aria-label="Compound"><img className="brand-logo" src="/compound-logo.png" alt="Compound" /></a><a className="booking-back" href="/">← BACK TO YOUR SITE</a></header>
    <section className="booking-page"><div className="eyebrow">Compound / Booking</div><div className="booking-grid"><div><h1>MAKE YOUR BOOTH<br />KEEP <em>WORKING.</em></h1><p className="booking-copy">Tell us about your event. We’ll show you what happens after people leave.</p><div className="booking-points"><span>15 MINUTES</span><span>YOUR BOOTH ACTIVATION</span><span>NO PREP REQUIRED</span></div></div><div className="booking-card"><div className="object-label"><span>CHOOSE A TIME</span><span>01</span></div><div className="booking-card-body">{selected ? <><div className="eyebrow">Time selected</div><h2>{selected}</h2><p>This is a demo booking flow. Your real calendar link can be added here.</p><button className="button button-red" onClick={() => setSelected(null)}>CHOOSE ANOTHER TIME <span>↗</span></button></> : <>{slots.map((slot) => <button className="slot" key={slot} onClick={() => setSelected(slot)}><span>{slot}</span><b>→</b></button>)}</>}</div></div></div></section>
  </main>;
}
