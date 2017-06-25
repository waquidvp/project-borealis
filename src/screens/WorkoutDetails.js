import React from 'react';
import { View, Text } from 'react-native';

export default class WorkoutDetails extends React.Component {    
    static navigationOptions = {
        title: 'Workout Details',
    }
    
    render(){
        return(
            <View>
                <Text>This is the workout details page</Text>
            </View>
        ); 
    }
}