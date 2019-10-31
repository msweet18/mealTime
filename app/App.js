import React, { useState } from 'react';

// Navigation
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

// Redux
import { Provider } from 'react-redux';
import store from './redux/store';

// Screens
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';

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
  const [loading, setLoading ] = useState(true);

  // Splash Screen Renders after timeout
  setTimeout(() =>{
    setLoading(false);
  } , 2000);

  if (loading){
    return <SplashScreen />;
  } else {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
};

export default App;