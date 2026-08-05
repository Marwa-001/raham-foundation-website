import Link from 'next/link';

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link href="/" className="footer-brand">
              <span className="brand-mark"><img src="/logo.png" alt="logo" /></span>
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
                <a href="mailto:rahamfoundation.org@gmail.com">rahamfoundation.org@gmail.com</a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/reel/DbYl96fM11K/?igsh=YXgyeDA0cnczb3ow"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram
                </a>
              </li>
                <a
                  href="https://www.linkedin.com/company/rahamfoundation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
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
