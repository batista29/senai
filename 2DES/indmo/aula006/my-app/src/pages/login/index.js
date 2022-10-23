import React from 'react';
import { StyleSheet, View, Text, Image, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';

export default function App({ navigation }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  
  
  const users = [
    {
      "id": 1,
      "email": "user01@empresa.com",
      "senha": "teste1234",
    },
    {
      "id": 2,
      "email": "user02@empresa.com",
      "senha": "1234teste",
    }
  ]
  const login = () => {
    {
      users.map((info, indice) => {
        if (info.email == email) {
          if (info.senha == senha) {
            navigation.navigate('Home', {"id" : info.id})
          }
        }
      })
    }
  }

  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require('../../assets/logo.png')} />
      <View style={styles.cadastro1}>
        <TextInput style={styles.input} placeholder='email' onChangeText={(email) => { setEmail(email) }}></TextInput>
      </View>
      <View style={styles.cadastro2}>
        <TextInput style={styles.input} placeholder='senha' onChangeText={(senha) => { setSenha(senha) }}></TextInput>
      </View>
      <View style={styles.enviar}>
        <TouchableOpacity style={styles.botao} onPress={login}>
          <Text style={styles.texto}>Login</Text>
        </TouchableOpacity>
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
  logo: {
    width: "150px",
    height: "150px",
  },
  input: {
    border: '1px solid #D5D5D5',
    backgroundColor: '#FFF',
    borderRadius: '5px',
    height: '30px',
    width: '250px',
    borderBottomColor: '#330066',
  },
  cadastro1: {
    paddingTop: '50px'
  },
  cadastro2: {
    paddingTop: '10px'
  },
  enviar: {
    paddingTop: '30px',
    textAlign: 'center'
  },
  botao: {
    border: '1px solid #D5D5D5',
    backgroundColor: '#6757D1',
    borderRadius: '5px',
    height: '30px',
    width: '250px',
  },
  texto: {
    fontSize: '20px',
    color: "white"
  }
});