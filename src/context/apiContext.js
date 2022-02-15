import createDataContext from './createDataContext';
import url from '../api/url';

const apiReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const addEvacuation = (dispatch) => async (location, name, capacity) => {
  try {
    console.log(url);
    const res = await url.post('/', {
      location,
      name,
      capacity,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
  }
};

export const { Provider, Context } = createDataContext(
  apiReducer,
  { addEvacuation },
  []
);
