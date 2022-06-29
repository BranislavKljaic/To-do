import React, { useState } from "react";
import Header from "../components/Header";
import AddItem from "../components/AddItem";
import ItemsList from "../components/ItemsList";
import { MainDiv, HeaderDiv, AddItemDiv, ItemsListDiv } from "./TodoUI/TodoUI";

const Todo = () => {
  const [newItemHasBeenAdded, setNewItemHasBeenAdded] = useState<boolean>(false);

  return (
    <MainDiv>
      <HeaderDiv>
        <Header />
      </HeaderDiv>
      <AddItemDiv>
        <AddItem newItemHasBeenAdded={newItemHasBeenAdded} setNewItemHasBeenAdded={setNewItemHasBeenAdded}/>
      </AddItemDiv>
      <ItemsListDiv>
        <ItemsList  newItemHasBeenAdded={newItemHasBeenAdded} setNewItemHasBeenAdded={setNewItemHasBeenAdded}/>
      </ItemsListDiv>
    </MainDiv>
  );
};

export default Todo;
