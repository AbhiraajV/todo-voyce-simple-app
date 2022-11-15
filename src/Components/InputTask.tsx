import React from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../Redux/Actions/action-creators/TaskActions";
type Props = {};

function InputTask({}: Props) {
  const dispatch = useDispatch();
  const onAddTask = (task: string) => {
    dispatch(addTask(task));
  };
  const [curTask, setCurTask] = React.useState("");

  const updateNote = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurTask(e.target.value);
  };

  const handleSubmit = () => {
    if (curTask.trim() === "") return;
    onAddTask(curTask);
    setCurTask("");
  };
  return (
    <div className="InputHolder">
      <input
        className="InputTask"
        type="text"
        placeholder="new task..."
        value={curTask}
        onChange={updateNote}
      />
      <div className="cta" onClick={handleSubmit}>
        <span>add task</span>
        <svg width="13px" height="10px" viewBox="0 0 13 10">
          <path d="M1,5 L11,5"></path>
          <polyline points="8 1 12 5 8 9"></polyline>
        </svg>
      </div>
    </div>
  );
}

export default InputTask;
