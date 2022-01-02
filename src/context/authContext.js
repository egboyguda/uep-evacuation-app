import createDataContext from './createDataContext';
import url from '../api/url';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { navigate } from '../navigationRes';

const authReducer = (state, action) => {
  switch (action.type) {
    case 'sign':
      return { ...state, token: action.payload };
    case 'addErr':
      return { ...state, errorMsg: action.payload };
    default:
      return state;
  }
};

const signIn = (dispatch) => async (username, password) => {
  console.log(username);
  try {
    const res = await url.post('/login', {
      username: username,
      password: password,
    });

    await AsyncStorage.setItem('token', res.data.token);
    dispatch({ type: 'sign ', payload: res.data.token });
    navigate('List');
  } catch (error) {
    console.log(error.message);
    dispatch({ type: 'addErr', payload: 'something went wrong' });
  }
};
export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn },
  { token: null, errorMsg: '' }
);
