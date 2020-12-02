import { Dispatch } from 'redux';
import { AppActions, RootState } from 'store';
import * as exampleAction from './example.actions';
import { ExampleService } from './example.service';

// Here we create our thunks so we can dispatch multiple action creators
// in asynchronous matter.

export const getExampleData = () => async (dispatch: Dispatch<AppActions>, getState: () => RootState) => {
  dispatch(exampleAction.fetchExampleData());
  try {
    const data = await ExampleService.getSampleData();
    dispatch(exampleAction.fetchExampleDataSuccess(data));
  } catch (error) {
    dispatch(exampleAction.fetchExampleDataFailed(error.message));
  }
};

export const editExampleData = (id: string, name: string, age: string) => async (dispatch: Dispatch<AppActions>, getState: () => RootState) => {
  dispatch(exampleAction.editExampleData());
  try {
    const result = await ExampleService.editData(id, name, age);
    dispatch(exampleAction.editExampleDataSuccess(result));
  } catch (error) {
    dispatch(exampleAction.editExampleDataFailed(error.message));
  }
};
