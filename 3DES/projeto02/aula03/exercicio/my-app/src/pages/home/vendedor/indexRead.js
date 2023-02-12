import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useEffect, useState } from 'react'

export default function Main() {

  const [vendedor, setVendedor] = useState([])

  useEffect(() => {
    fetch("http://192.168.1.7:3000/vendedor")
      .then(res => { return res.json() })
      .then(data => {
        setVendedor(data)
      })
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          vendedor.map((post, index) => {
            console.log(post)
            return (
              <View key={index} style={styles.bloco}>
                <Text style={styles.texto}>Nome: {post.nome}</Text>
                <Text style={styles.texto}>Sálario: {post.salario}</Text>
                <Text style={styles.texto}>Setor: {post.Setor.nome}</Text>
              </View>
            )
          })
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bloco: {
    height: '230px',
    width: '370px',
    border: '1px solid white',
    marginTop: '30px',
    backgroundColor: 'rgb(7, 2, 30)',
    textAlign: 'center',
    justifyContent: 'center'
  },
  texto: {
    marginBottom: 5,
    fontSize: 22,
    color: 'white',
    fontFamily: 'Arial',
  }
});
