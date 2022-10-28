import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeAreaView, View} from 'react-native';

// import styles from './styles';

const CustomersScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <Text style={tw("text-red-500")}>CustomersScreen</Text>
        </SafeAreaView>
    );
}

export default CustomersScreen;