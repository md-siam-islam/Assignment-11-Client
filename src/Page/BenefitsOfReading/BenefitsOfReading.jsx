import React from "react";

function BenefitsOfReading() {
  const benefits = [
   "Reduces stress and calms the mind.",
    "Increases knowledge and gives ideas about new subjects.",
    "Increases creativity and imagination.",
    "Improves language skills and vocabulary.",
    "Helps in proper use of time.",
  ];

  return (

    <div className="my-16">

    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">📖 Benefits of reading books</h2>
      <ul className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {benefits.map((benefit, index) => (
          <li
            key={index}
            className="text-lg text-gray-700 flex items-center gap-3 mb-4"
          >
            <span className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
              {index + 1}
            </span>
            {benefit}
          </li>
        ))}
      </ul>
    </section>
    </div>
  );
}

export default BenefitsOfReading;
