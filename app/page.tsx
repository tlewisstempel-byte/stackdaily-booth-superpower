"use client";

import { useState } from "react";

type PathId = "creator" | "builder" | "investor";

const paths: Record<PathId, { label: string; title: string; copy: string; action: string; reward: string; proofValue: string; proofLabel: string }> = {
  creator: { label: "CREATOR", title: "Create content about you.", copy: "They post or submit a draft. You set their reward and receive content you can use.", action: "SUBMIT A POST", reward: "Creator reward", proofValue: "130+", proofLabel: "pieces of UGC from our most recent campaign" },
  builder: { label: "BUILDER", title: "Use your product.", copy: "They sign up and complete your product task. You give them credits or access for doing it.", action: "USE YOUR PRODUCT", reward: "Product credits", proofValue: "670", proofLabel: "sign-ups from our most recent campaign" },
  investor: { label: "INVESTOR", title: "Open your deck.", copy: "They complete a short product quiz. You share your deck with people who want to see it.", action: "TAKE PRODUCT QUIZ", reward: "Investor deck", proofValue: "SEVEN FIGURES", proofLabel: "in deal flow closed" }
};

const logos = [
  ["Animoca Brands", "/logos/animoca-brands.png"],
  ["TON", "/logos/ton.png"],
  ["", "/logos/logo-03.png"],
  ["", "/logos/logo-04.png"],
  ["", "/logos/logo-05.png"],
  ["", "/logos/logo-06.png"],
  ["Kudoswap", "/logos/kudoswap.png"],
  ["", "/logos/logo-08.png"],
  ["", "/logos/logo-09.png"],
  ["D3", "/logos/d3.png"],
  ["", "/logos/logo-11.png"],
  ["Gacha", "/logos/gacha.png"],
  ["Educhain / Open Campus", "/logos/educhain.png"],
  ["Spring", "/logos/spring.png"]
];

const faqs = [
  ["What problem does this solve?", "You spend serious money to get people to your booth. We segment each visitor by what they want and what they can offer you. They get a path and reward that fit them. You get a useful action back."],
  ["What does Compound build?", "We build your campaign page, QR flow, action and reward. You tell us what you want people to do after your booth."],
  ["How does this sit alongside event quest tools?", "Quest tools help people check in and collect things at events. We build your campaign around your booth so people complete an action for you after they leave."],
  ["What does your team do on event day?", "Put your QR code where people can see it and tell people to choose a path. We handle everything digitally."]
];

