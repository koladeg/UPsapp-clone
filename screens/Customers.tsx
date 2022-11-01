import React, {useLayoutEffect, useState} from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeAreaView, View, Text, ScrollView, ActivityIndicator} from 'react-native';
import {useNavigation, CompositeNavigationProp} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";
import {Image, Input} from "@rneui/themed";
import Colors from "../constants/Colors";

export type CustomerScreenNavigationProp = CompositeNavigationProp<
        BottomTabNavigationProp<TabStackParamList, 'Customers'>,
        NativeStackNavigationProp<RootStackParamList>
    >;

const CustomersScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<CustomerScreenNavigationProp>();
    const [input, setInput] = useState<String>("");

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, [])

    return (
        <ScrollView style={{backgroundColor: Colors.primary}}>
            <Image
                source={ { uri: 'https://links.papareact.com/3jc' }}
                containerStyle={tw("w-full h-64")}
                PlaceholderContent={<ActivityIndicator />}
            />
            <Input
                placeholder="Search by Customer"
                value={input}
                onChangeText={setInput}
                containerStyle={tw("bg-white pt-5 pb-0 px-10")}
            />
        </ScrollView>
    );
}

export default CustomersScreen;