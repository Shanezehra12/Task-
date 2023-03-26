import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons';
import SplashScreen from '../Screens/SplashScreen'
import SearchScreen from '../Screens/SearchScreen'
import FilterScreen from '../Screens/FilterScreen'
import FavouriteScreen from '../Screens/FavouriteScreen'
import UserScreen from '../Screens/UserScreen'

const Stack = createNativeStackNavigator();
const Bottom = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName = "SplashScreen" >
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='HomeNavigator' component={HomeNavigator}/>
        </Stack.Navigator>
    </NavigationContainer>
    
    
  )
}

const HomeNavigator = () => {
    return (
    
        <Bottom.Navigator 
        screenOptions={({route}) => ({
            tabBarIcon : ({focused, size, color}) => {
                let iconName;
                if (route.name === 'Filter') {
                    iconName = focused ? 'filter' : 'filter'
                    size = focused ? 30 : 20;
                } else if (route.name === 'Search') {
                    iconName = focused ? 'search' : 'search';
                    size = focused ? 30 : 20;
                } else if (route.name === 'Favourite') {
                    iconName = focused ? 'heart' : 'heart';
                    size = focused ? 30 : 20;
                } else if (route.name === 'User') {
                    iconName = focused ? 'person-outline' : 'person-outline';
                    size = focused ? 30 : 20;
                }

                return <Ionicons name = {iconName} size = {size} color = {color} />
            },
        })}
        tabBarOptions = {{
            activeTintColor : 'red',
            inactiveTinirColor : 'black',
        }}
        > 

        <Stack.Screen name='Filter' options={{headerShown: false}} component={FilterScreen} />
        <Stack.Screen name='Search' options={{headerShown: false}} component={SearchScreen} />
        <Stack.Screen name='Favourite' options={{headerShown: false}} component={FavouriteScreen} />
        <Stack.Screen name='User' options={{headerShown: false}} component={UserScreen} />




        </Bottom.Navigator>
        
    )

}

const styles = StyleSheet.create({})