export default function Home() {
  const [selectedPath, setSelectedPath] = useState<PathId>("builder");
  const active = paths[selectedPath];

  return <main className="site-shell">
    <header className="site-header">
      <a className="brand-logo-link" href="#top" aria-label="Compound"><img className="brand-logo" src="/compound-logo.png" alt="Compound" /></a>
      <nav><a href="#activation">YOUR ACTIVATION</a><a href="#faq">FAQ</a><a className="nav-cta" href="/book">TALK TO US <span>→</span></a></nav>
    </header>

    <section className="hero" id="top">
      <div className="eyebrow">Compound / Booth campaigns</div>
      <div className="hero-grid"><div className="hero-copy-block"><h1>YOU JUST SPENT<br />FIVE FIGURES<br />ON A BOOTH.<br /><em>WHAT HAPPENS<br />AFTER EVERYONE<br />LEAVES?</em></h1><p className="hero-copy">We build what happens next, so your booth keeps creating value after your event.</p></div><div className="hero-object"><div className="object-label"><span>COMPOUND / LIVE</span><span>01</span></div><div className="object-content"><span className="object-kicker">AFTER YOUR EVENT</span><strong>WHAT<br />HAPPENS<br />NEXT.</strong><small>Action / Reward / Value</small></div><div className="object-footer"><span>Attention</span><b>→</b><span>Continued value</span></div></div></div>
      <div className="scroll-cue"><span>SCROLL TO SEE YOUR FLOW</span><span>↓</span></div>
    </section>

    <section className="trusted-section" aria-label="Trusted by"><div className="trusted-heading"><span>TRUSTED BY</span><span>COMPOUND / SELECTED WORK</span></div><div className="trusted-viewport"><div className="trusted-track" aria-hidden="true">{[...logos, ...logos].map(([name, src], index) => <div className="trusted-logo" key={`${src}-${index}`}><img src={src} alt={name} /></div>)}</div></div></section>

    <section className="section nurture-section" id="nurture"><div className="section-label"><span>01</span><span>WHAT WE BUILD</span></div><div className="section-grid"><div><h2>WE BUILD<br />REAL VALUE<br />FROM EVERY<br /><em>BOOTH VISITOR.</em></h2></div><div><p className="section-lead">Your booth brings people to you. We build the flow that retains value for you after they leave.</p><p className="section-copy">You tell us what you want from visitors. We set action and reward, then put it behind your QR code.</p><div className="feature-row"><div><span>ACTION</span><p>What you want someone to do after your booth.</p></div><div><span>REWARD</span><p>What they unlock when they finish it.</p></div></div><div className="evidence-block"><div className="evidence-heading"><span>RECENT CAMPAIGN EVIDENCE</span><p>Numbers from work we’ve already run across streams, workshops and challenges.</p></div><div className="evidence-grid"><div className="evidence-card"><strong>1,400+</strong><span>Telegram community members</span></div><div className="evidence-card"><strong>1,500</strong><span>average views per stream</span></div><div className="evidence-card"><strong>$6.62</strong><span>CPM on challenge campaigns</span></div><div className="evidence-card"><strong>$1.49</strong><span>average CPA on signup challenges</span></div></div><p className="evidence-note">From existing Compound campaigns.</p></div><div className="cta-row"><a className="text-cta" href="#activation">SEE EXAMPLES <span>→</span></a><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section activation-section" id="activation"><div className="section-label"><span>02</span><span>WHAT PEOPLE DO</span></div><div className="section-grid activation-grid"><div><h2>EVERY BOOTH<br />ATTENDEE BECOMES<br />YOUR <em>SUPERHERO.</em></h2><p className="section-copy">They scan your QR code and choose a route that fits them. They complete an action after your event to unlock their reward. You get that action back.</p><a className="button button-red" href="/book">MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div><div className="path-demo"><div className="path-tabs">{(Object.keys(paths) as PathId[]).map((id) => <button key={id} className={selectedPath === id ? "is-active" : ""} onMouseEnter={() => setSelectedPath(id)} onFocus={() => setSelectedPath(id)} onClick={() => setSelectedPath(id)}>{paths[id].label}<span>→</span></button>)}</div><div className="path-panel"><div className="panel-top"><span>PATH / {active.label}</span><span>LIVE DEMO</span></div><div className="panel-main"><div className="panel-number">0{Object.keys(paths).indexOf(selectedPath) + 1}</div><div><div className="eyebrow">{active.label} challenge</div><h3>{active.title}</h3><p>{active.copy}</p><button className="panel-action" onClick={() => setSelectedPath(selectedPath)}>{active.action} <span>→</span></button></div></div><div className="panel-reward"><span>WHEN THEY FINISH</span><strong>UNLOCK {active.reward.toUpperCase()}</strong></div><div className="panel-proof"><span>RECENT RESULT</span><strong>{active.proofValue}</strong><small>{active.proofLabel}</small></div></div></div></div></section>

    <section className="section entry-section" id="after-event"><div className="section-label"><span>03</span><span>WHAT COMES BACK TO YOU</span></div><div className="section-grid"><div><h2>YOUR BOOTH<br />ENDS.<br />THE VALUE<br /><em>DOESN'T.</em></h2></div><div><p className="section-lead">Most booths buy a short burst of attention.</p><p className="section-copy">We keep interaction going after your event. You see what each person did and can follow up with something useful. If you want people entering your page before your event, we add your content plan and outbound.</p><div className="feature-row"><div><span>CORE PRODUCT</span><p>Your campaign page, QR code, action and reward.</p></div><div><span>OPTIONAL ADD-ON</span><p>Content and outbound before your event.</p></div></div><div className="cta-row"><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="section-label"><span>04</span><span>FAQ</span></div><div className="faq-layout"><div><h2>WHAT<br /><em>YOU</em><br />NEED TO KNOW.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="book-section" id="book"><div className="eyebrow">Compound / Next step</div><h2>MAKE YOUR BOOTH<br />KEEP <em>WORKING.</em></h2><p>Tell us about your event. We’ll show you what happens after people leave your booth.</p><a className="button button-red" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></section>

    <footer><a className="brand-logo-link" href="#top" aria-label="Compound"><img className="brand-logo" src="/compound-logo.png" alt="Compound" /></a><span>EVENT ACTIVATION / 01</span></footer>
  </main>;
}
