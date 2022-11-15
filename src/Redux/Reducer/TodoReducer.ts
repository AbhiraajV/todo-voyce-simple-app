import { Action, ActionTypes, TaskType } from "../Actions/action.types";
export interface TasksType {
  tasks: TaskType[];
}

const initialState = {
  tasks: [],
};

export const todoReducer = (
  state: TasksType = localStorage.getItem("tasks") !== null
    ? { tasks: JSON.parse(localStorage.getItem("tasks")!) }
    : initialState,
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.ADD_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            task: action.payload.task,
            completed: false,
            deleted: false,
            id: Date.now() + "" + Math.random(),
          },
        ],
      };
    }
    case ActionTypes.DELETE_TASK: {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id
          ? { ...task, deleted: !task.deleted }
          : task;
      });
      return { ...state };
    }
    case ActionTypes.EDIT_TASK: {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id
          ? { ...task, task: action.payload.task }
          : task;
      });
      return { ...state };
    }
    case ActionTypes.TOGGLE_COMPLETION: {
      state.tasks = state.tasks.map((task) => {
        return task.id === action.payload.id
          ? { ...task, completed: !task.completed }
          : task;
      });
      return { ...state };
    }
    default:
      return state;
  }
};
