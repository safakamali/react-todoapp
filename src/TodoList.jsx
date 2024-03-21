import BriefcaseSVG from "./images/briefcase.svg";
import { FormControlLabel } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Todo = ({ index, title, isDone, handleCheck }) => {
  const [checked, setChecked] = useState(isDone);

  return (
    <div className="mt-3">
      <FormControlLabel
        label={<span className={checked ? "line-through" : ""}>{title}</span>}
        control={
          <Checkbox
            checked={checked}
            onChange={() => {
              setChecked(!checked);
              handleCheck(index);
            }}
          />
        }
      />
    </div>
  );
};

const TodoList = ({ todosList, title, todoHandleCheck }) => {
  return (
    <div>
      <div className="flex items-end">
        <img src={BriefcaseSVG} className="w-10" />
        <h2 className="text-3xl ml-5">{title}</h2>
      </div>
      <div className="bg-white p-3 pl-5 mt-5 rounded-xl">
        {todosList.map((todo, index) => (
          <Todo title={todo.title} isDone={todo.isDone} key={index} index={index} handleCheck={todoHandleCheck}/>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
