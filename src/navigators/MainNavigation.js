import { StackNavigator } from 'react-navigation';

import AndroidBottomNav from './AndroidBottomNav';
import WorkoutDetails from '../screens/WorkoutDetails';
// import PlanDetails from '../screens/PlanDetails';
import CurrentWorkout from '../screens/CurrentWorkout';

export default StackNavigator({
    Home: { screen: AndroidBottomNav },
    WorkoutDetails: { screen: WorkoutDetails },
    // PlanDetails: { screen: PlanDetails },
    CurrentWorkout: { screen: CurrentWorkout }
}, {
    headerMode: 'none'
});