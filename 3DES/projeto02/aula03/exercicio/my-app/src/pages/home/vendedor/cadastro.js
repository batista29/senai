import { StyleSheet, TextInput, View, Image, Text, TouchableOpacity } from "react-native";
import { useState } from 'react'

export default function Login({ navigation }) {

  const [nome, setNome] = useState("");
  const [salario, setSalario] = useState("");
  const [setorId, setSetorId] = useState("");


  let dados = {
    nome: nome,
    salario: Number(salario),
    setorId: Number(setorId)
  }

  const userLogin = () => {
    fetch("http://localhost:3000/vendedor"
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
        return console.log("OI"+res)
      })
      .then(data => {
        return console.log(data)
      })
  }



  return (
    <View style={styles.main}>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cadastrar vendedor</Text>
        <Text>Nome</Text>
        <TextInput
          style={styles.input}
          value={nome}
          onChangeText={(value) => {
            setNome(value);
          }}
        ></TextInput>
        <Text>Salario</Text>

        <TextInput
          style={styles.input}
          value={salario}
          onChangeText={(value) => {
            setSalario(value);
          }}
        ></TextInput>

        <Text style={styles.titulo}>id do setor</Text>
        <TextInput
          style={styles.input}
          value={setorId}
          onChangeText={(value) => {
            setSetorId(value);
          }}
        ></TextInput>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            userLogin()
          }}
        >
          <Text style={styles.title}>Cadastrar</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    backgroundColor: "#0C153C",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    height: 280,
    width: 280,
    backgroundColor: "#cdcdd4",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40
  },
  input: {
    backgroundColor: "#fff",
    margin: 5,
  },
  titulo: {
    margin: 10,
  },
  title: {
    color: "#fff",
  },
  title2: {
    color: "#fff",
  },
  button: {
    backgroundColor: "#001B6B",
  },
  button2: {
    marginTop: '10px',
    backgroundColor: "#001B6B",
  },
});
