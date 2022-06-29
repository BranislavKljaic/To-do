import React, { FC, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../firebase-config";
import {
  MainDiv,
  AddItemTextField,
  AddItemButton,
} from "./AddItemUI/AddItemUI";

const AddItem: FC<{
  newItemHasBeenAdded: any;
  setNewItemHasBeenAdded: any;
}> = ({ newItemHasBeenAdded, setNewItemHasBeenAdded }) => {
  const [task, setTask] = useState("");
  const taskCollectionReference = collection(db, "todos");

  const addTaskOnList = async () => {
    if (task !== "")
      await addDoc(taskCollectionReference, {
        text: task,
      });

    if (newItemHasBeenAdded) setNewItemHasBeenAdded(false);
    else setNewItemHasBeenAdded(true);
  };

  return (
    <form onSubmit={addTaskOnList}>
      <MainDiv>
        <AddItemTextField
          variant="standard"
          placeholder="Type what you need to do..."
          label="Todo Task"
          onChange={(e) => setTask(e.target.value)}
        />
        <AddItemButton variant="outlined" onClick={addTaskOnList}>
          Add task
        </AddItemButton>
      </MainDiv>
    </form>
  );
};

export default AddItem;
