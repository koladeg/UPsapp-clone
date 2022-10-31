import React from 'react';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import TabNavigator from "./TabNavigator";

export type RootStackParamList = {
    Main: undefined;
    MyModal: { userId: string, name: string }
    Order: { order: any }
}

const RootStack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator}/>
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default RootNavigator;