'use client';

import { useState } from 'react';

export default function DonateClient() {
  const [formData, setFormData] = useState({
    amount: '1500',
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [lastPledgedAmount, setLastPledgedAmount] = useState('1500');

  const presetAmounts = ['500', '1500', '5000', '15000'];

  const validate = () => {
    const tempErrors = {};
    const amtNum = parseFloat(formData.amount);

    if (isNaN(amtNum) || amtNum <= 0) {
      tempErrors.amount = 'Please enter a valid donation amount';
    }

    if (!formData.fullName.trim()) {
      tempErrors.fullName = 'Full name is required';
    }

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

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handlePillClick = (amount) => {
    setFormData((prev) => ({
      ...prev,
      amount: amount,
    }));
    if (errors.amount) {
      setErrors((prev) => ({ ...prev, amount: null }));
    }
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      amount: value,
    }));
    if (errors.amount) {
      setErrors((prev) => ({ ...prev, amount: null }));
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    const stateKey = id === 'full-name' ? 'fullName' : id;
    setFormData((prev) => ({
      ...prev,
      [stateKey]: value,
    }));
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
    setLastPledgedAmount(formData.amount);

    try {
      const res = await fetch('https://raham-form-worker.rahamfoundation.workers.dev', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ formType: 'donate', ...formData }),
      });
      if (!res.ok) throw new Error('Failed to send');
      setSuccess(true);
      setFormData({
        amount: '1500',
        fullName: '',
        email: '',
        phone: '',
        message: '',
      });
    } catch (err) {
      setErrors((prev) => ({ ...prev, submit: 'Something went wrong. Please try again or email us directly.' }));
    } finally {
      setSubmitting(false);
    }
  };

  const isPresetSelected = (preset) => {
    return formData.amount === preset;
  };

  const getCustomAmountValue = () => {
    // If current amount is one of the presets, the custom input should display that value.
    // If it's not a preset, display the custom value typed.
    return formData.amount;
  };

  return (
    <>
      {/* ---------- PAGE HERO ---------- */}
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow">Donate</span>
          <h1>Turn intention into impact.</h1>
          <p>
            Choose how you would like to give — we'll follow up personally with a receipt and updates on the work your gift supports.
          </p>
        </div>
      </section>

      {/* ---------- DONATE FORM + INFO ---------- */}
      <section className="donate-section">
        <div className="wrap donate-grid">
          {/* Pledge form panel */}
          {success ? (
            <div className="panel" style={{ textAlign: 'center', padding: '60px 44px' }}>
              <div style={{ fontSize: '48px', color: 'var(--gold)', marginBottom: '20px' }}>✓</div>
              <h2>Pledge Received!</h2>
              <p className="sub" style={{ marginTop: '10px' }}>
                Thank you for your generous pledge of PKR {Number(lastPledgedAmount).toLocaleString('en-PK')}. A member of our team will email you shortly with donation completion and payment details.
              </p>
              <button
                type="button"
                className="btn btn-gold"
                style={{ marginTop: '30px' }}
                onClick={() => setSuccess(false)}
              >
                Pledge another donation
              </button>
            </div>
          ) : (
            <form className="panel" onSubmit={handleSubmit} noValidate>
              <h2>Pledge a donation</h2>
              <p className="sub">Fill this form and our team will reach out with payment options that suit you.</p>

              <span className="field-label">Amount (PKR)</span>
              <div className="amount-row" id="amount-row">
                {presetAmounts.map((preset) => (
                  <button
                    key={preset}
                    type="button"
                    className={`amount-pill ${isPresetSelected(preset) ? 'is-selected' : ''}`}
                    onClick={() => handlePillClick(preset)}
                  >
                    PKR {Number(preset).toLocaleString('en-PK')}
                  </button>
                ))}
                {/* <input
                  type="number"
                  className="amount-custom"
                  id="amount-custom"
                  placeholder="Custom"
                  value={getCustomAmountValue()}
                  onChange={handleCustomAmountChange}
                  min="0"
                /> */}
              </div>
              {errors.amount && (
                <span style={{ color: '#c94a4a', fontSize: '12px', marginTop: '8px', display: 'block' }}>
                  {errors.amount}
                </span>
              )}

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

              <label className="field-label" htmlFor="message">
                Message (optional)
              </label>
              <textarea
                className="field-textarea"
                id="message"
                placeholder="Anything you'd like us to know"
                value={formData.message}
                onChange={handleChange}
              ></textarea>



              <button type="submit" className="btn btn-gold btn-block" disabled={submitting}>
                {submitting ? (
                  <>
                    <span className="submitting-loader"></span> Processing...
                  </>
                ) : (
                  'Pledge donation'
                )}
              </button>

              {errors.submit && (
                <span style={{ color: '#c94a4a', fontSize: '13px', marginTop: '10px', display: 'block' }}>
                  {errors.submit}
                </span>
              )}
            </form>
          )}

          {/* Side info stack */}
          <div className="side-stack">
            <div className="side-card dark">
              <h3>Direct bank transfer</h3>
              <div className="bank-row">
                <span className="lbl">Account name</span>
                <span className="val">Raham Foundation</span>
              </div>
              <div className="bank-row">
                <span className="lbl">Account no.</span>
                <span className="val">5041 2298 7761</span>
              </div>
              <div className="bank-row">
                <span className="lbl">IFSC</span>
                <span className="val">HDFC0001234</span>
              </div>
              <div className="bank-row">
                <span className="lbl">Bank</span>
                <span className="val">HDFC Bank, New Delhi</span>
              </div>
            </div>

            {/*
            <div className="side-card light">
              <h3>UPI</h3>
              <p className="upi-text">Scan any UPI app and pay to:</p>
              <span className="upi-id">rahamfoundation@hdfc</span>
            </div>
            */}

            {/*
            <div className="side-card light">
              <h3>Tax exemption</h3>
              <p className="tax-text">
                Raham Foundation is under sections 12A and 80G of the Income Tax Act. Receipts are issued within 7 days of contribution.
              </p>
            </div>
            */}
          </div>
        </div>
      </section>
    </>
  );
}
