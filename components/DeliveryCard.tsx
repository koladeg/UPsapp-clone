import React from 'react';
import { View, Text } from 'react-native';

type Props ={
    order: Order
}

const DeliveryCard = ({order}: Props) => {
    return (
        <View>
            <Text>DeliveryCard</Text>
        </View>
    );
}

export default DeliveryCard;