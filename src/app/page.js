import Link from 'next/link';

export default function Home() {
  return (
    <>
      {/* ---------- HERO SECTION ---------- */}
      <section className="hero">
        <div className="wrap hero-inner">
          <div className="hero-copy">
            <span className="hero-badge">
              <span className="dot"></span> EST. 2026
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
        </div>
      </section>

      {/* ---------- ABOUT SECTION ---------- */}
      <section className="about" id="about">
        <div className="wrap">
          <span className="eyebrow">About us</span>
          <h2 className="about-heading">Sympathy doesn't feed families. So we're stopping the pity and taking action.

          </h2>
          <p className="about-intro">
            Raham Foundation is a non-profit initiative built on one belief: people don’t need pity; they need the opportunity to earn with dignity. Our mission is to uplift vulnerable individuals and families. Born from a discussion among university students, we are now dedicated to building sustainable earning opportunities for underserved communities.

            Distributing water and food may offer temporary relief, but it cannot end the cycle of poverty. According to Pakistan’s Labor Force Survey (2024-25), 5.9 million people are without work, and unemployment has climbed to 7.1%. The World Bank reports the national poverty rate has risen to 25.3%. Behind these numbers are real families struggling to survive.

            Every family we help stands as proof that change is built through action, not sympathy. This is only the beginning of what we hope to build.

          </p>

          <p className="about-quote">
            “The best of people are those who are most beneficial to others.” — Prophet Muhammad ﷺ
          </p>

          <div className="vision-panel">
            <div className="vision-bg">
              <div className="vision-glow"></div>
            </div>
            <div className="vision-content">
              <span className="eyebrow eyebrow-light">Our vision</span>
              <h3>A world where no one is denied education, health or&nbsp;hope.</h3>
              <p>
                We envision a society where poverty is met with opportunity instead of pity-opportunities that create livelihoods and restore the dignity of individuals.
                Empowering one person means empowering one family. When a family thrives, the entire community flourishes. Raham Foundation aspires to become the voice and the helping hand for those who are often overlooked.
              </p>
            </div>
          </div>

          <div className="values-section">
            <span className="eyebrow">Our values</span>
            <div className="values-grid">
              <div className="value-card">
                <h4>Compassion</h4>
                <p>“The merciful are shown mercy by the Most Merciful. Show mercy to those on the earth, and the One above the heavens will show mercy to you.”</p>
                <p className="value-cite">- Prophet Muhammad ﷺ (Jami’ at-Tirmidhi, Hadith 1924)</p>
              </div>
              <div className="value-card">
                <h4>Empowerment</h4>
                <p>The Messenger of Allah ﷺ said, “Whoever relieves a believer’s hardship in this world, Allah will relieve his hardship on the Day of Resurrection. Whoever helps ease one in difficulty, Allah will make it easy for him in this world and the Hereafter.”</p>
                <p className="value-cite">- Sahih Muslim 2699</p>
              </div>
              <div className="value-card">
                <h4>Sustainability</h4>
                <p>“Whatever good you send forth for yourselves, you will (certainly) find (its reward) with Allah. Surely Allah is All-Seeing of what you do.”</p>
                <p className="value-cite">- Surah Al Baqarah, Ayah 110</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOCUS AREAS SECTION ---------- */}
      {/* <section className="focus" id="projects">
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
      </section> */}

      {/* ---------- CTA SECTION ---------- */}
      <section className="cta-wrap kindness-cta" id="donate">
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
