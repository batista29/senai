import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const dados =
{
    "pergunta": "qual a tradução de apple",
    "respostas": [
        "maça", "banana", "Fernando", "Juzias"
    ],
    "resposta": "first"
}


var pontos = 0

const MyComponent = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');

    return (
        <View>
            <View>
                {
                    dados.respostas.map((resp, indice) => {
                        return (
                            <View>
                                <br></br>
                                <Text>{resp}</Text>
                                <RadioButton
                                    value={resp}
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
                navigation.navigate("quiz2", pontos) 
            }}>

                <Text>Proxima pergunta</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyComponent;