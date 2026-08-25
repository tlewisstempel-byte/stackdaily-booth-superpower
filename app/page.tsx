"use client";

import { useState } from "react";

type PathId = "creator" | "builder" | "investor";

const paths: Record<PathId, { label: string; title: string; copy: string; action: string; reward: string }> = {
  creator: { label: "CREATOR", title: "Make a piece of content with the product.", copy: "They submit the post or draft. You decide the creator reward and receive a clear distribution signal.", action: "SUBMIT A POST", reward: "Creator reward" },
  builder: { label: "BUILDER", title: "Use the product and complete a task.", copy: "They create an account, complete the product action and receive credits or access from you.", action: "USE THE PRODUCT", reward: "Product credits" },
  investor: { label: "INVESTOR", title: "Answer the questions and open the deck.", copy: "They answer a short product quiz. You share the deck with people who have shown a reason to read it.", action: "TAKE THE QUIZ", reward: "Investor deck" }
};

const faqs = [
  ["Where does the flow start?", "The content plan starts the conversation before the event. A person can reserve a path from that content or enter from the booth QR code."],
  ["What does StackDaily build?", "We build the page, the content plan, the path logic and the handoff to you. Outbound can be added for a higher-touch package."],
  ["How does this sit alongside event quest tools?", "Event quest tools handle event mechanics. StackDaily handles your story, the product action and the lead nurture around the booth."],
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
      <div className="eyebrow">StackDaily / Sponsor activation</div>
      <div className="hero-grid"><div className="hero-copy-block"><h1>TURN THE PEOPLE<br />THAT COME TO YOUR BOOTH<br />INTO YOUR <em>SUPERPOWER.</em></h1><p className="hero-copy">We build a path for every person that comes to your booth to deliver value back to you.</p></div><div className="hero-object"><div className="object-label"><span>STACKDAILY / LIVE</span><span>01</span></div><div className="object-content"><span className="object-kicker">YOUR BOOTH VISITOR</span><strong>CHOOSE<br />A PATH.</strong><small>Creator / Builder / Investor</small></div><div className="object-footer"><span>Product action</span><b>→</b><span>Reward</span></div></div></div>
      <div className="scroll-cue"><span>SCROLL TO SEE THE FLOW</span><span>↓</span></div>
    </section>

    <section className="section nurture-section" id="nurture"><div className="section-label"><span>01</span><span>BEFORE THE EVENT</span></div><div className="section-grid"><div><h2>BUILD INTEREST<br />BEFORE THE<br /><em>EVENT.</em></h2></div><div><p className="section-lead">We plan content that gives people a reason to engage with you before the event.</p><p className="section-copy">That content sends people into a reserved path. A higher-touch package can add outbound to the same route.</p><div className="feature-row"><div><span>CONTENT PLAN</span><p>Posts and prompts that lead into the activation.</p></div><div><span>OPTIONAL OUTBOUND</span><p>Direct invitations for people who fit the audience.</p></div></div><div className="cta-row"><a className="text-cta" href="#activation">SEE THE PATHS <span>→</span></a><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section activation-section" id="activation"><div className="section-label"><span>02</span><span>THE ACTIVATION</span></div><div className="section-grid activation-grid"><div><h2>EVERY BOOTH ATTENDEE<br />BECOMES YOUR <em>SUPERHERO.</em></h2><p className="section-copy">The pre-nurtured leads we create for you arrive with a path already reserved. New booth visitors scan a QR code and choose their path. Everyone then enters the path designed to create value for you and for them.</p><a className="button button-red" href="/book">MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div><div className="path-demo"><div className="path-tabs">{(Object.keys(paths) as PathId[]).map((id) => <button key={id} className={selectedPath === id ? "is-active" : ""} onMouseEnter={() => setSelectedPath(id)} onFocus={() => setSelectedPath(id)} onClick={() => setSelectedPath(id)}>{paths[id].label}<span>→</span></button>)}</div><div className="path-panel"><div className="panel-top"><span>PATH / {active.label}</span><span>LIVE DEMO</span></div><div className="panel-main"><div className="panel-number">0{Object.keys(paths).indexOf(selectedPath) + 1}</div><div><div className="eyebrow">{active.label} challenge</div><h3>{active.title}</h3><p>{active.copy}</p><button className="panel-action" onClick={() => setSelectedPath(selectedPath)}>{active.action} <span>→</span></button></div></div><div className="panel-reward"><span>WHEN THEY FINISH</span><strong>UNLOCK {active.reward.toUpperCase()}</strong></div></div></div></div></section>

    <section className="section entry-section" id="after-event"><div className="section-label"><span>03</span><span>AFTER THE BOOTH</span></div><div className="section-grid"><div><h2>THEY LEAVE<br />WITH VALUE.<br />YOU RECEIVE <em>VALUE.</em></h2></div><div><p className="section-lead">A booth visit should not end with generic information and a form to fill out.</p><p className="section-copy">Different attendees take different paths. They complete the action that fits them after they leave and unlock the reward you set. You receive the completed action and a clearer signal of what they care about.</p><div className="feature-row"><div><span>THEIR REWARD</span><p>A reason to complete the next step after the booth.</p></div><div><span>YOUR RETURN</span><p>A useful action and a clear reason to follow up.</p></div></div><div className="cta-row"><a className="button button-red button-small" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a></div></div></div></section>

    <section className="section faq-section" id="faq"><div className="section-label"><span>04</span><span>FAQ</span></div><div className="faq-layout"><div><h2>WHAT<br /><em>YOU</em><br />NEED TO KNOW.</h2></div><div className="faq-list">{faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div></section>

    <section className="book-section" id="book"><div className="eyebrow">StackDaily / Next step</div><h2>MAKE YOUR BOOTH<br />YOUR <em>SUPERPOWER.</em></h2><p>Bring the event, the product and the audience. We’ll map the activation.</p><a className="button button-light" href="/book">TALK TO US TO MAKE YOUR BOOTH YOUR SUPERPOWER <span>→</span></a><small>Demo flow. Your content and rewards are agreed before launch.</small></section>

    <footer><a className="wordmark" href="#top" aria-label="StackDaily"><span>stac<span>k</span></span><small>daily</small></a><span>EVENT ACTIVATION / 01</span></footer>
  </main>;
}
