export enum ExampleActionTypes {
  GET_DATA = '@example/GET_DATA',
  GET_DATA_SUCCESS = '@example/GET_DATA_SUCCESS',
  GET_DATA_FAILED = '@example/GET_DATA_FAILED',
  EDIT_DATA = '@example/EDIT_DATA',
  EDIT_DATA_SUCCESS = '@example/EDIT_DATA_SUCCESS',
  EDIT_DATA_FAILED = '@example/EDIT_DATA_FAILED'
}

export interface ExampleState {
  currentOperation: ExampleActionTypes | null;
  data: ExampleModel[];
  error: string | null;
}

export interface ExampleModel {
  id: string;
  name: string;
  age: string;
}

export interface ReqUpdateData {
  name: string;
  age: string;
}
