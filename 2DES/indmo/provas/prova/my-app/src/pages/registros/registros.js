import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from 'react';

export default function Registros({ navigation }) {

  const [infoNomePet, setInfoNomePet] = useState("");
  const [infoNomeVeterinario, setInfoVeterinario] = useState("");
  const [infoNomeVacina, setInfoVacina] = useState("");
  const [infoData, setInfoData] = useState("");

  const addInfoPet = async (i) => {
    try {
      let pet = new Array()

      if (localStorage.hasOwnProperty("dado")) {
        pet = JSON.parse(localStorage.getItem("dado"))
      }

      pet.push({ pet: infoNomePet, veterinario: infoNomeVeterinario, vacina: infoNomeVacina, data: infoData })
      navigation.navigate('Historico')
      await AsyncStorage.setItem("dado", JSON.stringify(pet))

    } catch (err) {
      console.log(err)
    }
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder='Nome do pet' value={infoNomePet} onChangeText={(val) => { setInfoNomePet(val) }}></TextInput>
      <TextInput style={styles.input} placeholder='Nome do médico veterinário' value={infoNomeVeterinario} onChangeText={(val) => { setInfoVeterinario(val) }}></TextInput>
      <TextInput style={styles.input} placeholder='Nome da vacina' value={infoNomeVacina} onChangeText={(val) => { setInfoVacina(val) }}></TextInput>
      <TextInput style={styles.input} placeholder='Data da aplicação' value={infoData} onChangeText={(val) => { setInfoData(val) }}></TextInput>
      <TouchableOpacity style={styles.botao}>
        <Text style={styles.texto} onPress={() => { addInfoPet() }}>Registrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#505050',
    alignItems: 'center',
  },
  input: {
    border: '1px solid #EFEFEF',
    backgroundColor: '#EFEFEF',
    borderRadius: '5px',
    height: '50px',
    width: '270px',
    marginTop: '3vh',
    color: '#505050'
  },
  botao: {
    backgroundColor: '#8A66FA',
    borderRadius: '5px',
    height: '55px',
    width: '270px',
    marginTop: '3.5vh',
    justifyContent: 'center'
  },
  texto: {
    fontSize: '25px',
    color: "white",
    textAlign: 'center',
  }
});
