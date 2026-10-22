import { StyleSheet, Text } from "react-native";

export default function Fecha({date}) {
  return (
    <Text
    style={styles.fecha}>
    {date}
    </Text>
  );
}
const styles = StyleSheet.create({
 fecha : {
    color: "white",
    borderWidth: 1,
    padding: 10,
},
});
