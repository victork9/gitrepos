import React from 'react';

import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

const Container = styled.View`
flex: 1;
align-items: center;
justify-Content: center;
`;

const Button = styled.TouchableOpacity`
background-color:blue;
width: 100%;
height: 40px;
`;
// import { Container } from './styles';

const pages = () => {
    const navigation = useNavigation()
    return (
        <Container>
            <Button
                onPress={() => navigation.navigate('Drawer',  {
                    user : "victork9"
                })}
                title="Go to notifications"
            />
        </Container>
    );
}

export default pages;