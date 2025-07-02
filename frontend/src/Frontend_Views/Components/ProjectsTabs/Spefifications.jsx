import React from "react";

const Spefifications = ({ specifications }) => {
  return (
    <>
      {specifications.map((spec, i) => (
        <div className="p-5 py-2" key={i}>
          <h6 className="text-dark fw-bold">{spec.title}</h6>
          <p>{spec.feature}</p>
        </div>
      ))}
    </>
  );
};

export default Spefifications;
