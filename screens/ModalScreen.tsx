import React from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {Icon} from "@rneui/themed";
import {useTailwind} from "tailwind-rn/dist";
import {CompositeNavigationProp, useNavigation, useRoute} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import {GET_CUSTOMERS} from "../graphql/queries";
import useCustomerOrders from "../hooks/useCustomerOrders";
import DeliveryCard from "../components/DeliveryCard";

type ModalScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, 'MyModal'>
    >;

type ModalScreenRouteProp = RouteProp<RootStackParamList, 'MyModal'>

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>();
    const {params: {name, userID}} = useRoute<ModalScreenRouteProp>()
    const { loading, error, data } = useCustomerOrders(userID);

    return (
        <View>
            <TouchableOpacity
                style={tw('absolute right-5 top-5 z-10')}
                onPress={navigation.goBack}
            >
                <Icon
                    name="closecircle"
                    type="antdesign"
                />
            </TouchableOpacity>
            <View>
                <View>
                    <Text>{name}</Text>
                    <Text>deliveries</Text>
                </View>
            </View>

            <FlatList
                data={orders}
                keyExtractor={order => order.trackingId}
                renderItem={ ({item: order}) => <DeliveryCard order={order} />}
            />
        </View>
    );
}

export default ModalScreen;