import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreens from '../view/HomeScreens';
import LoginScreens from '../view/LoginScreens';
import SignupScreens from '../view/SignupScreens';
import Wellcome from '../view/Wellcome';

const Stack = createNativeStackNavigator();

function LoginNavigation() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='WelcomeScreens' >
                <Stack.Screen options={{headerShown: false}} name="WelcomeScreens" component={Wellcome}/>
                <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreens} />
                <Stack.Screen options={{headerShown: false}} name="Signup" component={SignupScreens}/>
                <Stack.Screen options={{headerShown: false}} name="HomeScreens" component={HomeScreens} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
export default LoginNavigation;