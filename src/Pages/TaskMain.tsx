import React from "react";
import InputTask from "../Components/InputTask";
import List from "../Components/List";

type Props = {};

function TaskMain({}: Props) {
  return (
    <div className="taskPage">
      <InputTask />
      <List />
    </div>
  );
}

export default TaskMain;
