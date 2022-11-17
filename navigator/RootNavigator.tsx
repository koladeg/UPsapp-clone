import React from 'react';
import { View, Text } from 'react-native';
import {createNativeStackNavigator} from "react-native-screens/native-stack";
import TabNavigator from "./TabNavigator";
import ModalScreen from "../screens/ModalScreen";
import OrderScreen from "../screens/OrderScreen";

export type RootStackParamList = {
    Main: undefined;
    MyModal: { userId: string, name: string }
    Order: { order: Order }
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Group>
                <RootStack.Screen name="Main" component={TabNavigator}/>
            </RootStack.Group>

            <RootStack.Group screenOptions={{
                stackPresentation:'modal'
            }}>
                <RootStack.Screen name="MyModal" options={{ headerShown: false}} component={ModalScreen}/>
            </RootStack.Group>

            <RootStack.Group>
                <RootStack.Screen name="Order" component={OrderScreen}/>
            </RootStack.Group>
        </RootStack.Navigator>
    );
}

export default RootNavigator;