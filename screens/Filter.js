import React, {useState, useEffect} from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text, TextInput, Button } from 'react-native';


const Filter = ({navigation}) => {
    const [filteredData, setfilteredData] = useState([]);
    const [masterData, setmasterData] = useState([]);
    const [search, setsearch] = useState('');

    useEffect(() => {
        fetchPosts();
        return () => {


        }
    }, [])


    const fetchPosts = () => {
        const apiURL = 'https://jsonplaceholder.typicode.com/posts';
        fetch(apiURL)
            .then((response) => response.json())
            .then((responseJson) => {
                setfilteredData(responseJson);
                setmasterData(responseJson);
            }).catch((error) => {
                console.error(error);
            })
    }

    const searchFilter = (text) => {
        if (text) {
            const newData = masterData.filter((item) => {
                const itemData = item.title ? item.title.toUpperCase()

                    : ''.toUpperCase();

                const textData = text.toUpperCase();
                return itemData.indexOf(textData) > -1;
            });
            setfilteredData(newData);
            setsearch(text);
        } else {
            setfilteredData(masterData);
            setsearch(text);
        }
    }

    const ItemView = ({ item }) => {
        return (
            <Text style={styles.itemStyle}>
                {item.id}{'. '}{item.title.toUpperCase()}
            </Text>
        )

    }

    const ItemSeparatorView = () => {
        return (
            <View
                style={{ height: 0.5, width: '100%', backgroundColor: '#c8c8c8' }}
            />
        )
    }






    return (
        <SafeAreaView style={{ flex: 1 }}>
            <View style={styles.container}>
                <Button
                title='Form'
                onPress={() => {navigation.navigate("Form")}

                }
                />
                <TextInput
                    style={styles.textInputStyle}
                    value={search}
                    placeholder="Search Here"
                    underlineColorAndroid="transparent"
                    onChangeText={(text) => searchFilter(text)}
                />


                <FlatList
                    data={filteredData}
                    keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={ItemSeparatorView}
                    renderItem={ItemView}
                />

            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',

    },
    itemStyle: {
        padding: 15
    },
    textInputStyle: {
        height: 50,
        borderWidth: 1,
        paddingLeft: 20,
        margin: 5,
        borderColor: '#009688',
        backgroundColor: 'white'
    }
});
export default Filter
