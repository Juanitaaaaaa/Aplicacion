import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Boton from "/prueba/componentes/boton";
import Input from "/prueba/componentes/input";

export default function Login ({navigation}){ 
  return( 
    
    <View style={styles.container}>
        <View style={styles.formulario}>
        <Text>{'\n'}</Text>
          <Text style={styles.bienvenido}> Bienvenido de nuevo {'\n'} </Text>
          <Text>Email / Nombre de usuario </Text>
          <Input />
          <Text>Contraseña</Text>
          <Input />
          <Text>{'\n'}</Text>
          <Text>{'\n'}</Text>
          <Text style={styles.boton}><Boton/></Text>
          <View style={styles.pass}>
            <Pressable >
              <Text style={styles.contraseña}>¿Olvidaste tu contraseña? {'\n'}</Text> 
            </Pressable>
            <Text>{'\n'}</Text>
            <Text style={styles.cuenta}>¿No tienes una cuenta?</Text>
            <Pressable onPress={() => navigation.navigate('Registro')}>
              <Text style={styles.registro}>Registrate aqui</Text>
            </Pressable>
          </View>
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
    padding: 20
  },
  formulario: {
    flex: 1,
    marginTop: '50',
    backgroundColor: 'lightgrey',
    height: 500,
    width: 400,
    borderRadius: 10, 
    padding: 20, 
    margin: 20,
    fontWeight: 800,
  },
  bienvenido:{
    marginLeft: 15,
    fontFamily: 'Arial',
    fontSize: 35,

  },
  pass:{
    marginLeft: 70,
    marginBottom: 60,
    fontFamily: 'Arial',
    marginLeft: 80,
  },
  registro:{
    color: 'blue',
    textDecorationLine: 'underline',
    marginLeft: 60,
    
  },
  cuenta:{
    marginLeft: 35,
    marginBottom: 30,
  },
  contraseña:{
    marginLeft: 25,
    marginTop: 5,
  },
  boton:{
    marginLeft:140,
    marginTop: 3,
  }
});











