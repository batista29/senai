import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';
import * as React from 'react';

export default function quiz2( navi ) {

  let pontos = navi.route.params;

  const [checked, setChecked] = React.useState('');

  const dados =
  {
    "pergunta": "Qm nasce no brasil é oq???",
    "respostas": [
      "Alemão", "Japonês", "Irlandes", "Maranhense"
    ],
    "resposta": "first"
  }

  return (
    <View>
      <Text>Qm nasce no brasil é oq???</Text>
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
        if (checked == 0) {
          pontos++
        }
        navi.navigation.navigate("quiz4", pontos)
      }}
      >
        <Text>Proxima pergunta</Text>
      </TouchableOpacity>
    </View>
  );
};