'use client';

import { useState } from 'react';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    reason: 'General inquiry',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const tempErrors = {};
    if (!formData.fullName.trim()) tempErrors.fullName = 'Full name is required';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{8,15}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) tempErrors.message = 'Message is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map HTML IDs (kebab-case) to camelCase state keys
    const stateKey = id === 'full-name' ? 'fullName' : id;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
    // Clear error for this field
    if (errors[stateKey]) {
      setErrors((prev) => ({
        ...prev,
        [stateKey]: null,
      }));
    }
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  if (!validate()) return;

  setSubmitting(true);
  try {
    const res = await fetch('https://raham-form-worker.rahamfoundation.workers.dev', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formType: 'contact', ...formData }),
    });
    if (!res.ok) throw new Error('Failed to send');
    setSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      reason: 'General inquiry',
      message: '',
    });
  } catch (err) {
    setErrors((prev) => ({ ...prev, submit: 'Something went wrong. Please try again or email us directly.' }));
  } finally {
    setSubmitting(false);
  }
};

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Contact</span>
          <h1>Let's start a conversation.</h1>
          <p>
            Whether you're looking to donate, volunteer, partner with us, or just learn more about our work — reach out and a member of our team will get back to you personally.
          </p>
        </div>
      </section>

      {/* ---------- CONTACT FORM + INFO ---------- */}
      <section className="contact-section">
        <div className="wrap contact-grid">
          {/* Contact form panel */}
          {success ? (
            <div className="panel" style={{ textAlign: 'center', padding: '60px 44px' }}>
              <div style={{ fontSize: '48px', color: 'var(--gold)', marginBottom: '20px' }}>✓</div>
              <h2>Message Sent!</h2>
              <p className="sub" style={{ marginTop: '10px' }}>
                Thank you for reaching out. A member of our team will get back to you within two business days.
              </p>
              <button
                type="button"
                className="btn btn-gold"
                style={{ marginTop: '30px' }}
                onClick={() => setSuccess(false)}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form className="panel" onSubmit={handleSubmit} noValidate>
              <h2>Send us a message</h2>
              <p className="sub">Fill this form and our team will get back to you within two business days.</p>

              <div className="field-row">
                <div>
                  <label className="field-label" htmlFor="full-name">
                    Full name
                  </label>
                  <input
                    type="text"
                    className="field-input"
                    id="full-name"
                    placeholder="Your full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                  {errors.fullName && (
                    <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                      {errors.fullName}
                    </span>
                  )}
                </div>
                <div>
                  <label className="field-label" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    className="field-input"
                    id="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                      {errors.email}
                    </span>
                  )}
                </div>
              </div>

              <div className="field-row">
                <div>
                  <label className="field-label" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="field-input"
                    id="phone"
                    placeholder="+91 00000 00000"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                      {errors.phone}
                    </span>
                  )}
                </div>
                <div>
                  <label className="field-label" htmlFor="reason">
                    I'm reaching out about
                  </label>
                  <select
                    className="field-select"
                    id="reason"
                    value={formData.reason}
                    onChange={handleChange}
                  >
                    <option>General inquiry</option>
                    <option>Making a donation</option>
                    <option>Becoming a volunteer</option>
                    <option>Partnering with Raham Foundation</option>
                    <option>Media &amp; press</option>
                  </select>
                </div>
              </div>

              <label className="field-label" htmlFor="message">
                Message
              </label>
              <textarea
                className="field-textarea"
                id="message"
                placeholder="Tell us a little about what you're looking for"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                  {errors.message}
                </span>
              )}

              <button type="submit" className="btn btn-gold btn-block" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="submitting-loader"></span> Sending...
                  </>
                ) : (
                  'Send message'
                )}
              </button>
            </form>
          )}

          {/* Side info stack */}
          <div className="side-stack">
            <div className="side-card dark">
              <h3>Reach us</h3>
              <div className="reach-row">
                <div className="reach-icon">✉</div>
                <div>
                  <div className="lbl">Email</div>
                  <a className="val" href="mailto:hello@rahamfoundation.org">
                    hello@rahamfoundation.org
                  </a>
                </div>
              </div>
              <div className="reach-row">
                <div className="reach-icon">☎</div>
                <div>
                  <div className="lbl">Phone</div>
                  <a className="val" href="tel:+919876543210">
                    +91 98765 43210
                  </a>
                </div>
              </div>
              <div className="reach-row">
                <div className="reach-icon">⚲</div>
                <div>
                  <div className="lbl">Address</div>
                  <span className="val">Pakistan</span>
                </div>
              </div>
            </div>

            <div className="side-card light">
              <h3>Office hours</h3>
              <div className="hours-row">
                <span>Monday – Friday</span>
                <span>9:30 AM – 6:30 PM</span>
              </div>
              <div className="hours-row">
                <span>Saturday</span>
                <span>10:00 AM – 2:00 PM</span>
              </div>
              <div className="hours-row">
                <span>Sunday</span>
                <span>Closed</span>
              </div>
            </div>

            <div className="side-card light">
              <h3>Prefer to volunteer?</h3>
              <p className="hours-text">
                Select "Becoming a volunteer" in the form and tell us your city and skills — our team places volunteers in active programs near them each month.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
