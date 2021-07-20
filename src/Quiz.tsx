import React, { useState } from "react";
import { useSpring, useTransition, useTrail, a, animated } from "react-spring";
// import QuizDataItem from "./QuizDataItem";
import BackgroundOverlay from "./BackgroundOverlay";
import QuizCard from "./QuizCard";
import { DataItem } from "./utils";

interface TrailProps {
  open: boolean;
  className: string;
}

const Trail: React.FC<TrailProps> = ({ open, className, children }) => {
  const items = React.Children.toArray(children);
  const trail = useTrail(items.length, {
    config: { mass: 3, tension: 2000, friction: 220 },
    opacity: open ? 1 : 0,
    y: open ? 0 : 20,
    border: open ? 3 : 0,
    from: { opacity: 0, y: 20, height: 0 },
  });
  return (
    <div className={className}>
      {trail.map(({ height, ...style }, index) => (
        <a.div key={index} style={style}>
          <a.div>{items[index]}</a.div>
        </a.div>
      ))}
    </div>
  );
};

interface QuizProps {
  quizData: DataItem[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Quiz: React.FC<QuizProps> = ({ quizData, active, setActive }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  let quizClassName = "quiz";
  if (active) {
    quizClassName += " quiz-active";
  }

  return (
    <div className={quizClassName}>
      <BackgroundOverlay onClick={() => setActive(false)} />
      <QuizCard>
        {quizData.map((dataItem) => {
          let wrapperClassName =
            "w-full h-full absolute top-0 left-1/2 transform -translate-x-1/2 max-w-prose px-6 md:px-0";
          let gridClassName = "grid gap-2 grid-cols-2 md:grid-cols-3 mt-10";
          let btnClassName = "btn";

          let trailAnimation = false;

          const tooManyCharacters = (text: string) => text.length > 18;
          if (dataItem.answers.some(tooManyCharacters)) {
            gridClassName = "grid gap-2 grid-cols-1 mt-6";
            btnClassName += " text-left max-w-prose";
          }

          if (dataItem.id !== currentQuestion) {
            wrapperClassName += " hidden";
          } else trailAnimation = true;

          return (
            <div key={dataItem.id} className={wrapperClassName}>
              <h2 className="text-2xl sm:text-3xl pt-20 md:pt-24">
                {dataItem.question}
              </h2>
              <ul>
                <Trail open={trailAnimation} className={gridClassName}>
                  {dataItem.answers.map((answer, index) => (
                    <li className="overflow-hidden" key={answer + index}>
                      <button
                        className={btnClassName}
                        onClick={() => setCurrentQuestion((s) => s + 1)}
                      >
                        {answer}
                      </button>
                    </li>
                  ))}
                </Trail>
              </ul>
              <div className="flex justify-end gap-2 absolute bottom-20 right-6 md:right-0">
                <button
                  disabled={!currentQuestion}
                  onClick={() => {
                    if (currentQuestion) setCurrentQuestion((s) => s - 1);
                  }}
                >
                  Prev
                </button>
                <button
                  //TODO: Disabled if question is not answered.
                  onClick={() => {
                    setCurrentQuestion((s) => s + 1);
                  }}
                >
                  Next
                </button>
              </div>
            </div>
          );
        })}
        {currentQuestion > quizData.length - 1 && <div>Success!!!</div>}
      </QuizCard>
    </div>
  );
};

export default Quiz;
