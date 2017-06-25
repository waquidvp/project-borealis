import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';

import MainNavigation from './src/navigators/MainNavigation';
import SignIn from './src/screens/SignIn.js';

export default class App extends React.Component {
  render() {
    if (checkLogin === true) {
      return (
        <MainNavigation />
      );
    } else {
      return (
        <SignIn />
      );
    }
  }
}

function checkLogin() {
  try {
      AsyncStorage.getItem('@weight:key').then((value) => {
        if (value !== null) {
          return true;
        } else {
          return false;
        }
      })
    } catch (error) {
      // Error getting data so display sign-in page
      return false
    }
}