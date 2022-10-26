import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as React from 'react';

export default function quiz2(navi) {

  let pontos = navi.route.params;

  const [checked, setChecked] = React.useState('');

  const dados =
  {
    "pergunta": "qual o nome do rodolfo???",
    "respostas": [
      "LUcas", "Joao", "Rodrigo", "Hernandez"
    ],
    "resposta": "first"
  }

  return (
    <View>
      <Text>qual o nome do rodolfo???</Text>
      <View>
        {
          dados.respostas.map((resp, indice) => {

            return (
              <View>
                <br></br>
                <Text>{resp}</Text>
                <RadioButton
                  value="first"
                  status={checked === indice ? 'checked' : 'unchecked'}
                  onPress={() => setChecked(indice)}
                />
              </View>
            )
          })
        }
      </View>
      <TouchableOpacity onPress={() => {
        if (checked == 3) {
          pontos++
        }
        navi.navigation.navigate("quiz3", pontos)
      }}
      >
        <Text>Proxima pergunta</Text>
      </TouchableOpacity>
    </View>
  );
};