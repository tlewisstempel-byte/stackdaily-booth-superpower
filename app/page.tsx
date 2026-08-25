"use client";

import { useState } from "react";

type PathId = "creator" | "builder" | "investor";

const paths: Record<PathId, { label: string; title: string; copy: string; action: string; reward: string }> = {
  creator: { label: "CREATOR", title: "Create content about you.", copy: "They post or submit a draft. You decide the reward and receive something you can actually use.", action: "SUBMIT A POST", reward: "Creator reward" },
  builder: { label: "BUILDER", title: "Use your product.", copy: "They sign up and complete the product task. You give them credits or access for doing it.", action: "USE THE PRODUCT", reward: "Product credits" },
  investor: { label: "INVESTOR", title: "Get information about you.", copy: "They complete a short product quiz. You share the deck with people who want to see it.", action: "TAKE THE QUIZ", reward: "Investor deck" }
};

const faqs = [
  ["Where does the flow start?", "It starts at the booth QR code. We can add pre-event content if you want people entering it before the event."],
  ["What does StackDaily build?", "We build the campaign page, QR flow, action and reward. You tell us what you want people to do after the booth."],
  ["How does this sit alongside event quest tools?", "Quest tools help people check in and collect things at an event. We build the sponsor campaign around the booth so people complete an action for you after they leave."],
  ["What does your team have to do on the day?", "Put the QR code where people can see it and tell them to choose a path. The digital flow carries the rest."]
];

export default function Home() {
  const [selectedPath, setSelectedPath] = useState<PathId>("builder");
  const active = paths[selectedPath];

  return <main className="site-shell">
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="StackDaily"><span>stac<span>k</span></span><small>daily</small></a>
      <nav><a href="#activation">THE ACTIVATION</a><a href="#faq">FAQ</a><a className="nav-cta" href="/book">TALK TO US <span>→</span></a></nav>
    </header>

    <section className="hero" id="top">
      <div className="eyebrow">StackDaily / Booth campaigns</div>
      <div className="hero-grid"><div className="hero-copy-block"><h1>MAKE YOUR BOOTH<br />WORK <em>AFTER</em><br />PEOPLE LEAVE.</h1><p className="hero-copy">We build the campaign page and follow-up flow. People get a reward. You get a completed action.</p></div><div className="hero-object"><div className="object-label"><span>STACKDAILY / LIVE</span><span>01</span></div><div className="object-content"><span className="object-kicker">YOUR BOOTH VISITOR</span><strong>PICK<br />A PATH.</strong><small>Creator / Builder / Investor</small></div><div className="object-footer"><span>Complete action</span><b>→</b><span>Get reward</span></div></div></div>
      <div className="scroll-cue"><span>SCROLL TO SEE THE FLOW</span><span>↓</span></div>
    </section>

    <section className="section nurture-section" id="nurture"><div className="section-label"><span>01</span><span>WHAT WE BUILD</span></div><div className="section-grid"><div><h2>TELL US WHAT<br />YOU WANT PEOPLE<br />TO <em>DO.</em></h2></div><div><p className="section-lead">We build the campaign page and the flow around that.</p><p className="section-copy">You tell us what matters after someone leaves your booth. We agree the action, agree the reward, then put the whole thing behind the QR code.</p><div className="feature-row"><div><span>THE ACTION</span><p>What you want someone to actually do after the booth.</p></div><div><span>THE REWARD</span><p>What they unlock when they finish it.</p></div></div><div className="cta-row"><a className="text-cta" href="#activation">SEE THE EXAMPLES <span>→</span></a><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section activation-section" id="activation"><div className="section-label"><span>02</span><span>WHAT PEOPLE DO</span></div><div className="section-grid activation-grid"><div><h2>PEOPLE GET<br />SOMETHING.<br />YOU GET <em>SOMETHING.</em></h2><p className="section-copy">They scan the QR code at your booth and choose the route that fits them. The reward gets them through the action. The action gives you something useful back.</p><a className="button button-red" href="/book">MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div><div className="path-demo"><div className="path-tabs">{(Object.keys(paths) as PathId[]).map((id) => <button key={id} className={selectedPath === id ? "is-active" : ""} onMouseEnter={() => setSelectedPath(id)} onFocus={() => setSelectedPath(id)} onClick={() => setSelectedPath(id)}>{paths[id].label}<span>→</span></button>)}</div><div className="path-panel"><div className="panel-top"><span>PATH / {active.label}</span><span>LIVE DEMO</span></div><div className="panel-main"><div className="panel-number">0{Object.keys(paths).indexOf(selectedPath) + 1}</div><div><div className="eyebrow">{active.label} challenge</div><h3>{active.title}</h3><p>{active.copy}</p><button className="panel-action" onClick={() => setSelectedPath(selectedPath)}>{active.action} <span>→</span></button></div></div><div className="panel-reward"><span>WHEN THEY FINISH</span><strong>UNLOCK {active.reward.toUpperCase()}</strong></div></div></div></div></section>

    <section className="section entry-section" id="after-event"><div className="section-label"><span>03</span><span>WHAT COMES BACK TO YOU</span></div><div className="section-grid"><div><h2>YOU GET<br />MORE THAN<br />A <em>NAME.</em></h2></div><div><p className="section-lead">Most booth visits end with a generic form to fill out.</p><p className="section-copy">This gives you a completed action from each person who takes part, then a real reason to follow up. If you want people entering the page before the event, we add the content plan and outbound.</p><div className="feature-row"><div><span>CORE PRODUCT</span><p>The campaign page, QR code, action and reward.</p></div><div><span>OPTIONAL ADD-ON</span><p>Content and outbound before the event.</p></div></div><div className="cta-row"><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="section-label"><span>04</span><span>FAQ</span></div><div className="faq-layout"><div><h2>WHAT<br /><em>YOU</em><br />NEED TO KNOW.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="book-section" id="book"><div className="eyebrow">StackDaily / Next step</div><h2>MAKE YOUR BOOTH<br />YOUR <em>SUPERPOWER.</em></h2><p>Tell us the event you're exhibiting at and we will ensure that it creates maximum value for you.</p><a className="button button-red" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></section>

    <footer><a className="wordmark" href="#top" aria-label="StackDaily"><span>stac<span>k</span></span><small>daily</small></a><span>EVENT ACTIVATION / 01</span></footer>
  </main>;
}
