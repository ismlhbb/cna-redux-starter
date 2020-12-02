import { createReducer } from 'typesafe-actions';
import { ExampleState } from './example.types';
import * as exampleActions from './example.actions';
import { ExampleAction } from './example.actions';

const initialState: ExampleState = {
  currentOperation: null,
  data: [],
  error: null
};

// Again we use createReducer function from typesafe-actions library to build type-safe reducer
// Learn more here: https://github.com/piotrwitek/typesafe-actions#createreducer
const exampleReducer = createReducer<ExampleState, ExampleAction>(initialState)
  .handleAction([exampleActions.fetchExampleData, exampleActions.editExampleData], (state, action) => ({
    ...state,
    currentOperation: action.type,
    error: null
  }))
  .handleAction(exampleActions.fetchExampleDataSuccess, (state, action) => ({ ...state, currentOperation: null, data: action.payload }))
  .handleAction([exampleActions.fetchExampleDataFailed, exampleActions.editExampleDataFailed], (state, action) => ({
    ...state,
    currentOperation: null,
    error: action.payload
  }));

export default exampleReducer;
