import React, {useLayoutEffect} from 'react';
import { View, Text } from 'react-native';
import {useTailwind} from "tailwind-rn/dist";
import {CompositeNavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import Colors from "../constants/Colors";
import DeliveryCard from "../components/DeliveryCard";

type OrderScreenRouteProp = RouteProp<RootStackParamList, 'Order'>

type OrdersScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList, "Orders">,
    NativeStackNavigationProp<RootStackParamList>
    >;


const OrderScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const {params: { order }} = useRoute<OrderScreenRouteProp>()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerTitle: order.trackingItems.customer.name,
            headerTintColor: Colors.secondary,
            headerTitleStyle: { color: "black" },
            headerBackTitle: "Deliveries",
            tabBarLabel: ({focused, color}) => (
                <Text style={{color: focused ? Colors.secondary : color, fontSize: 10 }}>
                    Orders
                </Text>
            )
        })
    }, [order])

    return (
        <View style={tw("-mt-2")}>
            <DeliveryCard order={order} fullWidth />
        </View>
    );
}

export default OrderScreen;