import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Admin from './src/admin/Index';

const Stack = createStackNavigator();

const myOptions = {
  title: '',
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#006aff"
  }
}
export default function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} options={myOptions} />
          <Stack.Screen name="Home" component={Home} options={myOptions} />
          <Stack.Screen name="Admin" component={Admin} options={myOptions} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
});