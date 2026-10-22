import {View, Text, StyleSheet} from "react-native";
export default function Descripcion({explanation}) {
  return (
    <View>
    <Text 
    style={styles.explicacion}>
    {explanation}
    </Text>
    </View>
  );
}
const styles = StyleSheet.create({
 explicacion : {
    color: "white",
    fontSize: 20,
    margin: 20,
 },
});