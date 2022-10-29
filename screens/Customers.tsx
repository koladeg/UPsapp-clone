import React from 'react';
import {useTailwind} from 'tailwind-rn/dist';
import {SafeAreaView, View, Text} from 'react-native';

// import styles from './styles';

const CustomersScreen = () => {
    const tw = useTailwind();

    return (
        <SafeAreaView>
            <Text style={tw('text-blue-600')}>CustomersScreen</Text>
        </SafeAreaView>
    );
}

export default CustomersScreen;