import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Account extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Account',
        tabBarIcon: () => (<Icon size={24} color='rgba(255,255,255,0.7)' name='account-circle' />)
    }

    state = {
        text: "Nothing"
    }

    ComponentHasMounted() {
        getInformation().then((value) => {
            alert(value)
            this.setState({text: value})
        })
    }
    
    render(){
        return(
            <View>
                <Text>{this.state.text}</Text>
            </View>
        ); 
    }
}

function getInformation() {
  return new Promise((resolve, reject) => {
    try {
        AsyncStorage.getItem('@weight:key').then((value) => {
          resolve(value)
        })
      } catch (error) {
        // Error getting data so display sign-in page
        resolve("hi");
      }
  })
}