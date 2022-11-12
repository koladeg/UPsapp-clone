import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Icon} from "@rneui/themed";
import {useTailwind} from "tailwind-rn/dist";
import {CompositeNavigationProp, useNavigation} from "@react-navigation/native";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import {TabStackParamList} from "../navigator/TabNavigator";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootNavigator";

type ModalScreenNavigationProp = CompositeNavigationProp<
    BottomTabNavigationProp<TabStackParamList>,
    NativeStackNavigationProp<RootStackParamList, 'MyModal'>
    >;

const ModalScreen = () => {
    const tw = useTailwind();
    const navigation = useNavigation<ModalScreenNavigationProp>();

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
        </View>
    );
}

export default ModalScreen;