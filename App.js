// Forma 1 con tabs
import React from "react";
import Navigation from "./navigation";

export default function App() {
  return (
    <Navigation />
  );
}


/* Forma 2 con stack

import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pantallas/login";
import Registro from "./pantallas/registro";

const Stack = createStackNavigator();

function App (){
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login}/>
        <Stack.Screen name="Registro" component={Registro}/>
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

export default App; 
*/  