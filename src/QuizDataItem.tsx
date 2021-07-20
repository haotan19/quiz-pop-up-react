import React from "react";
import { useSpring, animated } from "react-spring";
import { DataItem } from "utils";

interface Props {
  dataItem: DataItem;
  currentQuestion: number;
}

const QuizDataItem: React.FC<Props> = ({ dataItem, currentQuestion }) => {
  let wrapperClassName = "w-full h-full absolute top-0 left-0";
  let gridClassName = "grid grid-cols-2 md:grid-cols-3 gap-2";
  let btnClassName = "btn";

  const tooManyCharacters = (text: string) => text.length > 18;
  if (dataItem.answers.some(tooManyCharacters)) {
    gridClassName = "grid gap-2 grid-cols-1";
    btnClassName += " text-left";
  }

  if (dataItem.id !== currentQuestion) {
    if (dataItem.id === currentQuestion - 1) wrapperClassName += " -left-full";
    else if (dataItem.id === currentQuestion + 1)
      wrapperClassName += " left-full";
  }

  const styles = useSpring({
    cancel: dataItem.id !== currentQuestion,
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <animated.div className={wrapperClassName} style={styles}>
      <h2 className="text-2xl sm:text-3xl mb-4 ">{dataItem.question}</h2>
      <ul className={gridClassName}>
        {dataItem.answers.map((answer, index) => (
          <li key={answer + index}>
            <button className={btnClassName}>{answer}</button>
          </li>
        ))}
      </ul>
    </animated.div>
  );
};

export default QuizDataItem;
