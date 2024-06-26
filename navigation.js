import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
// pantallas 
import Login from "./pantallas/login";
import Registro from "./pantallas/registro";

const Tab = createBottomTabNavigator();

function Tabs (){
    return(
        <Tab.Navigator 
        initialRouteName="Login" 
        screenOptions={{
            tabBarActiveTintColor: "darkslategrey"
        }}>
            <Tab.Screen 
                name ="Login"
                component={Login} 
                options={{
                    headerShown: false
                }}
            ></Tab.Screen>
            <Tab.Screen 
                name ="Registro" 
                component={Registro}
                options={{
                    headerShown: false
                }}
            ></Tab.Screen>

        </Tab.Navigator>
    )
}
export default function navigation(){
    return(
        <NavigationContainer>
            <Tabs />
        </NavigationContainer>
    );
}

