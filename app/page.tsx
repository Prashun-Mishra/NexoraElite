'use client'

import { useState } from 'react'
import {
  ArrowRight,
  BarChart3,
  ChevronDown,
  CirclePlay,
  ClipboardCheck,
  Layers3,
  Menu,
  MessageCircle,
  PenTool,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingUp,
  Users,
  X,
} from 'lucide-react'

const services = [
  { icon: Users, title: 'Influencer Marketing & Talent Matching', description: 'Creator sourcing, negotiation, contract management, and performance tracking across Instagram, TikTok, YouTube, and X.' },
  { icon: PenTool, title: 'Content Strategy & Viral Video Production', description: 'High-converting short-form (Reels, TikToks, Shorts) and long-form video production tailored for brand awareness and sales.' },
  { icon: BarChart3, title: 'Paid Social & Performance Media', description: 'Data-backed Facebook, TikTok, Instagram, and LinkedIn ad campaigns optimized for full-funnel conversion.' },
  { icon: MessageCircle, title: 'Social Media Management & Brand Positioning', description: 'End-to-end community building, content scheduling, brand voice curation, and active engagement.' },
  { icon: Sparkles, title: 'Creator Whitelisting & Spark Ads', description: 'Leveraging creator handles for authentic paid ads with targeted reach and higher conversion rates.' },
]

const process = [
  ['01', 'Strategy & Audience Mapping', 'Deep dive into brand goals, target demographics, and offer resonance.'],
  ['02', 'Creator Curation & Vetting', 'Sourcing brand-fit creators with verified authentic audiences.'],
  ['03', 'Execution & Campaign Launch', 'Seamless production, compliance check, and multi-channel publication.'],
  ['04', 'Tracking, Optimization & Scaling', 'Real-time analytics tracking, ROI reporting, and scaling winning campaigns.'],
]

const testimonials = [
  ['Nexora Elite Media completely transformed our creator strategy. Their creator selection was spot on and drove our biggest sales month ever.', 'Elena R.', 'CMO at Aura Skincare'],
  ['Fast execution, premium content quality, and flawless communication. The team delivered way beyond our initial ROI targets.', 'Marcus V.', 'Founder of Vault Tech'],
  ['Finding authentic influencers used to take us weeks. Nexora handled everything seamlessly from outreach to final analytics.', 'Sarah K.', 'Marketing Lead at Zenith Apparel'],
  ['Our TikTok presence went from zero to viral in under 60 days. Highly strategic and transparent team!', 'David L.', 'E-commerce Director at Nova Gear'],
  ['The highest ROI we’ve seen from any agency partnership. Their paid creator whitelisting strategy is pure gold.', 'Priya M.', 'Head of Growth at Lumina Wellness'],
]

const faqs = [
  ['What services does Nexora Elite Media provide?', 'We bring together influencer marketing, content production, paid social, social media management, and creator whitelisting in one focused growth partner.'],
  ['Which social media platforms do you support?', 'Our campaigns can span Instagram, TikTok, YouTube, X, Facebook, and LinkedIn, depending on where your audience is most active.'],
  ['How do you select influencers?', 'We evaluate audience authenticity, brand fit, creative quality, engagement patterns, and past partnership context before making a recommendation.'],
  ['How much should I budget for a campaign?', 'Budgets vary by objective, platform, creator tier, and production scope. We build a custom recommendation around your goals rather than a fixed package.'],
  ['How do you measure campaign performance?', 'We align on meaningful measures upfront, then track delivery, engagement, traffic, conversion signals, and learnings through clear reporting.'],
  ['How long does it take to launch a campaign?', 'Most campaigns begin with a discovery and planning phase. The exact launch window depends on creative scope, creator availability, and approvals.'],
  ['Do you work with small businesses and growing brands?', 'Yes. We work with ambitious teams at different stages and tailor the mix of strategy, creators, and media to match the opportunity.'],
  ['How can I get started?', 'Share a few details about your brand and goals below. Our strategy team will review your application and follow up with the right next step.'],
]

function BrandMark() {
  return <span className="brand-mark" aria-hidden="true"><span /><span /><span /></span>
}

