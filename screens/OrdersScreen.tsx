import React, {useLayoutEffect, useState} from 'react';
import {View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import {useTailwind} from "tailwind-rn/dist";
import useOrders from "../hooks/useOrders";
import Colors from "../constants/Colors";
import {Button, Image} from "@rneui/themed";
import CustomerCard from "../components/CustomerCard";
import OrderCard from "../components/OrderCard";


type OrdersScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, 'Orders'>
    >;


const OrdersScreen = () => {

    const tw = useTailwind();
    const navigation = useNavigation<OrdersScreenNavigationProp>();
    const { loading, error, orders } = useOrders();
    const [ascending, setAscending] = useState<boolean>(true)

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
            tabBarLabel: ({focused, color}) => (
                <Text style={{color: focused ? Colors.secondary : color, fontSize: 10 }}>
                    Orders
                </Text>
        )
        })
    }, [])

    return (
        <ScrollView style={{backgroundColor: Colors.secondary}}>
            <Image
                source={ { uri: 'https://links.papareact.com/m51' }}
                containerStyle={tw("w-full h-64")}
                PlaceholderContent={<ActivityIndicator />}
            />
            <View>
                <Button
                    color="pink"
                    titleStyle={{ color: "gray", fontWeight: "400"}}
                    style={tw("py-2 px-5")}
                    onPress={() => setAscending(!ascending)}
                >
                    {ascending ? "Showing: Oldest First" : "Showing: Most Recent First"}
                </Button>

                {orders?.sort(( a,b) => {
                        if (ascending) {
                            return new Date(a.createdAt) > new Date(b.createdAt) ? 1: -1;
                        } else {
                            return new Date(a.createdAt) < new Date(b.createdAt) ? 1: -1;
                        }
                    }
                ).map(order => (
                    <OrderCard key={order.trackingId} item={order} />
                ))}
            </View>

        </ScrollView>
    );
}

export default OrdersScreen;