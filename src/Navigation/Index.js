import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screen/Login'
import Task from '../screen/Task'
import Signup from '../screen/Signup'
import Splash from '../screen/Splash'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from '../screen/Home'
import Profile from '../screen/Profile'
import Setting from '../screen/Setting'
import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator()



const Tab = createBottomTabNavigator()
const Stacknavigation = () => {
    return (<Stack.Navigator headerMode='none' >

        <Stack.Screen name='Splash' component={Splash} />
        <Stack.Screen name='Login' component={Login} />
        <Stack.Screen name='Signup' component={Signup} />
        <Stack.Screen name='Task' component={Task} />

    </Stack.Navigator>)
}
const AppNavigation = () => {

    return <NavigationContainer>

        <Tab.Navigator screenOptions={({ navigation, route }) => ({
            tabBarIcon: () => {
                let IconName
                if (route.name === 'Home') {
                    IconName = 'home'
                }
                else if (route.name === 'Profile') {
                    IconName = 'user-circle'
                } else if (route.name === 'Setting') {
                    IconName = 'cog'
                }

                return (

                    <Icon
                        name={IconName}
                        color='black'
                        size={40}
                    />
                )
            }
        })




        }




        >





            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Profile} />
            <Tab.Screen name='Setting' component={Setting} />
        </Tab.Navigator>



    </NavigationContainer>



}
export default AppNavigation