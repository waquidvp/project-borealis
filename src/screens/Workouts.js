import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Workouts extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Workouts',
        tabBarIcon: () => (<Icon size={24} color='rgba(255,255,255,0.7)' name='fitness-center' />)
    }
    
    render(){
        return(
            <View>
                <Text>This is the workout page</Text>
            </View>
        ); 
    }
}