/* eslint-disable no-param-reassign */
import { createSlice, createAction } from '@reduxjs/toolkit';

const example = createSlice({
  name: 'example',
  initialState: {
    data: []
  },
  // reducers support `immer` so you can mutate the state in slice.
  reducers: {
    update: (state, action) => ({
      ...state,
      ...action.payload
    })
  }
});

example.sagas = {
  fetchExampleAsync: createAction('example/fetchExampleAsync')
};

export default example;
