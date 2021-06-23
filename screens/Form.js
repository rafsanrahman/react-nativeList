import React from 'react'
import { View, StyleSheet, TextInput, Text, Button, Alert } from 'react-native'

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }
    submit() {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => {

                console.log(json)

            Alert.alert(
                "Welcome "+json.name +" your email is " + json.email
            )
            
            }
            );
    }
    render() {
        return (<View style={{ margin: 20, marginTop: 100 }}>
            <TextInput
                placeholder="enter Name"
                onChangeText={(text) => { this.setState({ name: text }) }}
                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
            />

            <TextInput
                placeholder="enter email"
                onChangeText={(text) => { this.setState({ email: text }) }}
                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
            />

            <TextInput
                placeholder="enter password"
                secureTextEntry={true}
                onChangeText={(text) => { this.setState({ password: text }) }}
                style={{ borderWidth: 2, borderColor: 'skyblue', margin: 20 }}
            />
            <Button title="submit" onPress={() => { this.submit() }} />

        </View>)


    }


}

export default App;