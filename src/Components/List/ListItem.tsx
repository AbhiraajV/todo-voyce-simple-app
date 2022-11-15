import React from "react";
import { useDispatch } from "react-redux";
import { AiFillDelete } from "react-icons/ai";
import { MdOutlineRemoveDone, MdOutlineDoneAll } from "react-icons/md";
import {
  deleteTask,
  editTask,
  toggleCompleteTask,
} from "../../Redux/Actions/action-creators/TaskActions";
import { TaskType } from "../../Redux/Actions/action.types";

type Props = {
  task: TaskType;
  key: any;
};

function ListItem({ task, key }: Props) {
  const dispatch = useDispatch();
  const onToggleCompleteTask = (id: String) => {
    dispatch(toggleCompleteTask(id));
  };

  const onEditTask = (task: String, id: String) => {
    dispatch(editTask(task, id));
  };

  const onDeleteTask = (id: String) => {
    dispatch(deleteTask(id));
  };
  if (task.deleted) return <></>;
  return (
    <div className="listItemContainer">
      <div>
        <input
          id={key + ""}
          className={task.completed ? "selected_listItem" : "listItem"}
          type="checkbox"
          onClick={() => onToggleCompleteTask(task.id)}
        />
        <label
          id="listItemLabel"
          htmlFor={key + ""}
          style={{ width: "fit-content" }}
        >
          <input
            className="input_editTask"
            value={task.task as string}
            type="text"
            onChange={(e) => onEditTask(e.target.value, task.id)}
          />
        </label>
      </div>
      <div className="listItemDelete">
        <AiFillDelete color="purple" onClick={() => onDeleteTask(task.id)} />
        {task.completed ? (
          <MdOutlineRemoveDone
            color="purple"
            onClick={() => onToggleCompleteTask(task.id)}
          />
        ) : (
          <MdOutlineDoneAll
            color="purple"
            onClick={() => onToggleCompleteTask(task.id)}
          />
        )}
      </div>
    </div>
  );
}

export default ListItem;
