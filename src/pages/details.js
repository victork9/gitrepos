import React from 'react';
import { View, Text, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { Container } from './styles';

function Detail() {
    const { params } = useRoute()
    // {
    //     name: item.name,
    //     strelas: item.stargazers_count,
    //     dataCriacao: moment(item.created_at).format('DD/M/yyy'),
    //     linguagem: item.language,
    //     linkRepo: item.html_url,
    // descriptio,: item.description
    // }
    return (
        <View style={{ flex: 1, marginHorizontal: 10, }}>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>Detalhes Do repositório</Text>
            <View style={{ backgroundColor: 'black', height: 1.5, width: '100%', opacity: 1 }} />
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Nome: {params.name}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Descrição: {params.description || "Sem Descrição"}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Estrelas: {params.strelas}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Data da Criação: {params.dataCriacao}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Linguagem: {params.linguagem}</Text>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <Text style={{ fontSize: 20, marginTop: 10 }}>Link do repositório:</Text>
                <TouchableOpacity style={{ justifyContent: 'center',height:50,left:10, alignItems: 'center' }} onPress={() => Linking.openURL(params.linkRepo)}>
                    <Text style={{ fontSize: 18, color: 'blue', textAlignVertical: 'center' }}>
                        Link
                       </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default Detail;