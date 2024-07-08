import React from 'react';
import { Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createNativeStackNavigator }  from '@react-navigation/stack';
import LoginScreen from './screenstack/LoginScreen';
import SignupScreen from './screenstack/SignupScreen';
const Stack=createNativeStackNavigator();
const App=()=>
{
return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Signup' component={SignupScreen}/>
      <Stack.Screen name='Login' component={LoginScreen}/>
    </Stack.Navigator>
  </NavigationContainer>
)
};


export default App;