import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from "@mui/icons-material/Add";
import TodoList from "./TodoList";
import Button from "@mui/material/Button";
import Fab from "@mui/material/Fab";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

import "./index.css";
import { useEffect, useState } from "react";

const App = () => {
  const [todosList, setTodosList] = useState([]);
  // { title: "Make upgrade ui of the Signal Bazssssssssssssssssssssssssssssssssssssssss", isDone: false },
  // { title: "Buy some resource for app", isDone: false },
  // { title: "Read the refactoring ui book", isDone: false },
  // { title: "Watch some YouTube videos", isDone: false }

  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  useEffect(() => console.log("todosList State Change"), [todosList]);

  return (
    <div id="App" className="font-display">
      <div className="flex justify-center">
        <div className="h-screen bg-gray-100 w-screen max-w-3xl p-7 font-medium relative">
          <h1 className="text-2xl mb-8">
            Tasks Today <KeyboardArrowDownIcon fontSize="large" />
          </h1>
          <TodoList
            todosList={todosList}
            title="Work"
            todoHandleCheck={(index) => {
              let newTodosList = todosList;
              newTodosList[index].isDone = !todosList[index].isDone;
              setTodosList(newTodosList);
            }}
            todoHandleDelete={(index) => {
              let newTodosList = [...todosList];
              newTodosList.splice(index, 1);

              setTodosList(newTodosList);
            }}
          />
          <div className="fixed bottom-2 right-2">
            <Fab color="primary" aria-label="add" onClick={() => handleClickOpen()}>
              <AddIcon />
            </Fab>
          </div>
        </div>
      </div>

      <Dialog
        open={openDialog}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const todoTitle = formJson.title;
            let newTodoList = todosList;
            newTodoList.push({ title: todoTitle, isDone: false });
            setTodosList(newTodoList);

            handleClose();
          },
        }}
      >
        <DialogTitle>Add a new todo</DialogTitle>
        <DialogContent>
          <DialogContentText>Set a name for your todo!</DialogContentText>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="title"
            label="Todo Title"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Add</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default App;
