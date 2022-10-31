import React from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/Customers";
import OrdersScreen from "../screens/OrdersScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={CustomersScreen} />
            <Tab.Screen name="Home" component={OrdersScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;