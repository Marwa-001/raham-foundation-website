'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="navbar">
      <div className="wrap nav-inner">
        <Link href="/" className="brand">
          <span className="brand-mark">
            <img src="/logo.png" alt="logo" />
          </span>
          Raham <span className="accent">Foundation</span>
        </Link>

        {/* Desktop links */}
        <nav className="nav-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/#about">About</Link>
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

        {/* Mobile-only controls */}
        <div className="nav-mobile-controls">
          <Link href="/donate" className="btn btn-gold btn-sm">
            Donate
          </Link>
          <button
            className={`hamburger ${menuOpen ? 'is-open' : ''}`}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu ${menuOpen ? 'is-open' : ''}`}>
        <button
          className="mobile-menu-close"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>
        <nav className="mobile-menu-links">
          <Link href="/" className={pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link href="/#about">About</Link>
          <Link href="/projects" className={pathname === '/projects' ? 'active' : ''}>
            Projects
          </Link>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </Link>
          <Link href="/volunteer" className={pathname === '/volunteer' ? 'active' : ''}>
            Become a Volunteer
          </Link>
        </nav>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="mobile-menu-backdrop" onClick={() => setMenuOpen(false)}></div>
      )}
    </header>
  );
}