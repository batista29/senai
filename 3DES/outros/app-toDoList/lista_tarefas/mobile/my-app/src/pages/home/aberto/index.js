import { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'

export default function Main() {
  const [tarefas, setTarefas] = useState([])

  useEffect(() => {
    fetch("http://10.87.207.35:3000/tarefas/aberto")
      .then(res => { return res.json() })
      .then(data => {
        setTarefas(data)
      })
  })

  const finalizarTarefa = (id_tarefa) => {
    let dados = {
      id_tarefa:id_tarefa,
      horario_encerramento:null
    } 
    fetch('http://10.87.207.35:3000/tarefas/finaliza/tarefa'
      , {
        "method": "PUT",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(response => {
        if (response.status === 200) {
          console.log("Finalizado");
        } else {
          console.log(response.status);
        }
      })
  }

  const CancelarTarefa = (id_tarefa) => {
    let dados = {
      id_tarefa:id_tarefa,
      horario_encerramento:null
    } 
    fetch('http://10.87.207.35:3000/tarefas/cancela/tarefa'
      , {
        "method": "PUT",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      })
      .then(response => {
        if (response.status === 200) {
          console.log("Cancelado");
        } else {
          console.log(response.status);
        }
      })
  }

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
                <TouchableOpacity onPress={() => { finalizarTarefa(e.id_tarefa) }}>
                  <Text style={styles.texto2}>Finalizar</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => { CancelarTarefa(e.id_tarefa) }}>
                  <Text style={styles.texto3}>Cancelar</Text>
                </TouchableOpacity>
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
    texto2: {
    marginBottom: 5,
    fontSize: 22,
    color: '#90ee90',
    fontFamily: 'Arial',
  },
  texto3: {
    marginBottom: 5,
    fontSize: 22,
    color: 'red',
    fontFamily: 'Arial',
  },
})