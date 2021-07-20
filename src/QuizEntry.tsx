import React, { useState, Suspense } from "react";

// import Quiz from "./Quiz";
const Quiz = React.lazy(() => import("./Quiz"));

import { DataItem } from "utils";

const quizData: DataItem[] = [
  {
    id: 0,
    question: "How old are you?",
    answers: ["Under 20", "21-30", "31-45", "46-65", "66+"],
  },
  {
    id: 1,
    question: "Which term best describes your skin tone?",
    answers: [
      "Very fair",
      "Fair",
      "Medium",
      "Medium - Olive",
      "Dark",
      "Very dark",
    ],
  },
  {
    id: 2,
    question: "Which best describes your current environment?",
    answers: [
      "It's very dry",
      "It's very humid",
      "The weather isn't dry or humid - It's Quite Pleasant",
    ],
  },
  {
    id: 3,
    question: "What best describes your skin?",
    answers: [
      "My skin produces oil all over my face, or in my t-zone",
      "My skin produces oil all over my face, or in my t-zone; It may get tight or feel dry when harsh acne products are used",
      "My skin is neither very oily nor very dry",
      "My skin is pretty dry and doesn't really produce oil",
      "My skin is very dry and produces no oil",
    ],
  },
  {
    id: 4,
    question: "How often do you experience breakouts?",
    answers: ["Daily", "Weekly", "Monthly", "Rarely/Never"],
  },
];

const QuizEntry = () => {
  const [active, setActive] = useState(true);

  return (
    <section className="grid justify-center gap-4">
      <h1 className="text-center text-4xl">KNOW YOUR SKIN</h1>
      <p className="text-center text-lg">
        Ready to find the right skincare products?
      </p>
      <CallToActionButton setActive={setActive} />
      <Suspense fallback={<div />}>
        <Quiz quizData={quizData} active={active} setActive={setActive} />
      </Suspense>
    </section>
  );
};

interface BtnProps {
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const CallToActionButton: React.FC<BtnProps> = ({ setActive }) => (
  <button className="btn max-w-sm" onClick={() => setActive(true)}>
    Start the quiz
  </button>
);

export default QuizEntry;
