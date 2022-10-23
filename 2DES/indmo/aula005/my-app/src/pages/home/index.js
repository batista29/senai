import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';

export default function Home({ navigation }) {

    const data = [
        {
            "id": 1,
            "tipo": 2,
            "nome": "Escola",
            "horario": "07:30 - 11:30",
            "img":""
        },
        {
            "id": 2,
            "tipo": 1,
            "nome": "Consulta Médica",
            "horario": "13:00 - 13:40",
            "img":""
        },
        {
            "id": 3,
            "tipo": 3,
            "nome": "Ir ao mercado",
            "horario": "16:30 - 17:00",
            "img":""
        },
        {
            "id": 4,
            "tipo": 4,
            "nome": "Ir ao cinema",
            "horario": "20:00 - 22:30",
            "img":""
        },
    ]



    return (
        <View style={{ height: "100%", background: "linear-gradient(#000080, #4169e1)" }}>
            {
                data.map((datas, indice) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("Descricao")}}>
                            <Image style={styles.icon} source={datas.img}></Image>
                            <Text style={styles.info}>{datas.nome}</Text>
                            <Text style={styles.info}>{datas.horario} </Text>
                            <hr style={styles.linha}></hr>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )

}


const styles = StyleSheet.create({
    info: {
        paddingTop: "10px",
        paddingLeft: "10px",
        color: "#fff",
        fontSize: "20px"
    },
    icon: {
        width: "23px",
        height: "23px"
    },
    linha: {
        width: 360
    },
});