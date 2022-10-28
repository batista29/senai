import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App({ navigation }) {

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');


    const log = [
        {
            "email": "fulano@gmail.com",
            "senha": "umdoistresquatro",
        },
        {
            "email": "beltrano@ig.com.br",
            "senha": "s3nh4",
        }
    ];

    const login = () => {
        {
            log.map((info, indice) => {
                if (info.email == email) {
                    if (info.senha == senha) {
                        navigation.navigate('Home')
                    }
                }
            })
        }
    }

    return (
        <View style={styles.container}>
            <Image style={styles.dog} source={require('../../../assets/dog.png')} />
            <View style={styles.cadastro1}>
                <TextInput style={styles.input} placeholderTextColor={"#00000077"} placeholder='email' onChangeText={(email) => { setEmail(email) }}></TextInput>
            </View>
            <View style={styles.cadastro2}>
                <TextInput style={styles.input} placeholder='senha' secureTextEntry={true}  placeholderTextColor={"#00000077"} onChangeText={(senha) => { setSenha(senha) }}></TextInput>
            </View>
            <View style={styles.enviar}>
                <TouchableOpacity style={styles.botao} onPress={login}>
                    <Text style={styles.texto}>Conectar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#505050',
        alignItems: 'center',
        justifyContent: 'center',
    },
    dog: {
        width: "250px",
        height: "250px",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24,
    },
    input: {
        border: '1px solid #D5D5D5',
        backgroundColor: '#FFF',
        borderRadius: '5px',
        height: '40px',
        width: '250px',
    },
    cadastro1: {
        paddingTop: '50px'
    },
    cadastro2: {
        paddingTop: '10px'
    },
    enviar: {
        paddingTop: '30px',
        textAlign: 'center'
    },
    botao: {
        backgroundColor: '#8A66FA',
        borderRadius: '5px',
        height: '45px',
        width: '250px',
    },
    texto: {
        fontSize: '30px',
        color: "white"
    }
});