import React from "react";
import { useSpring, animated } from "react-spring";
import { DataItem } from "utils";

interface Props {
  dataItem: DataItem;
  currentQuestion: number;
  setCurrentQuestion: React.Dispatch<React.SetStateAction<number>>;
}

const QuizDataItem: React.FC<Props> = ({
  dataItem,
  currentQuestion,
  setCurrentQuestion,
}) => {
  let wrapperClassName =
    "w-full h-full absolute top-0 left-1/2 transform -translate-x-1/2 max-w-prose px-6 md:px-0";
  let gridClassName = "grid gap-2 grid-cols-2 md:grid-cols-3 mt-10";
  let btnClassName = "btn";

  const tooManyCharacters = (text: string) => text.length > 18;
  if (dataItem.answers.some(tooManyCharacters)) {
    gridClassName = "grid gap-2 grid-cols-1 mt-6";
    btnClassName += " text-left max-w-prose";
  }

  if (dataItem.id !== currentQuestion) {
    if (dataItem.id === currentQuestion - 1) wrapperClassName += " -left-full";
    else if (dataItem.id === currentQuestion + 1)
      wrapperClassName += " left-full";
    else return <div />;
  }

  const styles = useSpring({
    cancel: dataItem.id !== currentQuestion,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <animated.div className={wrapperClassName} style={styles}>
      <h2 className="text-2xl sm:text-3xl pt-20 md:pt-24">
        {dataItem.question}
      </h2>
      <ul className={gridClassName}>
        {dataItem.answers.map((answer, index) => (
          <li key={answer + index}>
            <button
              className={btnClassName}
              onClick={() => setCurrentQuestion((s) => s + 1)}
            >
              {answer}
            </button>
          </li>
        ))}
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
    </animated.div>
  );
};

export default QuizDataItem;
