import { useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native'

export default function addPubli() {

    const [descricao, setDescricao] = useState("")
    const [horario_tarefa, setHorario_tarefa] = useState("");
    const [horario_encerramento, setHorario_encerramento] = useState("");
    const [Status_tarefa, setStatus_tarefa] = useState("");

    var dados = {
        id_tarefa:null,
        descricao: descricao,
        horario_tarefa:horario_tarefa ,
        horario_encerramento: horario_encerramento,
        Status_tarefa: Status_tarefa,
    }

    console.log(dados)

    const addTarefa = () => {
        fetch("http://10.87.207.35:3000/tarefas/new"
            , {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(dados)
            }
        )
            .then(res => {
                if (res.status == 201) {
                    return alert("Feito")
                } else {
                    return alert("erro")
                }
            })
            
            .then(data => {
                return data
            })
    }

    return (
        <ScrollView style={styles.scroll}>
            <View style={styles.container}>
                <Text style={styles.texto}>DIGITE A DESCRICAO</Text>
                <TextInput
                    style={styles.input}
                    value={descricao}
                    onChangeText={(value) => {
                        setDescricao(value);
                    }}
                ></TextInput>
                <Text style={styles.texto}>ESCOLHA O HORARIO DA TAREFA</Text>
             
                 <TextInput
                    style={styles.input}
                    value={horario_tarefa}
                    onChangeText={(value) => {
                        setHorario_tarefa(value);
                    }}
                ></TextInput>
                <Text style={styles.texto}>ESCOLHA O HORÁRIO DE ENCERRAMENTO</Text>
                <TextInput
                    style={styles.input}
                    value={horario_encerramento}
                    onChangeText={(value) => {
                        setHorario_encerramento(value);
                    }}
                ></TextInput>

                <Text style={styles.texto}>QUAL O STATUS? (ABERTO, FINALIZADO OU CANCELADO)</Text>
                <TextInput
                    style={styles.input}
                    value={Status_tarefa}
                    onChangeText={(value) => {
                        setStatus_tarefa(value);
                    }}
                ></TextInput>

                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        addTarefa()
                    }}
                >
                    <Text style={styles.title}>enviar</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: 'rgba(191, 233, 246, 0.802)'
    
    },
    container: {
        backgroundColor: "#3299CC",
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        marginTop: '15vh',
        border: '1px solid #000066',
        height: '40vh',
        width: '45vh'
    },
    texto: {
        marginBottom: 5,
        fontSize: 16,
        color: 'white',
        fontFamily: 'Arial',
    },
    input: {
        backgroundColor: "#fff",
        marginBottom: '2vh',
        color: 'black'
    },
    button: {
        backgroundColor: "white",
    },
    title: {
        color: 'black'
    }
})