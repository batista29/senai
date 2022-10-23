import { StyleSheet, View, Text, Button, TouchableOpacity, Image } from 'react-native';
import ButtonCadastrar from '../../components/buttonCadastrar';

export default function Segunda({ navigation }) {
    const produtos = [
        {
            "nome": "Zyyz food",
            "nota": 4.9,
            "descricao": {
                "endereco": "Rua Indmo",
                "telefone": 19993232329,
                "img": "https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-hamburguer-com-logotipo-fast-food.png"
            },
        },
        {
            "nome": "Larica food",
            "nota": 3.2,
            "descricao": {
                "endereco": "Rua Banco de dados",
                "telefone": 19563434349,
                "img": "https://images.vexels.com/media/users/3/129607/isolated/preview/f526eafda1a791f4a93b1ad7c62161e5-logotipo-1-da-burgers.png"
            }
        },
        {
            "nome": "Futureba Açai",
            "nota": 4.3,
            "descricao": {
                "endereco": "Rua dos perdões",
                "telefone": 19999999999,
                "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
            }
        }
    ];

    const funcao = () => {
        console.log("luciano hulk");
    }

    return (
        <View style={{ height: "100%", background: "linear-gradient(#000080, #4169e1)" }}>
            {
                produtos.map((produto, indice) => {
                    return (
                        <TouchableOpacity onPress={() => { navigation.navigate("Descricao", { "descricao": produto.descricao }) }}>
                            <Text style={styles.info}>Nome: {produto.nome}</Text>
                            <Text style={styles.info}>Nota: {produto.nota} <Image style={styles.icon} source={"https://cdn-icons-png.flaticon.com/512/1828/1828884.png"}></Image></Text>
                            <hr style={styles.linha}></hr>
                        </TouchableOpacity>
                    )
                })
            }
            <View>
                <ButtonCadastrar value="Cadastro" onPress={funcao} />
            </View>
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
    button: {
        width: '80vw',
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: "15px",
        backgroundColor: "#43b5d7"
    },
    textButton: {
        color: "#000",
        fontWeight: "bold",
        fontSize: "1.1rem"
    }
});