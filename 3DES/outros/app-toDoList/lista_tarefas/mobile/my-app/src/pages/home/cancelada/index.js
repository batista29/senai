import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function Main() {
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    fetch("http://10.87.207.35:3000/tarefas/cancelada")
      .then(res => { return res.json() })
      .then(data => {
        setTarefas(data)
      })
  })

  return (
    <ScrollView>
      <View style={styles.container}>
        {
          tarefas.map((e, index) => {
              return (
                <View key={index} style={styles.publi}>
                  <Text style={styles.texto}>{e.descricao}</Text>
                  <Text style={styles.texto}>{e.horario_tarefa}</Text>
                  <Text style={styles.texto}>{e.horario_encerramento}</Text>
                  <Text style={styles.texto}>{e.Status_tarefa}</Text>
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
    backgroundColor: 'rgba(191, 233, 246, 0.802)',
    alignItems: 'center',
  },
  texto: {
    marginBottom: 5,
    fontSize: 22,
    color: 'white',
    fontFamily: 'Arial',
  },
  publi: {
    height: '230px',
    width: '370px',
    border: '1px solid white',
    marginTop: '30px',
    backgroundColor: 'rgb(7, 2, 30)',
    textAlign: 'center',
    justifyContent: 'center'
  },
  headerStyle: {
    fontSize: '35px',
    fontFamily: 'Arial',
    color: 'white',
  },
  image: {
    height: '50px',
    width: '50px'
  },
  inp: {
    height: '45px',
    width: '320px',
    marginTop: '2vh',
    border: '1px solid white',
    borderRadius: '10px',
    backgroundColor: "#EFEFEF"
  },
  botao: {
    height: '40px',
    width: '40px',
    marginTop: '2vh',
    border: '1px solid white',
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#EFEFEF",
    fontSize: '35px'
  },
})