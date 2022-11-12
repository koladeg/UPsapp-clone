import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useQuery} from "@apollo/client";
import useCustomerOrders from "../hooks/useCustomerOrders";
import {useTailwind} from "tailwind-rn/dist";
import {useNavigation} from "@react-navigation/native";
import {CustomerScreenNavigationProp} from "../screens/CustomersScreen";
import {Card, Icon} from "@rneui/themed";
import Colors from "../constants/Colors";

type Props = {
    userID: string;
    name: string;
    email: string;
}

const CustomerCard = ({ email, name, userId }: Props) => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const { loading, error, orders } = useCustomerOrders(userId);

    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('MyModal', {
                name: name,
                userID: userId,
            })
        }>
            <Card containerStyle={tw('p-5 rounded-lg')}>
                <View>
                    <View style={tw('flex-row justify-between')}>
                        <View>
                            <Text style={tw('text-2xl font-bold')}>{name}</Text>
                            <Text style={[tw('text-sm'), {color: Colors.primary}]}>ID: {userId}</Text>
                        </View>
                        <View style={tw('flex-row items-center justify-end')}>
                            <Text style={{ color: Colors.primary }}>{loading ? "loading..." : `${orders.length} x`}</Text>
                            <Icon
                                style={tw('mb-5 ml-auto')}
                                name="box"
                                type="entypo"
                                color={Colors.primary}
                                size={50}
                            />
                        </View>
                    </View>
                </View>
                <Card.Divider />
                <Text>{email}</Text>
            </Card>
        </TouchableOpacity>
    );
}

export default CustomerCard;