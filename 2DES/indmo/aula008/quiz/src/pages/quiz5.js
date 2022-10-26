import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as React from 'react';

export default function quiz2(navi) {

  let pontos = navi.route.params;

  const [checked, setChecked] = React.useState('');

  const dados =
  {
    "pergunta": "Breno é???",
    "respostas": [
      "Homem", "Estudante", "Breno", "Amigo da natureza"
    ],
    "resposta": "first"
  }

  return (
    <View>
      <Text>Oq o breno é?</Text>
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
        if (checked == 1) {
          pontos++
        }
        navi.navigation.navigate("pontos", pontos)
      }}
      >
        <Text>Ver pontuação</Text>
      </TouchableOpacity>
    </View>
  );
};