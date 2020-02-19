import { put, takeLatest } from 'redux-saga/effects';
import exampleSlice from 'slices/example';

function* fetchExampleAsync({ payload }) {
  try {
    yield put(
      exampleSlice.actions.update({
        data: ['Leo', 'ginger']
      })
    );
  } catch ({ message }) {
    console.error(message);
  }
}

export default function* adminAppsSaga() {
  yield takeLatest(exampleSlice.sagas.fetchExampleAsync, fetchExampleAsync);
}
