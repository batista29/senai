import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';

const chamados = [
    {
        "user_id": 1,
        "chamados": [
            {
                "titulo": "Manutenção de Roteador",
                "descricao": "Cliente reclamou que está sem internet, possível troca"
            },
            {
                "titulo": "Mudança de Endereço",
                "descricao": "Fazer a instalação na nova instalação"
            },
            {
                "titulo": "Recolher equipamento",
                "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
            }
        ]
    },
    {
        "user_id": 2,
        "chamados": [
            {
                "titulo": "Recolher equipamento",
                "descricao": "Assinatura Cancelada, recolher os equipamentos da instalação"
            },
            {
                "titulo": "Mudança de Endereço",
                "descricao": "Fazer a instalação na nova instalação"
            },
            {
                "titulo": "Manutenção de Roteador",
                "descricao": "Cliente reclamou que está sem internet, possível troca"
            }
        ]
    }
]

export default function App({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.cadastro1}>
                <TextInput style={styles.input} placeholder='pesquisar'></TextInput>
            </View>
            <View>
                <Text>
                    {
                        chamados.map((info, indice) => {
                            return (
                                <View>
                                    <Text style={styles.info}>{info.chamados[0].titulo}</Text>
                                    <Text style={styles.info2}>{info.chamados[0].descricao}</Text>
                                    <Text style={styles.info}>{info.chamados[1].titulo}</Text>
                                    <Text style={styles.info2}>{info.chamados[1].descricao}</Text>
                                    <Text style={styles.info}>{info.chamados[2].titulo}</Text>
                                    <Text style={styles.info2}>{info.chamados[2].descricao}</Text>
                                </View>
                            )
                        })
                    }
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        border: '1px solid #D5D5D5',
        backgroundColor: '#FFF',
        borderRadius: '5px',
        height: '40px',
        width: '300px',
        borderBottomColor: '#330066',
    },
    info: {
        fontSize: "2.5vh",
        fontWeight: 'bold',
        paddingLeft: '2vh',
        paddingTop: '2.6vh'
    },
    info2: {
        paddingLeft: '2vh',
        fontSize: "1.7vh",
        paddingTop: '0.3vh'
    }
});