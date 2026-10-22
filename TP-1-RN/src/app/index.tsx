import { View,StyleSheet,ScrollView} from 'react-native';
import useApod from "../hooks/useApod";
import Cargando from "../components/cargando";
import Descripcion from "../components/explicacion";
import Imagen from "../components/imagen";
import Titulo from "../components/titulo";
import Fecha from "../components/fecha";

export default function App() {
const data = useApod()

if(!data){
  return <Cargando />;
}
return(
<ScrollView>
<View style={styles.body}>
   <Titulo title={data.title} /> 
   <Imagen hdurl={data.hdurl} /> 
   <Fecha date={data.date} />
   <Descripcion explanation={data.explanation}/>   
</View>
</ScrollView>
);
}
const styles = StyleSheet.create({
  body: {
    padding:50,
    flex: 1,
    backgroundColor:'#585f72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});