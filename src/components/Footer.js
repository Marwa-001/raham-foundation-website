import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <span className="brand-mark">R</span>
              Raham Foundation
            </Link>
            <p className="footer-desc">
              Our non-profit organization restores dignity by equipping people with skills, creating livelihoods, and enabling them to earn with independence and respect.
            </p>
          </div>
          <div className="footer-col">
            <h5>Explore</h5>
            <ul>
              <li>
                <Link href="/#about">About Us</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/donate">Donate</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/volunteer">Become a Volunteer</Link>
              </li>
            </ul>
          </div>
          <div className="footer-col">
            <h5>Reach us</h5>
            <ul>
              <li>
                <a href="mailto:hello@rahamfoundation.org">hello@rahamfoundation.org</a>
              </li>
              {/*
              <li>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </li>*/
              <li>
                <Link href="/">Pakistan</Link>
              </li>
              }
            </ul>
          </div>
        </div>
        <div className="wrap footer-bottom" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <span>© 2026 Raham Foundation. All rights reserved.</span>
          <span>At Raham Foundation, building dignity through opportunity, not pity.</span>
        </div>
      </div>
    </footer>
  );
}
