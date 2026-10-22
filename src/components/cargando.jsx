import {ActivityIndicator, View,Text,StyleSheet} from "react-native";

export default function Cargando() {
  return (
    <View style={styles.body}>
    <Text style={styles.text}>cargando :v ...</Text>
    <ActivityIndicator />  
    </View> 
  );
}
const styles = StyleSheet.create({
body : {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
},
text: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
},
}); 

