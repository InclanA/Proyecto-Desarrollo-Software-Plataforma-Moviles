import {Image, StyleSheet} from "react-native";
export default function Imagen({hdurl}) {
return (
<Image
source={{uri:hdurl}}
style={styles.imagen}
/>
);
}
const styles = StyleSheet.create({
 imagen : {
    width: 350,
    height: 350,
    margin : 20,
 },
});