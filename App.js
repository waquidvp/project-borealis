import React from 'react';
import { StyleSheet, Text, View, AsyncStorage,Modal } from 'react-native';

import MainNavigation from './src/navigators/MainNavigation';
import SignIn from './src/screens/SignIn.js';

export default class App extends React.Component {
  state = {
    modalVisible: true,
  }

  componentWillMount() {
    checkLogin().then((value) => {
      this.setState({modalVisible: value})
    })
  }

  updateModal() {
    this.setState({modalVisible: false})
  }

  render() {
      return (
        <View style={{flex:1}}>
          <Modal visible={this.state.modalVisible} animationType={"slide"} transparent={true}>
            <SignIn updateModal={this.updateModal.bind(this)}/>
          </Modal>
          <MainNavigation />
        </View>
      );   
  }
}

function checkLogin() {
  return new Promise((resolve, reject) => {
    try {
        AsyncStorage.getItem('@weight:key').then((value) => {
          if (value !== null) {
            resolve(false);
          } else {
            resolve(true);
          }
        })
      } catch (error) {
        // Error getting data so display sign-in page
        resolve(true);
      }
  })
}

