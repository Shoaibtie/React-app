import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './src/Home';
import SignUp from './src/SignUp';

const App = () => {
  const Stact = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stact.Navigator>
        <Stact.Screen name="Home" component={Home} options={{headerShown:false}}/>

        <Stact.Screen name="SignUp" component={SignUp} />
      </Stact.Navigator>
    </NavigationContainer>
  );
};

export default App;
