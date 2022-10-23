import { View, Text, Button, TouchableOpacity } from 'react-native';

export default function Segunda({ navigation }) {
    const produtos = [
        {
            "nomeProd": "detergente",
            "preco": 1.75,
            "descricao": {
                "marca": "Ype",
                "sabor": "Maça"
            }
        },
        {
            "nomeProd": "Bucha",
            "preco": 6.50,
            "descricao": {
                "marca": "Assolam",
                "sabor": "Inox"
            }
        },
        {
            "nomeProd": "Sabão em Barra",
            "preco":3.50,
            "descricao": {
                "marca": "Ype",
                "sabor": "Coco"
            }
        }
    ];
    return (
        <View>
            {
                produtos.map((produto, indice) => {
                    return(
                        <TouchableOpacity onPress={() => {navigation.navigate("Descricao", {"descricao":produto.descricao})}}>
                            <Text>{produto.nomeProd}</Text>
                            <Text>R$ {produto.preco}</Text>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    )
}