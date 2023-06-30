import { StyleSheet, Text, View, Dimensions} from 'react-native';
import { Image } from 'expo-image';
import { responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";

export default function Card() {
  const { height, width} = Dimensions.get('screen')
    return (
        <View style={styles.card}>
          <Image source={require('../assets/coffee1.jpeg')} style={{width: width, height: "90%"}} />
          <Text style={styles.texto2}> Café con leche </Text>
        </View>
      );
}

const styles = StyleSheet.create(
{
  card :{
    width : "70%",
    height: "30%",
    backgroundColor: '#136c10',
    alignItems: 'center',
    borderRadius: 25,
    position:"relative",
    overflow : 'hidden'
  },
  texto2 : {
    color : 'white',
    fontWeight : '900',
    fontSize : "1.2em",
  },
  imagen2 : {  
    flex: 1,
    contentFit: 'contain',
    
  }
})  