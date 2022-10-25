import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

const dados =
{
    "pergunta": "qual a tradução de apple",
    "respostas": [
        "maça", "banana"
    ],
    "resposta": "first"
}

const MyComponent = () => {
    const [checked, setChecked] = React.useState('');

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
            <TouchableOpacity onPress={() => { navigation.navigate("quiz2") }}>
                <Text>Proxima pergunta</Text>
            </TouchableOpacity>
        </View>
    );
};

export default MyComponent;