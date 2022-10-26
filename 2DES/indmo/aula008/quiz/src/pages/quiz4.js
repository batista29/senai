import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as React from 'react';

export default function quiz2(navi) {

  let pontos = navi.route.params;

  const [checked, setChecked] = React.useState('');

  const dados =
  {
    "pergunta": "Quantas copas do mundo portugal tem???",
    "respostas": [
      "0 Copas", "Nenhuma copa", "Zero Zero", "Nothing"
    ],
    "resposta": "first"
  }

  return (
    <View>
      <Text>Quantas copas do mundo portugal tem???</Text>
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
        if (checked == 2) {
          pontos++
        }
        navi.navigation.navigate("quiz5", pontos)
      }}
      >
        <Text>Proxima pergunta</Text>
      </TouchableOpacity>
    </View>
  );
};