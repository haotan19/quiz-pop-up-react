import React from "react";
import QuizDataItem from "./QuizDataItem";
import BackgroundOverlay from "./BackgroundOverlay";
import QuizCard from "./QuizCard";
import { DataItem } from "./utils";

interface Props {
  quizData: DataItem[];
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const Quiz: React.FC<Props> = ({ quizData, active, setActive }) => {
  let quizClassName = "quiz";
  if (active) {
    quizClassName += " quiz-active";
  }

  return (
    <div className={quizClassName}>
      <BackgroundOverlay onClick={() => setActive(false)} />
      <QuizCard>
        {quizData.map((dataItem) => (
          <QuizDataItem key={dataItem.id} dataItem={dataItem} />
        ))}
      </QuizCard>
    </div>
  );
};

export default Quiz;
