import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="dot"></span> EST. 2014
            </span>
            <h1>
              Small acts.<em>Lasting change.</em>
            </h1>
            <p className="lede">
              Raham Foundation partners with underserved communities to build futures of dignity — through schools, health camps, relief and livelihood programs.
            </p>
            <div className="hero-ctas">
              <Link href="/donate" className="btn btn-gold">
                Donate now
              </Link>
              <Link href="/projects" className="btn btn-outline-light">
                Our work →
              </Link>
            </div>
          </div>
          <div className="hero-media">
            <img
              src="https://picsum.photos/seed/rahamplanting/900/700"
              alt="Volunteers planting a sapling together"
              loading="eager"
            />
            <div className="hero-stat-card">
              <div className="big">12,400+</div>
              <div className="label">Lives touched in 2025</div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- STATS SECTION ---------- */}
      <section className="stats">
        <div className="wrap stats-inner">
          <div className="stat">
            <div className="num">47</div>
            <div className="lbl">Villages served</div>
          </div>
          <div className="stat">
            <div className="num">9</div>
            <div className="lbl">Active programs</div>
          </div>
          <div className="stat">
            <div className="num">320</div>
            <div className="lbl">Volunteers</div>
          </div>
          <div className="stat">
            <div className="num">11 yrs</div>
            <div className="lbl">Of service</div>
          </div>
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about" id="about">
        <div className="wrap">
          <div className="about-top">
            <div>
              <span className="eyebrow">About us</span>
              <h2>Mercy is the beginning of every meaningful change.</h2>
            </div>
            <div className="about-copy">
              <p>
                Raham — meaning mercy — is at the heart of every project we deploy. We work alongside families and community leaders to solve problems from within, not from above. Every program is designed with the people it serves, measured by outcomes, and sustained by trust.
              </p>
              <p>
                From a single classroom in 2014, we now run schools, health camps, relief missions and livelihood centers across four states.
              </p>
            </div>
          </div>

          <div className="about-block">
            <h3>Our vision</h3>
            <div className="block-copy">
              <p>
                A world where no one is denied education, health or hope because of where they were born. We imagine communities that lead their own transformation — with tools, trust and time to grow.
              </p>
            </div>
          </div>

          <div className="about-block">
            <h3>Our values</h3>
            <div className="values-grid">
              <div className="value-card">
                <h4>Mercy</h4>
                <p>Every program begins with listening, not prescribing.</p>
              </div>
              <div className="value-card">
                <h4>Transparency</h4>
                <p>Public audits, open books, honest reporting.</p>
              </div>
              <div className="value-card">
                <h4>Dignity</h4>
                <p>We serve people, never label them beneficiaries.</p>
              </div>
              <div className="value-card">
                <h4>Endurance</h4>
                <p>We stay in places long after the news cameras leave.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOCUS AREAS SECTION ---------- */}
      <section className="focus" id="projects">
        <div className="wrap">
          <div className="focus-head">
            <div>
              <span className="eyebrow">Focus areas</span>
              <h2>What we do</h2>
            </div>
            <Link href="/projects" className="see-all">
              See all projects
            </Link>
          </div>
          <div className="focus-grid">
            <Link href="/projects" className="focus-card">
              <img
                src="https://picsum.photos/seed/rahameducation/700/500"
                alt="Children reading books in a rural classroom"
                loading="lazy"
              />
              <div className="focus-card-body">
                <h3>Education</h3>
                <p>Free schools, learning kits and scholarships for first-generation learners.</p>
              </div>
            </Link>
            <Link href="/projects" className="focus-card">
              <img
                src="https://picsum.photos/seed/rahamhealthcare/700/500"
                alt="Doctor examining a patient at a rural health camp"
                loading="lazy"
              />
              <div className="focus-card-body">
                <h3>Healthcare</h3>
                <p>Rural medical camps, maternal care and life-saving surgeries.</p>
              </div>
            </Link>
            <Link href="/projects" className="focus-card">
              <img
                src="https://picsum.photos/seed/rahamrelief/700/500"
                alt="Volunteers distributing water and supplies during a relief effort"
                loading="lazy"
              />
              <div className="focus-card-body">
                <h3>Relief</h3>
                <p>Rapid response with food, water and shelter during floods and crises.</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ---------- CTA SECTION ---------- */}
      <section className="cta-wrap" id="donate">
        <div className="wrap">
          <div className="cta">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <h2>Your kindness fuels our fieldwork.</h2>
              <p>
                ₹1,500 sponsors a child's education for a month. ₹5,000 funds a full rural health camp. Every rupee is accounted for.
              </p>
              <div className="cta-ctas">
                <Link href="/donate" className="btn btn-gold">
                  Donate
                </Link>
                <Link href="/contact" className="btn btn-outline-dark">
                  Partner with us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
