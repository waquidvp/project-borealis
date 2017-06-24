import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BottomNavigation from './src/navigators/AndroidBottomNav';

export default class App extends React.Component {
  render() {
    return (
      <BottomNavigation />
    );
  }
}