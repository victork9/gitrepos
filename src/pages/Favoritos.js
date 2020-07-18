import React, { useEffect, useState } from 'react';
import { FlatList, Text, ActivityIndicator } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../services/api'
import { ViewRepos, ViewRowReposa } from '../styles/styleds';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
function Favoritos() {
    const routes = useRoute()
    console.log(routes.params.user)
    const [datas, setDatas] = useState([])
    const [refreshing, setRefreshing] = useState(false);
    const [loading, setLoading] = useState(true)

    async function loadDatas() {
        try {
            const response = await api.get(`/users/${routes.params.user}/starred`)

            setDatas(response.data.splice(0, 5))
            setLoading(false)
        } catch (error) {

        }
    }

    useEffect(() => {
        loadDatas()
    }, [])

    function renderItem({ item }) {
        return (
            <ViewRepos>
                <ViewRowReposa >
                    <Text style={{ fontSize: 17, }}>
                        Nome: {item.name}
                    </Text>
                </ViewRowReposa>
                <ViewRowReposa>
                    <Text style={{ fontSize: 17, }}>
                        Descrição: {item.description || "Sem Descrição"}
                    </Text>
                </ViewRowReposa>
                <ViewRowReposa >
                    <Text style={{ fontSize: 17, }}>
                        Linguagem: {item.language || "Sem Descrição"}
                    </Text>
                </ViewRowReposa>
            </ViewRepos>

        )
    }
    return (
        <>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>
                Favoritos
                </Text>
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
        </>
    );
}

export default Favoritos;