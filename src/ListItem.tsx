import React from "react";
import { DataItem } from "utils";

interface Props {
  dataItem: DataItem;
}

const ListItem: React.FC<Props> = ({ dataItem }) => {
  return (
    <div>
      <h2>{dataItem.question}</h2>
      <ul>
        {dataItem.answers.map((answer) => (
          <li>
            <button>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListItem;
