import { ActionType, createAction } from 'typesafe-actions';
import { ExampleActionTypes, ExampleModel } from './example.types';

// Define your actions creators. Here we use typesafe-actions library to easily create
// type-safe actions creators. createAction() accepts 3 parameters and returns builder function that you can execute to get the actual action creator:
// - 1st parameter: Action type (can be string or enum (recommended) member)
// - 2nd parameter: Function that accepts unlimited parameters and returns payload to sent to reducers and accessed in action.payload
// - 3rd parameter (optional): Function that returns meta object to be sent to reducer and accessed in action.meta
//
// See example.thunks.ts for usage example of these action creators
// Learn more about typesafe-actions here: https://github.com/piotrwitek/typesafe-actions
export const fetchExampleData = createAction(ExampleActionTypes.GET_DATA)();
export const fetchExampleDataSuccess = createAction(ExampleActionTypes.GET_DATA_SUCCESS, (data: ExampleModel[]) => data)();
export const fetchExampleDataFailed = createAction(ExampleActionTypes.GET_DATA_FAILED, (error: string) => error)();
export const editExampleData = createAction(ExampleActionTypes.EDIT_DATA)();
export const editExampleDataSuccess = createAction(ExampleActionTypes.EDIT_DATA_SUCCESS, (data: ExampleModel) => data)();
export const editExampleDataFailed = createAction(ExampleActionTypes.EDIT_DATA_FAILED, (error: string) => error)();

// Export action creators above as a single type to be used
// later in the reducers
export type ExampleAction = ActionType<
  | typeof fetchExampleData
  | typeof fetchExampleDataSuccess
  | typeof fetchExampleDataFailed
  | typeof editExampleData
  | typeof editExampleDataSuccess
  | typeof editExampleDataFailed
>;
