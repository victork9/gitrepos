import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../services/api'
import { ViewRepos, ViewRowReposa, DetailButton, ToastAndroid } from '../styles/styleds';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import moment from 'moment'
import { TouchableOpacity } from 'react-native-gesture-handler';

function Repos() {
    const routes = useRoute()
    const navigation = useNavigation()
    const [datas, setDatas] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true)

    async function loadDatas() {
        try {
            const response = await api.get(`/users/${routes.params.user}/repos`)

            setDatas(response.data.splice(0, 5))
            setLoading(false)
        } catch (error) {
            ToastAndroid.show("Falha na conexão", ToastAndroid.LONG)
            setLoading(false)
        }
    }

    useEffect(() => {
        loadDatas()
    }, [])

    function Details(item) { 
        navigation.navigate('details',{
            name: item.name,
            strelas: item.stargazers_count,
            dataCriacao: moment(item.created_at).format('DD/M/yyy'),
            linguagem: item.language,
            linkRepo: item.html_url,
            description: item.description
        })
    }

    function renderItem({ item }) {
        return (
            <ViewRepos>
                <ViewRowReposa >
                    <Text style={{ fontSize: 17, color: 'black' }}>
                        Nome: {item.name}
                    </Text>
                </ViewRowReposa>
                <ViewRowReposa>
                    <Text style={{ fontSize: 17, color: 'black' }}>
                        Data Criação: {moment(item.created_at).format('DD/M/yyy')}
                    </Text>
                </ViewRowReposa>
                <DetailButton onPress={() => Details(item)}>
                    <Text style={{ fontSize: 17, color: 'white' }}>
                        Detalhes
                    </Text>
                </DetailButton>

            </ViewRepos>

        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: '#e1e4e8' }}>
            <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={{ width: 50, height: 50, }} onPress={() => navigation.openDrawer()} >
                    <MaterialCommunityIcons name="menu" size={50} color="grey" />
                </TouchableOpacity>

                <Text style={{ fontSize: 20,marginLeft:'25%', textAlign: 'center', textAlignVertical: 'center' }}>
                    Repositórios
                    </Text>

            </View>
            {loading == true ?
                <ActivityIndicator size={30} color={"#000"} animating={loading} />
                :

                <FlatList
                    onRefresh={() => loadDatas()}
                    refreshing={refreshing}
                    style={{ width: '100%', height: 300, marginTop: 20, marginBottom: 20 }}
                    keyExtractor={item => String(item.id)}
                    renderItem={renderItem}
                    data={datas}
                />
            }
            {/* <ViewRepos></ViewRepos> */}
        </View>
    );
}

export default Repos;