import React, {useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import CustomersScreen from "../screens/Customers";
import OrdersScreen from "../screens/OrdersScreen";
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import Colors from "../constants/Colors";

export type TabStackParamList = {
    Customers: undefined;
    Orders: undefined
}

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    })
    return (
        <Tab.Navigator screenOptions={({ route }) =>({
            tabBarActiveTintColor: Colors.primary,
            tabBarInactiveTintColor: "gray",
            tabBarIcon: ({ focused, color, size}) => {
                if (route.name === 'Customers'){
                    return (
                        <Icon
                            name="users"
                            type="entypo"
                            color={focused ? Colors.primary : "gray"}
                        />
                    );
                } else if ( route.name === 'Orders') {
                    return (
                        <Icon
                            name="box"
                            type="entypo"
                            color={focused ? Colors.secondary : "gray"}
                        />
                    );
                }
            }
        })}>
            <Tab.Screen name="Customers" component={CustomersScreen} />
            <Tab.Screen name="Orders" component={OrdersScreen} />
        </Tab.Navigator>
    );
}

export default TabNavigator;