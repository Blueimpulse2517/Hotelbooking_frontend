import React from 'react';
import './PricingCard.css';

function PricingCard({
  tag, offer, title, description, price, subtext,
  linkText, buttonText, buttonSecondary, extraButton,
}) {
  return (
    <div className="pricing-card">
      <div className="card-top">
        <div className="tag">{tag}</div>
        {offer && <div className="offer">{offer}</div>}
        <div className="crown">👑</div>
      </div>
      <h2>{title}</h2>
      <p className="desc">{description}</p>
      <h3 className="price">{price}</h3>
      <p className="subtext">{subtext}</p>
      {linkText && <p className="link-text">{linkText}</p>}
      <button className={`btn ${buttonSecondary ? 'btn-outline' : 'btn-primary'}`}>
        {buttonText}
      </button>
      {extraButton && (
        <button className="btn btn-link">{extraButton}</button>
      )}
    </div>
  );
}


export default PricingCard;
