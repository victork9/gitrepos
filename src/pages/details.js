import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native'
// import { Container } from './styles';

function Detail() {
    const { params } = useRoute()
    return (
        <View />
    );
}

export default Detail;