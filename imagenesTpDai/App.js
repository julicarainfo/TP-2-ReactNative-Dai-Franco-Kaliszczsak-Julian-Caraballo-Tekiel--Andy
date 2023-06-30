import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Card from './Components/Card';
import { Image } from 'expo-image';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import { Dimensions } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/central_perk_logo.jpeg')} style={styles.Imagen} />
      <Text style={styles.texto}>Prueba nuestro café!</Text>
      <Card></Card>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    width: "100%",
    height: "100%"
  },
  Imagen: {
    marginTop: 50,
    width : "100%",
    height : "20%",
    resizeMode: 'contain',
  },
  texto: {
    fontWeight : '900',
    marginBottom: "30%",
    fontSize : "1.6em",
  }
});

