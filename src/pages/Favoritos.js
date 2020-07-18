import React, { useEffect, useState } from 'react';
import { FlatList, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import api from '../services/api'
import { ViewRepos, ViewRowReposa } from '../styles/styleds';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
function Favoritos() {
    const routes = useRoute()
    console.log(routes.params.user)
    const [datas, setDatas] = useState([])
    const [refreshing, setRefreshing] = useState(false);

    async function loadDatas() {
        try {
            const response = await api.get(`/users/${routes.params.user}/starred`)
          
            setDatas(response.data.splice(0, 5))
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
            <MaterialIcons name="stars" size={30} color={"blue" } />
                Favoritos
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

export default Favoritos;