import React, { useState } from 'react';

const plans = [
  {
    tag: "For one person",
    title: "Free Consultation",
    description: "Please select the date. We will get back to you.",
    price: null,
    buttonText: "Get ITWALKIN Free Package",
    showDate: true,
  },
  {
    tag: "For one person",
    title: "Paid Consultation",
    description: "Expert Review after 7 days.",
    price: "₹10,000",
    buttonText: "Get ITWALKIN Package",
    showDate: true,
  },
  {
    tag: "For one person",
    title: "Rootcause Analysis and Fix",
    description: "Two weeks after receiving your resume , we dive deep and see what's holding you back.",
    price: "INR 20000",
    buttonText: "Get ITWALKIN Package",
    showDate: true,
  },
];

function CanvaStylePricing() {
  const [selectedDates, setSelectedDates] = useState({});

  const handleDateChange = (index, date) => {
    setSelectedDates(prev => ({
      ...prev,
      [index]: date,
    }));
  };

  const handlePrimaryAction = (index) => {
    const plan = plans[index];
    const date = selectedDates[index];
    if (plan.showDate && !date) {
      alert("Please select a date before proceeding.");
      return;
    }
    alert(`You selected "${plan.title}"${date ? ` for ${date}` : ""}`);
  };

  return (
    <div style={{ display: 'flex', gap: '30px', justifyContent: 'center', padding: '40px', flexWrap: 'wrap' }}>
      {plans.map((plan, index) => (
        <div
          key={index}
          style={{
            backgroundColor: '#fdefff',
            borderRadius: '16px',
            width: '300px',
            padding: '24px',
            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.05)',
            position: 'relative',
            textAlign: 'center',
          }}
        >
          <div style={{ position: 'absolute', top: '12px', right: '12px' }}>👑</div>
          <div style={{ backgroundColor: '#d9f3ff', padding: '4px 12px', borderRadius: '12px', display: 'inline-block', fontSize: '13px', marginBottom: '12px' }}>
            {plan.tag}
          </div>
          {plan.badge && (
            <div style={{ backgroundColor: '#ffdde1', padding: '4px 8px', borderRadius: '12px', fontSize: '12px', display: 'inline-block', marginLeft: '8px', color: '#c00' }}>
              {plan.badge}
            </div>
          )}
          <h3 style={{ margin: '12px 0' }}>{plan.title}</h3>
          <p style={{ fontSize: '14px', color: '#555' }}>{plan.description}</p>

          {plan.price && (
            <>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginTop: '8px' }}>{plan.price}</div>
              <div style={{ fontSize: '13px', color: '#777' }}>{plan.priceNote}</div>
            </>
          )}

          {plan.showDate && (
            <input
              type="date"
              value={selectedDates[index] || ''}
              onChange={(e) => handleDateChange(index, e.target.value)}
              style={{
                marginTop: '12px',
                padding: '8px',
                width: '100%',
                borderRadius: '8px',
                border: '1px solid #ccc',
                fontSize: '14px',
              }}
            />
          )}

          <button
            onClick={() => handlePrimaryAction(index)}
            style={{
              marginTop: '16px',
              width: '100%',
              backgroundColor: plan.buttonSecondary ? '#fff' : '#8e4cf1',
              color: plan.buttonSecondary ? '#8e4cf1' : '#fff',
              border: `2px solid #8e4cf1`,
              borderRadius: '8px',
              padding: '10px',
              fontWeight: 'bold',
              cursor: 'pointer',
            }}
          >
            {plan.buttonText}
          </button>

          {plan.secondaryLink && (
            <div style={{ marginTop: '10px' }}>
              <a href="#" style={{ color: '#8e4cf1', fontSize: '14px', textDecoration: 'underline' }}>
                {plan.secondaryLink}
              </a>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default CanvaStylePricing;
