import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Boton() {
  return (
    <View style={styles.container}>
      <Button
        title="Aceptar" onPress={() => Alert.alert('boton simple')}
        color="lightsteelblue"  
        style={styles.Boton}></Button>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  Boton: {
    backgroundColor: 'lightsteelblue',
    color: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginLeft: 3,
    height: 40,
    width: 80,
    fontFamily: 'Arial',
  }
});