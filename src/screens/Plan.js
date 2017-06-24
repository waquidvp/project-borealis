import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Plan extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Plan',
        tabBarIcon: () => (<Icon size={24} color='rgba(255,255,255,0.7)' name='event' />)
    }
    
    render(){
        return(
            <View>
                <Text>This is the Plan page</Text>
            </View>
        ); 
    }
}