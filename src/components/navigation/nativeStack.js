import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../../screens/home/homeScreen';



export default function MyNativeStack() {

    const NativeStack = createNativeStackNavigator();
    return (
        <NavigationContainer>
            <NativeStack.Navigator>

                <NativeStack.Screen
                    name="Home_Screen"
                    component={HomeScreen} />

            </NativeStack.Navigator>
        </NavigationContainer>
    );
}