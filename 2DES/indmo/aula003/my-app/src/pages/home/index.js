import { useState } from 'react';
import { Button, StyleSheet, ScrollView, View, TextInput, Text } from 'react-native';

export default function Home({route}) {
    // var cod = route.params.cod;

    var {matricula, nomeFunc} = route.params;

    const [nome, setNome] = useState("");
    const [cargo, setCargo] = useState("");
    const [lista, setLista] = useState([]);

    const cadastrar = () => {
        let nFunc = {
            "nome": nome,
            "cargo": cargo
        }

        setLista([...lista, nFunc]);
    }

    return (
        <View style={styles.container}>
            <Text>{matricula}</Text>
            <Text>{nomeFunc}</Text>
            <TextInput placeholder="Nome do Funcionario" onChangeText={(val) => { setNome(val) }} />
            <TextInput placeholder="Cargo do Funcionario" onChangeText={(val) => { setCargo(val) }} />
            <Button title="Cadastrar funcionario" onPress={() => { cadastrar() }} />
            <ScrollView>
                {
                    lista.map((funcionario, indice) => {
                        return (
                            <View key={indice}>
                                <Text>{funcionario.nome}</Text>
                                <Text>{funcionario.cargo}</Text>
                            </View>
                        )
                    })
                }
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
