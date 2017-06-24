import React from 'react';
import { NavigationComponent } from 'react-native-material-bottom-navigation';
import { TabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ExtraIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Workouts from '../screens/Workouts';
import Plan from '../screens/Plan';
import Progress from '../screens/Progress';
import Account from '../screens/Account';

export default TabNavigator({
    Workouts: { screen: Workouts },
    Plan: { screen: Plan },
    Progress: { screen: Progress },
    Account: { screen: Account }
}, {
    tabBarComponent: NavigationComponent,
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    tabBarOptions: {
        bottomNavigationOptions: {
            labelColor: 'rgba(255, 255, 255, 0.7)',
            rippleColor: 'white',
            backgroundColor: '#243342',
            activeLabelColor: '#16a085',
            tabs: {
                Workouts: {
                    activeIcon: <Icon size={24} color='#16a085' name='fitness-center' />
                },
                Plan: {
                    activeIcon: <Icon size={24} color='#16a085' name='event' />
                },
                Progress: {
                    activeIcon: <Icon size={24} color='#16a085' name='trending-up' />
                },
                Account: {
                    activeIcon: <Icon size={24} color='#16a085' name='account-circle' />
                }
            }
        }
    }
});