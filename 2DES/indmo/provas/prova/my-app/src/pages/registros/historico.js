import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Historico({ navigation }) {

  const [busca, setBusca] = useState("");
  const [lida, setLida] = useState([]);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("dado");

      setLida(JSON.parse(value))
    } catch (err) {
      console.log(err);
    }
  }

  if (lida.length == 0) getData();

  return (
    <View style={styles.container}>
      <TextInput style={styles.inp} placeholder='Digite para buscar...' onChangeText={(lida) => setBusca(lida)} />
      {
        lida.map((item, indice) => {
          console.log(item)
          if (item.pet.toLowerCase().includes(busca.toLowerCase()) || item.veterinario.toLowerCase().includes(busca.toLowerCase()) || item.vacina.toLowerCase().includes(busca.toLowerCase()) || item.data.toLowerCase().includes(busca.toLowerCase())) {
            return (
              <View style={styles.petsInfo}>
                <Text style={styles.infos}>PET: {item.pet}</Text>
                <Text style={styles.infos}>Veterinario: {item.veterinario}</Text>
                <Text style={styles.infos}>Vacina: {item.vacina}</Text>
                <Text style={styles.infos}>Data: {item.data}</Text>
              </View>
            )
          }
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050',
    alignItems: 'center',
  },
  infos: {
    paddingLeft: '2vh',
    color: 'white',
    fontSize: '19px'
  },
  petsInfo: {
    marginTop: '3vh',
    height: '150px',
    width: '300px',
    justifyContent: 'center',
    backgroundColor: '#505050',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  inp:{
    height:'45px',
    width:'320px',
    marginTop:'2vh',
    border:'1px solid white',
    borderRadius:'10px',
    backgroundColor:"#EFEFEF"
  }
});
