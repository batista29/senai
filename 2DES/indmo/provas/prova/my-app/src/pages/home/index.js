import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => { navigation.navigate("Registros") }}>
        <View style={styles.boxImg}><Image style={styles.img} source={require('../../../assets/vacinacao.png')} /></View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { navigation.navigate("Registros") }}>
        <View style={styles.boxImg}><Image style={styles.img} source={require('../../../assets/imagemcaneta.png')} /></View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: '3vh',
  },
  img: {
    width: "90px",
    height: "90px",
    padding: '2vh'
  },
  boxImg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    width: "150px",
    height: "150px",
    margin: '2vh',
    borderRadius: "10%",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  }
});