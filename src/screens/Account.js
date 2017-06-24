import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Account extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Account',
        tabBarIcon: () => (<Icon size={24} color='rgba(255,255,255,0.7)' name='account-circle' />)
    }
    
    render(){
        return(
            <View>
                <Text>This is the account page</Text>
            </View>
        ); 
    }
}