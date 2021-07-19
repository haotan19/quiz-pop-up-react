import React from "react";
import { DataItem } from "utils";

interface Props {
  dataItem: DataItem;
}

const QuizDataItem: React.FC<Props> = ({ dataItem }) => {
  return (
    <div>
      <h2>{dataItem.question}</h2>
      <ul className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2">
        {dataItem.answers.map((answer, index) => (
          <li key={answer + index}>
            <button className="btn">{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizDataItem;
