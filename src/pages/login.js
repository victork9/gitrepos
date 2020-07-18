import React, { useState } from 'react';
import { Image, Text, ToastAndroid } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styled from 'styled-components/native';

import { Container, Button, Input } from '../styles/styleds';
import api from '../services/api';

function Login() {
    const [user, setUser] = useState('')
    const navigation = useNavigation()

    async function verificaLogin() {
        if (user == '') {
            ToastAndroid.show("Por favor, Insira o usuário", ToastAndroid.LONG)
        } else {
            try {
                const response = await api.get(`users/${user}`)


                navigation.navigate('Drawer', {
                    user: user
                })

            }
            catch (error) {
                const error2 = error.toString()

                if (error2.includes("404")) {
                    ToastAndroid.show("Usuário inválido", ToastAndroid.LONG)
                } else {
                    ToastAndroid.show("Falha na conexão", ToastAndroid.LONG)
                }

            }
        }
    }
    return (
        <Container>
            <Image style={{ width: 150, height: 150, borderRadius: 400 / 2, marginBottom: 50 }} source={require('../assets/baixados.png')} />
            <Input
                keyboardType={'default'}
                autoCapitalize={'none'}
                placeholder={"Insira seu usuario do GitHub"}
                onChangeText={(text) => setUser(text)}
            />

            <Button
                onPress={verificaLogin}

            >
                <Text style={{ fontSize: 17, textAlignVertical: 'center', color: '#fff' }}>Acessar</Text>

            </Button>
        </Container>
    );
}

export default Login;