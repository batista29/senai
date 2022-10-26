import * as React from "react";
import { Text, View } from "react-native";

export default function pontos( navi ) {

    let pontos = navi.route.params;

    return (
        <View>
            <Text>sua pontuação neste quiz foi: {pontos}</Text>
        </View>
    );
}