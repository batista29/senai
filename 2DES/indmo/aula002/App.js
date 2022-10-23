import { useState } from 'react';
import { View, TouchableOpacity, Text, TextInput, StyleSheet } from 'react-native';

export default function App() {
  const [value, setValue] = useState();
  const [value2, setValue2] = useState();
  const [res, setRes] = useState();

  const calcular = () =>{
    // if (op == "+") {
    //   setRes(value + value2);
    // }else if (op == "-"){
    //   setRes(value - value2);
    // }else if (op == "*"){
    //   setRes(value * value2);
    // }else if (op == "/"){
    //   setRes(value / value2);
    // }
    setRes(eval(`${value} ${Op} ${value2}`));
  }

  return (
    <View style={styles.container}>
      <View style={styles.prt1}>
        <TextInput style={styles.inp} value={value} onChangeText={(val) => { setValue(val); }} />
        <TextInput style={styles.inp} value={value2} onChangeText={(val) => { setValue2(val); }} />
        <View style={styles.btn}>
          <TouchableOpacity onPress={() => {setOp("+")}}><Text>+</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {setOp("-")}}><Text>-</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {setOp("*")}}><Text>*</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => {setOp("/")}}><Text>/</Text></TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity onPress={() => {calcular()}}>
        <Text>Calcular</Text>
      </TouchableOpacity>
      <Text>{res}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#add8e6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    paddingTop: '10px',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inp: {
    color: 'black',
    border: '1px solid black'
  },
  btnTam: {
    height: '20px',
    width: '30px'
  }
});