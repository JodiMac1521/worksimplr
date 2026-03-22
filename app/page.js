export default function Home() {
  const categories = [
    { emoji: '🍽️', name: 'Food & Beverage', count: '240+ jobs' },
    { emoji: '💻', name: 'Information Technology', count: '180+ jobs' },
    { emoji: '📣', name: 'Marketing', count: '150+ jobs' },
    { emoji: '⚖️', name: 'Legal', count: '60+ jobs' },
    { emoji: '🎨', name: 'Creative & Art', count: '90+ jobs' },
    { emoji: '👔', name: 'Business Services', count: '200+ jobs' },
    { emoji: '📸', name: 'Video & Photography', count: '110+ jobs' },
    { emoji: '👗', name: 'Fashion', count: '75+ jobs' },
  ];

  const marqueeItems = [
    'Food & Beverage', 'Legal', 'Marketing', 'IT & Dev',
    'Fashion', 'Business', 'Photography', 'Audio',
    'Food & Beverage', 'Legal', 'Marketing', 'IT & Dev',
    'Fashion', 'Business', 'Photography', 'Audio',
  ];

  return (
    <>
      {/* NAV */}
      <nav className="nav">
        <div className="container nav__inner">
          <a href="/" className="nav__logo">
            Work<span>Simplr</span>
          </a>
          <ul className="nav__links">
            <li><a href="#how-it-works">How it works</a></li>
            <li><a href="#categories">Browse jobs</a></li>
            <li><a href="#for-who">For employers</a></li>
          </ul>
          <div className="nav__cta">
            <a href="/login" className="btn btn-ghost">Log in</a>
            <a href="/register" className="btn btn-primary">Get started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div>
            <div className="hero__eyebrow fade-up">
              <span className="hero__eyebrow-dot" />
              UK's Gig Economy Marketplace
            </div>
            <h1 className="hero__title fade-up fade-up-d1">
              Find great work.<br />
              Get work <em>done right</em>.
            </h1>
            <p className="hero__sub fade-up fade-up-d2">
              Work Simplr connects skilled professionals with businesses who need flexible talent — from a single shift to a six-week contract. Fast, verified, and fair.
            </p>
            <div className="hero__actions fade-up fade-up-d3">
              <a href="/register?type=worker" className="btn btn-primary btn-lg">
                Find work →
              </a>
              <a href="/register?type=employer" className="btn btn-ghost btn-lg">
                Post a job
              </a>
            </div>
            <div className="hero__stats fade-up fade-up-d4">
              <div>
                <div className="hero__stat-number">10k+</div>
                <div className="hero__stat-label">Registered workers</div>
              </div>
              <div>
                <div className="hero__stat-number">2,400</div>
                <div className="hero__stat-label">Jobs completed</div>
              </div>
              <div>
                <div className="hero__stat-number">11</div>
                <div className="hero__stat-label">Industry sectors</div>
              </div>
            </div>
          </div>

          {/* Floating job card visual */}
          <div className="hero__visual fade-up fade-up-d2">
            <div className="hero__card-stack">
              <div className="job-card job-card--back">
                <div className="job-card__tag">📸 Photography</div>
                <div className="job-card__title">Event Photographer</div>
                <div className="job-card__meta">📍 Manchester · On-site</div>
              </div>
              <div className="job-card job-card--main">
                <div className="job-card__tag">🍽️ Food & Beverage</div>
                <div className="job-card__title">Head Bartender — Private Event</div>
                <div className="job-card__meta">📍 London, EC1 · Single day</div>
                <div className="job-card__rate">
                  £18<span>/ hour · Up to £144/day</span>
                </div>
                <div className="job-card__footer">
                  <div className="job-card__avatars">
                    <div className="avatar av1">JK</div>
                    <div className="avatar av2">ML</div>
                    <div className="avatar av3">SR</div>
                  </div>
                  <div className="job-card__applicants">12 applicants</div>
                </div>
              </div>
              <div className="badge-float badge-float--tl">
                <div className="badge-float__icon bg-green">✅</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--ink)' }}>Identity Verified</div>
                  <div style={{ color: 'var(--slate)', fontSize: '0.72rem' }}>Score 130 / 115 min</div>
                </div>
              </div>
              <div className="badge-float badge-float--br">
                <div className="badge-float__icon bg-orange">💰</div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.82rem', color: 'var(--ink)' }}>Payout sent</div>
                  <div style={{ color: 'var(--slate)', fontSize: '0.72rem' }}>£144 · 2h ago</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {marqueeItems.map((item, i) => (
            <span key={i} className="marquee-item">
              <span className="marquee-item-dot" />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* HOW IT WORKS */}
      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section__head section__head--center">
            <div className="section__label">How it works</div>
            <h2 className="section__title">Simple for workers.<br />Simple for employers.</h2>
            <p className="section__sub">
              From first click to final payout — the whole process is built to be fast and friction-free.
            </p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step__number">01</div>
              <span className="step__icon">🔐</span>
              <div className="step__title">Verify your identity</div>
              <p className="step__desc">
                Build your trust score through phone verification, address matching, and document upload. A verified profile unlocks every feature on the platform.
              </p>
              <div className="step__connector">→</div>
            </div>
            <div className="step">
              <div className="step__number">02</div>
              <span className="step__icon">🎯</span>
              <div className="step__title">Discover & apply</div>
              <p className="step__desc">
                Browse jobs filtered by category, location radius, contract length, and pay rate. Apply in seconds — employers can shortlist and accept directly from their dashboard.
              </p>
              <div className="step__connector">→</div>
            </div>
            <div className="step">
              <div className="step__number">03</div>
              <span className="step__icon">💸</span>
              <div className="step__title">Complete & get paid</div>
              <p className="step__desc">
                Once the work is done, payment is released automatically. Hourly, daily, or project rates — all tracked transparently and paid directly to your bank.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="section section--mist" id="categories">
        <div className="container">
          <div className="section__head">
            <div className="section__label">Browse by category</div>
            <h2 className="section__title">Every sector. One platform.</h2>
            <p className="section__sub">
              From a single-day chef to a six-week developer contract — Work Simplr covers the full range of professional and skilled work.
            </p>
          </div>
          <div className="categories">
            {categories.map((cat) => (
              <div className="category-card" key={cat.name}>
                <div className="category-card__emoji">{cat.emoji}</div>
                <div className="category-card__name">{cat.name}</div>
                <div className="category-card__count">{cat.count}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOR WHO */}
      <section className="section" id="for-who">
        <div className="container">
          <div className="section__head section__head--center">
            <div className="section__label">Built for both sides</div>
            <h2 className="section__title">Whether you work or hire — <br />we've got you covered.</h2>
          </div>
          <div className="for-who">
            <div className="for-card for-card--worker">
              <div className="for-card__bg-text">WORK</div>
              <div className="for-card__label">For Workers</div>
              <h3 className="for-card__title">Your skills.<br />Your terms.</h3>
              <p className="for-card__desc">
                Pick the shifts that fit your life. Build a verified profile that stands out and get paid quickly for every job you complete.
              </p>
              <ul className="for-card__list">
                <li>Browse hundreds of live opportunities</li>
                <li>Set your skill set and preferred radius</li>
                <li>Chat directly with employers</li>
                <li>Fast, transparent payouts to your bank</li>
              </ul>
              <a href="/register?type=worker" className="btn btn-white">
                Join as a worker →
              </a>
            </div>
            <div className="for-card for-card--employer">
              <div className="for-card__bg-text">HIRE</div>
              <div className="for-card__label">For Employers</div>
              <h3 className="for-card__title">Hire fast.<br />Hire right.</h3>
              <p className="for-card__desc">
                Post a job in minutes and receive applications from pre-verified professionals. Shortlist, accept, and manage everything from one dashboard.
              </p>
              <ul className="for-card__list">
                <li>Flexible contract types — from a day to 6 weeks</li>
                <li>All applicants are identity-verified</li>
                <li>Shortlist and accept with one click</li>
                <li>Integrated Stripe payments — no invoices</li>
              </ul>
              <a href="/register?type=employer" className="btn btn-white">
                Post your first job →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="section section--mist">
        <div className="container">
          <div className="section__head section__head--center">
            <div className="section__label">Built on trust</div>
            <h2 className="section__title">Safety isn't a feature.<br />It's the foundation.</h2>
          </div>
          <div className="trust-grid">
            <div className="trust-card">
              <div className="trust-card__icon">🔒</div>
              <div className="trust-card__title">Identity Verification</div>
              <p className="trust-card__desc">
                Every worker builds a trust score through address matching, document upload, phone and email confirmation. You know exactly who you're hiring.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">💳</div>
              <div className="trust-card__title">Stripe-Powered Payments</div>
              <p className="trust-card__desc">
                All payments are processed through Stripe. Workers get paid to their verified bank account. Employers only pay when work is complete.
              </p>
            </div>
            <div className="trust-card">
              <div className="trust-card__icon">📋</div>
              <div className="trust-card__title">Clear Contracts</div>
              <p className="trust-card__desc">
                Every engagement has defined terms — rate type, timing, location, and scope — agreed before work starts. No surprises for either side.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner">
            <h2 className="cta-banner__title">Ready to make gig working Simplr?</h2>
            <p className="cta-banner__sub">
              Join thousands of workers and employers already on the platform.
            </p>
            <div className="cta-banner__actions">
              <a href="/register?type=worker" className="btn btn-white btn-lg">
                Find work →
              </a>
              <a href="/register?type=employer" className="btn btn-lg" style={{ background: 'rgba(255,255,255,0.12)', color: 'white', border: '1.5px solid rgba(255,255,255,0.25)' }}>
                Post a job
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <div className="footer__inner">
            <div>
              <div className="footer__brand-name">Work<span>Simplr</span></div>
              <p className="footer__brand-desc">
                The centralised gateway into the gig working and freelance economy across the UK.
              </p>
            </div>
            <div>
              <div className="footer__col-title">Platform</div>
              <ul className="footer__links">
                <li><a href="/jobs">Browse jobs</a></li>
                <li><a href="/register?type=worker">Join as worker</a></li>
                <li><a href="/register?type=employer">Post a job</a></li>
                <li><a href="/login">Log in</a></li>
              </ul>
            </div>
            <div>
              <div className="footer__col-title">Company</div>
              <ul className="footer__links">
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div>
              <div className="footer__col-title">Legal</div>
              <ul className="footer__links">
                <li><a href="/privacy">Privacy policy</a></li>
                <li><a href="/terms">Terms of service</a></li>
                <li><a href="/cookies">Cookie policy</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__bottom">
            <span>© {new Date().getFullYear()} Work Simplr Ltd. All rights reserved.</span>
            <div className="footer__bottom-links">
              <a href="https://twitter.com/worksimplr">Twitter</a>
              <a href="https://linkedin.com/company/worksimplr">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
