'use client';

import { useState } from 'react';

export default function VolunteerClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
    areaOfInterest: 'Education',
    availability: '2-4 hours',
    skills: '',
    motivation: '',
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

    if (!formData.city.trim()) tempErrors.city = 'City/Location is required';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    // Map HTML IDs (kebab-case) to camelCase state keys
    const stateKey = 
      id === 'full-name' ? 'fullName' : 
      id === 'area-interest' ? 'areaOfInterest' : 
      id;

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
      body: JSON.stringify({ formType: 'volunteer', ...formData }),
    });
    if (!res.ok) throw new Error('Failed to send');
    setSuccess(true);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: '',
      areaOfInterest: 'Education',
      availability: '2-4 hours',
      skills: '',
      motivation: '',
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
          <span className="eyebrow">Join Us</span>
          <h1>Become a Volunteer.</h1>
          <p>
            Make a real difference in rural communities. We are always looking for passionate volunteers to support our schools, health camps, relief efforts, and skill-training programs.
          </p>
        </div>
      </section>

      {/* ---------- VOLUNTEER FORM + INFO ---------- */}
      <section className="contact-section">
        <div className="wrap contact-grid">
          {/* Volunteer form panel */}
          {success ? (
            <div className="panel" style={{ textAlign: 'center', padding: '60px 44px' }}>
              <div style={{ fontSize: '48px', color: 'var(--gold)', marginBottom: '20px' }}>✓</div>
              <h2>Application Received!</h2>
              <p className="sub" style={{ marginTop: '10px' }}>
                Thank you for applying to volunteer. A member of our local coordinator team will review your application and contact you in the next few days.
              </p>
              <button
                type="button"
                className="btn btn-gold"
                style={{ marginTop: '30px' }}
                onClick={() => setSuccess(false)}
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form className="panel" onSubmit={handleSubmit} noValidate>
              <h2>Volunteer Application</h2>
              <p className="sub">Fill this form to apply for active field programs or administrative support roles.</p>

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
                    placeholder="+92 300 1234567"
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
                  <label className="field-label" htmlFor="city">
                    City / Location
                  </label>
                  <input
                    type="text"
                    className="field-input"
                    id="city"
                    placeholder="e.g. Islamabad, Karachi, Lahore"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '4px', display: 'block' }}>
                      {errors.city}
                    </span>
                  )}
                </div>
              </div>

              <div className="field-row">
                <div>
                  <label className="field-label" htmlFor="area-interest">
                    Primary Area of Interest
                  </label>
                  <select
                    className="field-select"
                    id="area-interest"
                    value={formData.areaOfInterest}
                    onChange={handleChange}
                  >
                    <option value="Education">Education (Teaching, schools support)</option>
                    <option value="Healthcare">Healthcare (Medical camps, audits)</option>
                    <option value="Relief">Relief (Crisis, disaster response)</option>
                    <option value="Livelihood">Livelihood (Skills training, computers)</option>
                    <option value="Admin">Administrative (Tech, media, writing)</option>
                  </select>
                </div>
                <div>
                  <label className="field-label" htmlFor="availability">
                    Weekly Availability
                  </label>
                  <select
                    className="field-select"
                    id="availability"
                    value={formData.availability}
                    onChange={handleChange}
                  >
                    <option value="2-4 hours">2-4 hours / week</option>
                    <option value="5-10 hours">5-10 hours / week</option>
                    <option value="10+ hours">10+ hours / week</option>
                    <option value="Weekends only">Weekends only</option>
                  </select>
                </div>
              </div>

              <label className="field-label" htmlFor="skills">
                Relevant Skills &amp; Experience
              </label>
              <textarea
                className="field-textarea"
                id="skills"
                placeholder="Tell us about your skills, profession, or previous volunteer work"
                value={formData.skills}
                onChange={handleChange}
              ></textarea>

              <label className="field-label" htmlFor="motivation">
                Why do you want to volunteer with us?
              </label>
              <textarea
                className="field-textarea"
                id="motivation"
                placeholder="Tell us what motivates you to join Raham Foundation"
                value={formData.motivation}
                onChange={handleChange}
              ></textarea>

              <button type="submit" className="btn btn-gold btn-block" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="submitting-loader"></span> Submitting...
                  </>
                ) : (
                  'Apply to Volunteer'
                )}
              </button>

              {errors.submit && (
  <span style={{ color: '#c94a4a', fontSize: '13px', marginTop: '10px', display: 'block' }}>
    {errors.submit}
  </span>
)}
            </form>
          )}

          {/* Side stack */}
          <div className="side-stack">
            <div className="side-card dark">
              <h3>Why volunteer with us?</h3>
              <div className="reach-row">
                <div className="reach-icon">✓</div>
                <div>
                  <div className="lbl">Impact</div>
                  <span className="val" style={{ fontWeight: 'normal', fontSize: '13.5px', color: '#cfe0d6' }}>
                    Work directly with families to create real, measurable changes in their daily lives.
                  </span>
                </div>
              </div>
              <div className="reach-row">
                <div className="reach-icon">✓</div>
                <div>
                  <div className="lbl">Experience</div>
                  <span className="val" style={{ fontWeight: 'normal', fontSize: '13.5px', color: '#cfe0d6' }}>
                    Gain hands-on experience in community organizing, field audits, and teaching.
                  </span>
                </div>
              </div>
              <div className="reach-row">
                <div className="reach-icon">✓</div>
                <div>
                  <div className="lbl">Recognition</div>
                  <span className="val" style={{ fontWeight: 'normal', fontSize: '13.5px', color: '#cfe0d6' }}>
                    Receive a certificate of appreciation and a reference letter upon completing 30+ hours of service.
                  </span>
                </div>
              </div>
            </div>
          {/*
            <div className="side-card light">
              <h3>Active regions</h3>
              <div className="hours-row">
                <span>Uttar Pradesh &amp; Bihar</span>
                <span>Active</span>
              </div>
              <div className="hours-row">
                <span>Rajasthan &amp; MP</span>
                <span>Active</span>
              </div>
              <div className="hours-row">
                <span>Jharkhand</span>
                <span>Active</span>
              </div>
              <div className="hours-row">
                <span>Assam (Relief Only)</span>
                <span>On-Call</span>
              </div>
            </div>
            */}
            <div className="side-card light">
              <h3>Frequently Asked Questions</h3>
              <p className="hours-text" style={{ fontSize: '13px', lineHeight: '1.6' }}>
                <strong>Is there a minimum commitment?</strong><br />
                We prefer a commitment of at least 3 months, for 2-4 hours per week, to ensure continuity in our student schools and clinics.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
