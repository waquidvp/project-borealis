import { StackNavigator } from 'react-navigation';

import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import ChooseGoal from '../screens/ChooseGoal';

export default StackNavigator({
    SignUp: { screen: SignUp },
    SignIn: { screen: SignIn },
    ChooseGoal: { screen: ChooseGoal }
}, {
    headerMode: 'none'
});