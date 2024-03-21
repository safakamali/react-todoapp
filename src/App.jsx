import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

import "./index.css";
import { useState } from "react";

const App = () => {
  const [todosList, setTodoList] = useState([
    { title: "Make upgrade ui of the Signal Baz", isDone: false },
    { title: "Buy some resource for app", isDone: false },
    { title: "Read the refactoring ui book", isDone: false },
    { title: "Watch some YouTube videos", isDone: false },
  ]);

  return (
    <div id="App" className="font-display">
      <div className="flex justify-center">
        <div className="h-screen bg-gray-100 w-screen max-w-md p-7 font-medium relative">
          <h1 className="text-2xl mb-8">
            Tasks Today <KeyboardArrowDownIcon fontSize="large" />
          </h1>
          <TodoList
            todosList={todosList}
            title="Work"
            todoHandleCheck={(index) => {
              let newTodoList = todosList;
              newTodoList[index].isDone = !todosList[index].isDone;
              setTodoList(newTodoList);
            }}
          />
          <div className="fixed bottom-2 right-2">
            <Fab color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
