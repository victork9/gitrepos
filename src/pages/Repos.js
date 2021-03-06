import React, { useEffect, useState } from 'react';
import { FlatList,  ActivityIndicator, View } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import api from '../services/api'
import { ViewRepos, ViewRowReposa, DetailButton, ToastAndroid, TextFlat, viewRowContainer, ViewRowTop, MenuButton, TextTop } from '../styles/styleds';
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
        navigation.navigate('details', {
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
                    <TextFlat>
                        Nome: {item.name}
                    </TextFlat>
                </ViewRowReposa>
                <ViewRowReposa>
                    <TextFlat>
                        Data Criação: {moment(item.created_at).format('DD/M/yyy')}
                    </TextFlat>
                </ViewRowReposa>
                <DetailButton onPress={() => Details(item)}>
                    <TextFlat style={{ color: 'white' }}>
                        Detalhes
                    </TextFlat>
                </DetailButton>

            </ViewRepos>

        )
    }
    return (
        <View style ={{flex:1, backgroundColor: '#e1e4e8'}}>
            <ViewRowTop>
                <MenuButton onPress={() => navigation.openDrawer()} >
                    <MaterialCommunityIcons name="menu" size={50} color="grey" />
                </MenuButton>

                <TextTop  style ={{textAlignVertical:'center'}}>
                    Repositórios
                    </TextTop>

            </ViewRowTop>
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
         
        </View>
    );
}

export default Repos;