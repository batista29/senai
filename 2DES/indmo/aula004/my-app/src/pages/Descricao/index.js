import { StyleSheet, View, Text, Image } from 'react-native';

export default function Descricao({ route }) {
    var { descricao } = route.params;

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={descricao.img} />
            <Text style={styles.info}>Endereço :{descricao.endereco}</Text>
            <Text style={styles.info}>Telefone :{descricao.telefone}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#84BEEB',
        alignItems: 'center',
        justifyContent: 'center'
    },
    logo: {
        width: "220px",
        height: "220px"
    },
    info: {
        paddingTop:"15px",
        fontSize: "25px"
    }
});