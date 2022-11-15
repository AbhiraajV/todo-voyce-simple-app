export type TaskType = {
  task: String;
  completed: Boolean;
  deleted: Boolean;
  id: String;
};
export enum ActionTypes {
  "ADD_TASK" = "add",
  "EDIT_TASK" = "edit",
  "DELETE_TASK" = "delete",
  "TOGGLE_COMPLETION" = "toggle_complete",
}

interface AddTaskActionType {
  type: ActionTypes.ADD_TASK;
  payload: { task: String };
}
interface EditTaskActionType {
  type: ActionTypes.EDIT_TASK;
  payload: { id: String; task: String };
}
interface DeleteTaskActionType {
  type: ActionTypes.DELETE_TASK;
  payload: { id: String };
}
interface ToggelCompleteActionType {
  type: ActionTypes.TOGGLE_COMPLETION;
  payload: { id: String };
}

export type Action =
  | AddTaskActionType
  | EditTaskActionType
  | DeleteTaskActionType
  | ToggelCompleteActionType;
