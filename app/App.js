import React, { useState } from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Screens
import HomeScreen from './screens/HomeScreen';

/**
 * Define App Navigation
 * Reference: https://reactnavigation.org/en/
 */
const AppNavigator = createStackNavigator({
  Home: { 
    screen: HomeScreen
  }
},
{
  initialRouteName: 'Home',
  headerMode: 'float'
});

const AppContainer = createAppContainer(AppNavigator);

/**
 * Main Application
 */
const App = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;