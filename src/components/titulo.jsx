import { Text,StyleSheet} from "react-native";

export default function Titulo({title}) {
    return (
    <Text 
    style={styles.titulo}>
    {title}
    </Text>
);
}
const styles = StyleSheet.create({
titulo: {
color: "white",
fontSize:30,
},
});