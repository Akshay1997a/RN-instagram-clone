import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {
    createNativeStackNavigator,
    NativeStackNavigationOptions,
} from 'react-native-screens/native-stack';
import {enableScreens} from 'react-native-screens';
import Login from '../pages/Auth/Login';
import SignUp from '../pages/Auth/Signup';
import Verification from '../pages/Auth/Verification';
import TabNavigator from './TabNavigator';

export type RootStackParamList = {
    Login: undefined;
    SignUp: undefined;
    Verification: undefined;
    tabNavigator: undefined;
};

export function RootStack() {
    enableScreens();
    const Stack = createNativeStackNavigator<RootStackParamList>();

    const screenOptions: NativeStackNavigationOptions = {
        headerShown: false,
        headerTopInsetEnabled: false,
        headerLargeTitleStyle: {
            color: 'red',
        },
        headerStyle: {
            blurEffect: 'systemMaterial',
        },
    };

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="tabNavigator"
                screenOptions={screenOptions}>
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="Verification" component={Verification} />
                <Stack.Screen
                    name="tabNavigator"
                    component={TabNavigator}
                    options={{
                        headerShown: true,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
