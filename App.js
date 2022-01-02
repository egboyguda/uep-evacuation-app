import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ListScreen from './src/screens/ListScreen';
import Login from './src/screens/Login';
import Map from './src/components/Map';
import { Provider as LocationProvider } from './src/context/locationContext';
import { Provider as AuthProvider } from './src/context/authContext';
import MapForm from './src/screens/mapForm';
import FormSubmit from './src/screens/fillUpForm';
import { setNavigator } from './src/navigationRes';
const Application = createStackNavigator(
  {
    LOGIN: Login,
    List: ListScreen,
    Map: MapForm,
    Submit: FormSubmit,
  },
  { initialRouteName: 'LOGIN' }
);

const App = createAppContainer(Application);
export default () => {
  return (
    <AuthProvider>
      <LocationProvider>
        <App
          ref={(navigator) => {
            setNavigator(navigator);
          }}
        />
      </LocationProvider>
    </AuthProvider>
  );
};
