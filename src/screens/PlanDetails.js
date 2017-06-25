import React from 'react';
import { View, Text } from 'react-native';

export default class PlanDetails extends React.Component {    
    static navigationOptions = {
        title: 'Plan Details',
    }
    
    render(){
        return(
            <View>
                <Text>This is the Plan details page</Text>
            </View>
        ); 
    }
}