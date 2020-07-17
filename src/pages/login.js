import React from 'react';
import { View, Button, } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Container = styled.View`
flex: 1,
alignItems: 'center',
justifyContent: 'center'
`;

// import { Container } from './styles';
const Touch = styled.TouchableOpacit
const pages = () => {
    const navigation = useNavigation()
    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Drawer')}
                title="Go to notifications"
            />
        </Container>
    );
}

export default pages;