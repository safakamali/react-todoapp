import BriefcaseSVG from "./images/briefcase.svg";
import { FormControlLabel } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const Todo = ({ index, title, isDone, handleCheck, handleDelete }) => {
  const [checked, setChecked] = useState(isDone);

  return (
    <div className="mt-3 flex justify-between">
      <FormControlLabel
        className="overflow-hidden"
        label={
          <span
            className={(checked ? "line-through " : "") + "whitespace-nowrap"}
          >
            {title}
          </span>
        }
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
      <IconButton aria-label="delete" color="error" onClick={() => handleDelete(index)}>
        <DeleteIcon />
      </IconButton>
    </div>
  );
};

const TodoList = ({ todosList, title, todoHandleCheck, todoHandleDelete }) => {
  return (
    <div>
      <div className="flex items-end">
        <img src={BriefcaseSVG} className="w-10" />
        <h2 className="text-3xl ml-5">{title}</h2>
      </div>
      <div className="bg-white p-3 pl-5 mt-5 rounded-xl">
        {todosList[0]
          ? todosList.map((todo, index) => (
              <Todo
                title={todo.title}
                isDone={todo.isDone}
                key={index}
                index={index}
                handleCheck={todoHandleCheck}
                handleDelete={todoHandleDelete}
              />
            ))
          : "You dont have any work to do!"}
      </div>
    </div>
  );
};

export default TodoList;
