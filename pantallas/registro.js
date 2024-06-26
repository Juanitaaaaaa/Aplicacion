import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Boton from "/prueba/componentes/boton";
import Input from "/prueba/componentes/input";

export default function Registro ({navigation}){
  return (
    <View style={styles.container}>
        <View style={styles.caja}>
          <Text style={styles.titulo}>Registrate</Text>
          <Text>{'\n'}</Text>
          <Text>Nombre y apellido</Text>
          <Input/>
          <Text>Email</Text>
          <Input/>
          <Text>Nombre de usuario</Text>
          <Input/>
          <Text>Contraseña</Text>
          <Input/>
          <Boton />
        <StatusBar style="auto" />
        </View>
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkslategrey',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    fontFamily:'Arial',
  },
  caja: {
    flex: 1,
    marginTop: '50',
    backgroundColor: 'lightgrey',
    height: 1500,
    width: 400,
    borderRadius: 10, 
    padding: 15, 
    margin: 15,
  },
  titulo: {
    marginLeft: 100,
    fontFamily: 'Arial',
    fontSize: 35,
  }
  
});

