import React from "react";
import { DataItem } from "utils";

interface Props {
  dataItem: DataItem;
}

const QuizDataItem: React.FC<Props> = ({ dataItem }) => {
  let gridClassName = "grid grid-cols-2 md:grid-cols-3 gap-2";
  let btnClassName = "btn";

  const tooManyCharacters = (text: string) => text.length > 18;
  if (dataItem.answers.some(tooManyCharacters)) {
    gridClassName = "grid gap-2 grid-cols-1";
    btnClassName += " text-left";
  }

  return (
    <div>
      <h2>{dataItem.question}</h2>
      <ul className={gridClassName}>
        {dataItem.answers.map((answer, index) => (
          <li key={answer + index}>
            <button className={btnClassName}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuizDataItem;
