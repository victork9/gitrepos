import React from 'react';
import { View, Text, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ViewRowDetails,TextDescription,ButtonLink,TextLink } from '../styles/styleds';

function Detail() {
    const { params } = useRoute()
   
    return (
        <View style={{ flex: 1, marginHorizontal: 10, }}>

            <ViewRowDetails>
                <TextDescription>Nome: {params.name}</TextDescription>
            </ViewRowDetails>
            <ViewRowDetails>
                <TextDescription>Descrição: {params.description || "Sem Descrição"}</TextDescription>
            </ViewRowDetails>
            <ViewRowDetails>
                <TextDescription>Estrelas: {params.strelas}</TextDescription>
            </ViewRowDetails>
            <ViewRowDetails>
                <TextDescription>Data da Criação: {params.dataCriacao}</TextDescription>
            </ViewRowDetails>
            <ViewRowDetails>
                <TextDescription>Linguagem: {params.linguagem}</TextDescription>
            </ViewRowDetails>
            <ViewRowDetails>
                <TextDescription>Link do repositório:</TextDescription>
                <ButtonLink  onPress={() => Linking.openURL(params.linkRepo)}>
                    <TextLink>
                        Link
                       </TextLink>
                </ButtonLink>
            </ViewRowDetails>
        </View>
    );
}

export default Detail;