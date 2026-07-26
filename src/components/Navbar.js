'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="navbar">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">R</span>
          Raham <span className="accent">Foundation</span>
        </Link>
        <nav className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/#about">
            About
          </Link>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
          <Link href="/volunteer" className={pathname === '/volunteer' ? 'active' : ''}>
            Become a Volunteer
          </Link>
          <Link href="/donate" className="btn btn-gold">
            Donate
          </Link>
        </nav>
      </div>
    </header>
  );
}
