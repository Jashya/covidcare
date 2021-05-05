import React from "react";

type verificationData = {
  time: string;
  date: string;
};

interface Props {
  contact: string;
  type: string;
  // place or city? city name oonly ok verified ka date and time bhi lena hoga ohhhk
  city: string;
  verified?: verificationData;
  resource: string;
}

export default function Card({
  contact,
  type,
  city,
  verified,
  resource,
}: Props) {
  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "15px",
      }}
    >
      <div className="card-body">
        {verified ? (
          <span className="badge bg-success">
            Verified at {verified.time} {verified.date}
          </span>
        ) : (
          <span className="badge bg-danger">Not Verified</span>
        )}
        <span className="badge bg-dark">{city}</span>
        <strong>
          <p className="card-text">{resource}</p>
        </strong>
        <a href={`tel:${contact}`} className="btn btn-primary">
          <i className="fas fa-phone-alt"></i> {contact}
        </a>
      </div>
    </div>
  );
}