function Modal({ title, children, onClose }: { title: string; children: React.ReactNode; onClose: () => void }) {
  return <div className="modal-backdrop" role="presentation" onMouseDown={onClose}>
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="modal-title" onMouseDown={(event) => event.stopPropagation()}>
      <button className="icon-button modal-close" onClick={onClose} aria-label="Close dialog"><X /></button>
      <p className="eyebrow">Nexora Elite Media</p><h2 id="modal-title">{title}</h2>{children}
    </div>
  </div>
}

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [modal, setModal] = useState<'privacy' | 'terms' | null>(null)
  const [formMessage, setFormMessage] = useState('')
  const [errors, setErrors] = useState<Record<string, string>>({})

  function submitForm(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const nextErrors: Record<string, string> = {}
    for (const field of ['name', 'email', 'company', 'message']) if (!String(data.get(field) || '').trim()) nextErrors[field] = 'This field is required.'
    if (String(data.get('email') || '') && !/^\S+@\S+\.\S+$/.test(String(data.get('email')))) nextErrors.email = 'Enter a valid business email.'
    setErrors(nextErrors)
    setFormMessage(Object.keys(nextErrors).length ? '' : 'The submission service is not connected in this preview. Your details have not been sent.')
  }

  return <main>
    <header className="site-header"><div className="container nav-wrap">
      <a className="brand" href="#top" aria-label="Nexora Elite Media home"><BrandMark /><span>Nexora <strong>Elite</strong> Media</span></a>
      <button className="mobile-menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X /> : <Menu />}</button>
      <nav className={menuOpen ? 'nav-links open' : 'nav-links'} aria-label="Main navigation">
        {['Services', 'Process', 'Reviews', 'FAQs'].map((item) => <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>{item}</a>)}
        <a className="button button-small" href="#contact" onClick={() => setMenuOpen(false)}>Get Started <ArrowRight /></a>
      </nav>
    </div></header>

    <section id="top" className="hero section"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow">Social media, elevated</p><h1>Elevate your brand with <em>high-impact</em> social media & influencer marketing.</h1><p className="hero-lede">We connect visionary brands with top-tier creators and scale social presence through data-driven campaigns, viral storytelling, and performance influencer strategies.</p><div className="hero-actions"><a className="button" href="#contact">Launch Your Campaign <ArrowRight /></a><a className="text-link" href="#services">View Services <ArrowRight /></a></div><div className="trust-row"><span className="trust-avatars"><i>ER</i><i>MV</i><i>SK</i></span><span>Trusted by ambitious brands<br /><strong>Ready for their next chapter</strong></span></div></div>
      <div className="hero-visual"><div className="visual-window"><div className="window-top"><span><i /><i /><i /></span><small>campaign / 2026</small></div><div className="editorial-panel"><p>BUILD<br /><strong>WHAT<br />MATTERS</strong></p><div className="panel-orb"><span>NE</span></div></div><div className="visual-footer"><span>Creator partnerships</span><span>01 — 04</span></div></div><div className="visual-note"><TrendingUp /><span><strong>Strategy-led.</strong><br />Performance-minded.</span></div></div>
    </div></section>

    <section id="services" className="section soft-section"><div className="container"><div className="section-heading"><p className="eyebrow">What we do</p><h2>Strategic services.<br /><em>Measurable growth.</em></h2><p>From first impression to lasting loyalty, we help ambitious brands build awareness, engage audiences, and generate meaningful business results.</p></div><div className="service-grid">{services.map(({ icon: Icon, title, description }) => <article className="service-card" key={title}><div className="service-icon"><Icon /></div><h3>{title}</h3><p>{description}</p><a href="#contact" aria-label={`Discuss ${title}`}>Discuss this service <ArrowRight /></a></article>)}</div></div></section>

    <section id="process" className="section soft-section"><div className="container"><div className="section-heading centered"><p className="eyebrow">How it works</p><h2>A clear process.<br /><em>From strategy to scale.</em></h2></div><div className="process-grid">{process.map(([number, title, description], index) => <article className="process-step" key={number}><div className="step-number">{number}</div>{index < process.length - 1 && <div className="step-line" />}<h3>{title}</h3><p>{description}</p></article>)}</div></div></section>

    <section id="reviews" className="section"><div className="container"><div className="section-heading centered"><p className="eyebrow">Client perspective</p><h2>Trusted by ambitious brands.</h2></div><div className="testimonial-grid">{testimonials.map(([quote, name, role]) => <article className="testimonial card" key={name}><div className="stars" aria-label="Five out of five stars">★★★★★</div><blockquote>“{quote}”</blockquote><footer><strong>{name}</strong><span>{role}</span></footer></article>)}</div></div></section>

    <section id="faqs" className="section"><div className="container faq-wrap"><div className="section-heading"><p className="eyebrow">Good to know</p><h2>Frequently asked<br /><em>questions.</em></h2></div><div className="faq-list">{faqs.map(([question, answer], index) => <details key={question} open={index === 0}><summary>{question}<ChevronDown /></summary><p>{answer}</p></details>)}</div></div></section>

    <section id="contact" className="section contact-section"><div className="container contact-grid"><div><p className="eyebrow">Start a conversation</p><h2>Ready to scale<br /><em>your brand?</em></h2><p className="contact-lede">Fill out the form below and our strategy team will construct a tailored growth roadmap for your brand within 24 hours.</p><div className="contact-aside"><ShieldCheck /><span>Your information stays private and is only used to prepare your consultation.</span></div></div><form className="contact-form card" onSubmit={submitForm} noValidate>{[['name', 'Full Name', 'Jane Smith', 'text'], ['email', 'Business Email', 'jane@company.com', 'email'], ['company', 'Company / Brand Name', 'Your brand', 'text'], ['website', 'Website / Social Handle', '@yourbrand or website.com', 'text']].map(([name, label, placeholder, type]) => <label key={name} className={errors[name] ? 'has-error' : ''}>{label}{name !== 'website' && <span>*</span>}<input name={name} type={type} placeholder={placeholder} aria-invalid={!!errors[name]} />{errors[name] && <small>{errors[name]}</small>}</label>)}<label className={errors.message ? 'has-error' : ''}>Main Goal / Message <span>*</span><textarea name="message" placeholder="Tell us what you’re building and where you want to go next." rows={4} aria-invalid={!!errors.message} />{errors.message && <small>{errors.message}</small>}</label><button className="button button-full" type="submit">Send Application <ArrowRight /></button>{formMessage && <p className="form-note" role="status">{formMessage}</p>}<p className="privacy-note">By submitting, you agree to our <button type="button" onClick={() => setModal('privacy')}>Privacy Policy</button>.</p></form></div></section>

    <footer className="site-footer"><div className="container footer-grid"><div><a className="brand" href="#top"><BrandMark /><span>Nexora <strong>Elite</strong> Media</span></a><p>Nexora Elite Media is a premier full-service social media and creator marketing agency.</p><div className="socials"><a href="#contact" aria-label="Instagram">IG</a><a href="#contact" aria-label="LinkedIn">in</a><a href="#contact" aria-label="YouTube">YT</a></div></div><div><h4>Quick Links</h4>{['Features', 'Services', 'Process', 'Reviews', 'FAQs', 'Contact'].map(item => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}</div><div><h4>Services</h4>{services.slice(0, 3).map(service => <a key={service.title} href="#services">{service.title}</a>)}</div><div><h4>Visit us</h4><p>Nexora Elite Media<br />1001 S Main Street STE 500<br />Kalispell, MT 59901</p></div></div><div className="container footer-bottom"><span>© 2026 Nexora Elite Media. All rights reserved.</span><span><button onClick={() => setModal('terms')}>Terms of Service</button><button onClick={() => setModal('privacy')}>Privacy Policy</button></span></div></footer>
    {modal === 'privacy' && <Modal title="Privacy Policy" onClose={() => setModal(null)}><div className="policy-content"><p className="policy-updated">Last Updated: October 2026</p><p>We value your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage our influencer marketing services.</p><h3>1. Information We Collect</h3><ul><li><strong>Personal Data:</strong> We collect voluntarily submitted information such as your name, business email address, phone number, and company name when you fill out contact or inquiry forms.</li><li><strong>Derivative Data:</strong> Our servers automatically collect standard log data, such as your IP address, browser type, and pages visited.</li><li><strong>Influencer Data:</strong> If you apply to join our network as a creator, we may collect social media handles, audience demographics, and performance metrics.</li></ul><h3>2. How We Use Your Information</h3><p>We use the collected information to:</p><ul><li>Provide, operate, and maintain our Services.</li><li>Respond to your inquiries, comments, and support requests.</li><li>Match brands with relevant influencers.</li><li>Send administrative information and marketing communications, which you can opt out of at any time.</li></ul><h3>3. Sharing Your Information</h3><p>We do not sell your personal data. We may share information with trusted third-party service providers, such as hosting partners or analytics tools, who assist us in operating our business, or when required by law.</p><h3>4. Data Security</h3><p>We implement industry-standard security measures to protect your personal data. However, please note that no method of transmission over the internet is 100% secure.</p><h3>5. Your Rights</h3><p>Depending on your U.S. state of residence, including under the California Consumer Privacy Act (CCPA), you may have rights to access, delete, or correct your personal data. Contact us directly to exercise these rights.</p><h3>6. Contact Us</h3><p>If you have questions about this Privacy Policy, please contact us at:<br />Email: team@nexoraelitemedia.com<br />Address: 1001 S Main Street STE 500, Kalispell, MT 59901</p></div></Modal>}
    {modal === 'terms' && <Modal title="Terms of Service" onClose={() => setModal(null)}><p>Terms of service content has not been supplied. Add your organization&apos;s reviewed legal terms before publishing this website.</p></Modal>}
  </main>
}
