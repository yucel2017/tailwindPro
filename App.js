import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';
import FlashMessage from "react-native-flash-message";

const App = () => {
  return (
    <NavigationContainer>
      <FlashMessage position="top" /> 
      <AuthStackNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})