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













/*
import React from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import {NavigationConteiner} from "@react-navigation/native"
//import { createStackNavigator } from '@react-navigation/stack';
import Login from "../paginas/login"
import Registro from "../paginas/registro"

const Stack =  createNativeStackNavigator()
// createStackNavigator()
function MainStack  () {
    return (
        <NavigationConteiner>
            <Stack.Navigator>
                <Stack.Screen 
                name = "login"
                component = {Login}/>

            <Stack.Screen 
                name = "registro"
                component = {Registro}/>   
            </Stack.Navigator>
        </NavigationConteiner>
    );
}

export default MainStack;*/