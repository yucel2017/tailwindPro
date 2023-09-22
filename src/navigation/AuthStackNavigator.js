import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginScreen from '../pages/LoginScreen'
import RegisterScreen from '../pages/RegisterScreen'
import WelcomeScreen from '../pages/WelcomeScreen'

const Stack = createNativeStackNavigator()

const AuthStackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Welcome' >
            <Stack.Screen name='Login' component={LoginScreen} />
            <Stack.Screen name='SignUp' component={RegisterScreen} />
            <Stack.Screen name='Welcome' component={WelcomeScreen} />
        </Stack.Navigator>
    )
}

export default AuthStackNavigator

const styles = StyleSheet.create({})