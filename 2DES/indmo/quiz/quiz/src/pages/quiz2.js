import { View, Text, TouchableOpacity } from 'react-native';

export default function quiz2({ navigation }) {

  const [checked, setChecked] = React.useState('');

  const dados =
  {
    "pergunta": "qual o nome do rodolfo???",
    "respostas": [
      "LUcas", "Joao"
    ],
    "resposta": "first"
  }

  return (
    <View>
      <View>
        {
          dados.respostas.map((resp, indice) => {
            return (

              <View>
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
      <TouchableOpacity onPress={() => { navigation.navigate("quiz3") }}>
        <Text>Proxima pergunta</Text>
      </TouchableOpacity>
    </View>
  );
};