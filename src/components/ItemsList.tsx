import React, { FC, useEffect, useState } from "react";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";
import CloseIcon from "@mui/icons-material/Close";
import db from "../firebase-config";
import { OneTaskDiv, AllTasksDiv } from "./ItemsListUI/ItemsListUI";
import { IconButton } from "@mui/material";

const ItemsList: FC<{
  newItemHasBeenAdded: any;
  setNewItemHasBeenAdded: any;
}> = ({ newItemHasBeenAdded, setNewItemHasBeenAdded }) => {
  const [todos, setTodos] = useState<any>([]);
  const taskCollectionReference = collection(db, "todos");

  useEffect(() => {
    const getTodosFromDatabase = async () => {
      const data = await getDocs(taskCollectionReference);
      setTodos(
        data.docs.map((document) => ({ ...document.data(), id: document.id }))
      );
    };

    getTodosFromDatabase();
  }, [newItemHasBeenAdded]);

  const deleteItem = async (id: any) => {
    await deleteDoc(doc(db, "todos", id));
    if (newItemHasBeenAdded) setNewItemHasBeenAdded(false);
    else setNewItemHasBeenAdded(true);
  };

  return (
    <div>
      <AllTasksDiv>
        {todos.map((oneTask: any) => (
          <OneTaskDiv key={oneTask.id}>
            <div>{oneTask.text}</div>
            <div>
              <IconButton onClick={() => deleteItem(oneTask.id)}>
                <CloseIcon sx={{ color: "#6203FC" }} />
              </IconButton>
            </div>
          </OneTaskDiv>
        ))}
      </AllTasksDiv>
    </div>
  );
};

export default ItemsList;
