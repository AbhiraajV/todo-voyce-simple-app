import React from "react";
import { useSelector } from "react-redux";
import { ReducerType } from "../../Redux/Reducer";
import { TasksType } from "../../Redux/Reducer/TodoReducer";
import ListItem from "./ListItem";
import { FiSave } from "react-icons/fi";
import { AiOutlineClear } from "react-icons/ai";
type Props = {};

function List({}: Props) {
  const tasks = useSelector<ReducerType, TasksType["tasks"]>((state) => {
    console.log(state);
    return state.todo.tasks;
  });
  return (
    <div>
      <div className="controlList">
        <FiSave
          size={20}
          color={"purple"}
          onClick={() => localStorage.setItem("tasks", JSON.stringify(tasks))}
        />
        <AiOutlineClear
          size={20}
          color={"purple"}
          onClick={() => {
            localStorage.removeItem("tasks");
            window.location.reload();
          }}
        />
      </div>
      <div id="checklist">
        {tasks.map((task, id) => (
          <ListItem task={task} key={id} />
        ))}
      </div>
    </div>
  );
}

export default List;
