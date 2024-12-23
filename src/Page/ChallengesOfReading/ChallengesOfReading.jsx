import { div } from "motion/react-client";
import React from "react";

function ChallengesOfReading() {
  const challenges = [
    {
      challenge: "Finding time to read.",
      solution: "Set aside 15-20 minutes a day for reading.",
    },
    {
      challenge: "Feeling bored with long reading sessions.",
      solution: "Start with short stories or articles.",
    },
    {
      challenge: "Difficulty retaining information.",
      solution: "Use highlighters to mark key points.",
    },
    {
      challenge: "Struggling to maintain focus.",
      solution: "Read in a quiet, distraction-free space.",
    },
    {
      challenge: "Choosing the right book.",
      solution: "Read reviews and pick books that match your interests.",
    },
  ];

  return (
    <div className="my-16">
        <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-6">
        📘 Challenges and Solutions for Reading
      </h2>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        {challenges.map((item, index) => (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-blue-600">
              Challenge: {item.challenge}
            </h3>
            <p className="text-gray-700 mt-2">
              <span className="font-bold text-green-600">Solution: </span>
              {item.solution}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
}

export default ChallengesOfReading;
