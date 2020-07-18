import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../services/api'
import { ViewRepos, ViewRowReposa } from '../styles/styleds';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

function Repos() {
    const routes = useRoute()
    // console.log(routes.params.user)
    const [datas, setDatas] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    async function loadDatas() {
        try {
            const response = await api.get(`/users/${routes.params.user}/repos`)
            console.log(response.data.splice(0, 3))
            // while(i < response.data.l)
            setDatas(response.data.splice(0, 5))
        } catch (error) {

        }
    }

    useEffect(() => {
        loadDatas()
    }, [])

    function renderItem({ item }) {
        return (
            <ViewRepos onLayout={(event) => { console.log(event) }}>
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
                    <Text style={{ fontSize: 17, flex: 1 }}>
                        Linguagem: {item.language || "Sem Descrição"}
                    </Text>
                </ViewRowReposa>
            </ViewRepos>

        )
    }
    return (
        <>
            <Text style={{ fontSize: 20, textAlign: 'center', marginTop: 10 }}>

                <MaterialCommunityIcons style={{ marginTop: 10 }} name="archive" size={30} color={"blue"} />
            Repositórios
            </Text>
            <FlatList
                onRefresh={() => loadDatas()}
                refreshing={refreshing}
                style={{ width: '100%', height: 300, marginTop: 20, marginBottom: 20 }}
                keyExtractor={item => String(item.id)}
                renderItem={renderItem}
                data={datas}
            />
            {/* <ViewRepos></ViewRepos> */}
        </>
    );
}

export default Repos;