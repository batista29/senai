import * as React from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const produtos = [
  {
    "nome": "Zyyz food",
    "nota": 4.9,
    "descricao": {
      "endereco": "Rua Indmo",
      "telefone": 19993232329,
      "img": "https://images.vexels.com/media/users/3/136309/isolated/preview/c6539229ad5c57c313d95711a1e676db-hamburguer-com-logotipo-fast-food.png",
      "comida": "x-burguer"
    },
  },
  {
    "nome": "Larica food",
    "nota": 3.2,
    "descricao": {
      "endereco": "Rua Banco de dados",
      "telefone": 19563434349,
      "img": "https://images.vexels.com/media/users/3/129607/isolated/preview/f526eafda1a791f4a93b1ad7c62161e5-logotipo-1-da-burgers.png",
      "comida": "top angus bacon"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png",
      "comida": "hamburger de cheedar"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png",
      "comida": "pizza"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
    }
  },
  {
    "nome": "Larica food",
    "nota": 2,
    "descricao": {
      "endereco": "Rua Banco de dados",
      "telefone": 19563434349,
      "img": "https://images.vexels.com/media/users/3/129607/isolated/preview/f526eafda1a791f4a93b1ad7c62161e5-logotipo-1-da-burgers.png",
      "comida": "top angus bacon"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
    }
  },
  {
    "nome": "Futureba Açai",
    "nota": 4.3,
    "descricao": {
      "endereco": "Rua dos perdões",
      "telefone": 19999999999,
      "img": "https://i.pinimg.com/originals/50/26/4e/50264e93aa486b4e54e140e6c8fb973a.png"
    }
  },
  {
    "nome": "Larica food",
    "nota": 2,
    "descricao": {
      "endereco": "Rua Banco de dados",
      "telefone": 19563434349,
      "img": "https://images.vexels.com/media/users/3/129607/isolated/preview/f526eafda1a791f4a93b1ad7c62161e5-logotipo-1-da-burgers.png",
      "comida": "top angus bacon"
    }
  },
];

function Tela1() {
  return (
    <View style={{ flex: 1, alignItems: 'left' }}>
      {
        produtos.map((produto, indice) => {
          return (
            <TouchableOpacity>
              <Text style={styles.info}>Nome: {produto.nome}</Text>
              <Text style={styles.info}>Nota: {produto.nota} <Image style={styles.icon} source={"https://cdn-icons-png.flaticon.com/512/1828/1828884.png"}></Image></Text>
              <Image style={styles.logo} source={produto.descricao.img} />
              <hr style={styles.linha}></hr>
            </TouchableOpacity>
          )
        })
      }
    </View>
  );
}

function Tela2() {
  return (
    <View style={{ flex: 1, alignItems: 'left' }}>
      {
        produtos.map((produto, indice) => {
          if (produto.nota > 3) {
            return (
              <TouchableOpacity>
                <Text style={styles.info}>Nome: {produto.nome}</Text>
                <Image style={styles.logo} source={produto.descricao.img} />
                <Text style={styles.info}>Produto: {produto.descricao.comida}</Text>
                <hr style={styles.linha}></hr>
              </TouchableOpacity>
            )
          }
        })
      }
    </View>
  );
}

function Tela3() {
  return (
    <View>
      <View style={{ flex: 1, alignItems: 'left', flexDirection: 'row' }}>
        <Image style={styles.fotoPerfil} source={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMyMFWR4rBG6E4pvEUDupLi2vKUgjCgxTHfg&usqp=CAU'}></Image>
        <Text style={styles.info2}>NATÃ BATISTA</Text>
      </View>
      <View>
        <Text style={styles.perfil}>Email: natabatista2908@gmail.com</Text>
        <Text style={styles.perfil}>Celular: (19)98194-0067</Text>
      </View>
      <View>
      {
        produtos.map((produto, indice) => {
          if (produto.nome === "Futureba Açai") {
            return (
              <TouchableOpacity>
                <Text>Lojas preferidas</Text>
                <Text style={styles.info}>Nome: {produto.nome}</Text>
                <Image style={styles.logo2} source={produto.descricao.img} />
                <Text style={styles.info}>Produto: {produto.descricao.comida}</Text>
                <hr style={styles.linha}></hr>
              </TouchableOpacity>
            )
          }
        })
      }
      </View>
    </View>
  );
}

const Tab = createMaterialTopTabNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="LOJAS" component={Tela1} />
        <Tab.Screen name="MELHORES PEDIDOS" component={Tela2} />
        <Tab.Screen name="PERFIL" component={Tela3} />
      </Tab.Navigator>
    </NavigationContainer >
  );
}

const styles = StyleSheet.create({
  info: {
    paddingTop: "10px",
    paddingLeft: "10px",
    color: "#000080",
    fontSize: "20px"
  },
  linha: {
    width: 360
  },
  logo: {
    width: "150px",
    height: "150px"
  },
  fotoPerfil: {
    marginTop: "20px",
    marginLeft: "20px",
    width: "95px",
    height: "95px",
    borderRadius: '100px'
  },
  info2: {
    paddingTop: "45px",
    paddingLeft: "20px",
    color: "#000",
    fontSize: "30px"
  },
  perfil:{
    paddingTop:"10px",
    fontSize: "22px"
  },
  logo2: {
    width: "150px",
    height: "150px"
  }
});