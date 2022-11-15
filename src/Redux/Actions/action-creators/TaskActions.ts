import { Action, ActionTypes } from "../action.types";

export const addTask = (task: string): Action => ({
  type: ActionTypes.ADD_TASK,
  payload: { task },
});
export const deleteTask = (id: String): Action => ({
  type: ActionTypes.DELETE_TASK,
  payload: { id },
});
export const editTask = (task: String, id: String): Action => ({
  type: ActionTypes.EDIT_TASK,
  payload: { task: task, id: id },
});
export const toggleCompleteTask = (id: String): Action => ({
  type: ActionTypes.TOGGLE_COMPLETION,
  payload: { id },
});
