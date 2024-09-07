import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [contador, setContador] = useState(0);
  const [contadorState, setContadorState] = useState(false);

  function changeContador(){
      setContador(contador + 1);
      setContadorState(true);
  }

  function resetContador(){
    if(contadorState){
        setContador(0);
    }
  }

  return (
    <View style={styles.container}>
       <View style={styles.content}>
          <View style={styles.iconContainer}>
              <MaterialCommunityIcons name="card-plus" size={150} color="lightblue" />
              <Text style={styles.iconText}>Contador</Text>
          </View>

          <View style={styles.clickContainer}>
            <Text style={styles.text}>Número de Cliques:</Text>
            <Text style={[styles.text, styles.clickText]}>{contador}</Text>
          </View>

          <View style={styles.buttonsContainer}>
              <TouchableOpacity style={styles.button} onPress={resetContador}>
                <Text style={styles.buttonText}>Reiniciar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={changeContador}>
                <Text style={styles.buttonText}>Aumentar</Text>
              </TouchableOpacity>
          </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "lightblue",
  },

  content: {
    backgroundColor: "#FFF",
    height: "90%",
    width: "85%",
    borderRadius: 10,
    alignItems: "center"
  },
  iconContainer: {
    height: "auto",
    width: 280,
    alignItems: "center",
    marginTop: "10%",
    borderStyle: "solid",
    borderColor: "lightblue",
    borderWidth: 4,
    padding: 10,
    borderRadius: 10,
  },
  iconText:{
    fontSize: 30,
    color: "lightblue",
  },

  text:{
    fontSize: 15,
    color: "lightblue",
  },

  clickText: {
    fontSize: 30,
  },

  clickContainer:{
    marginTop: "30%",
    alignItems: "center",
    gap: 20,
  },

  buttonsContainer: {
    marginTop: "45%",
    flexDirection: "row",
    width: "70%",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 30,
  },

  button: {
    backgroundColor: "lightblue",
    flex: 1,
    padding: 10,
    alignItems: "center",
    borderRadius: 10,
  },

  buttonText: {
    fontSize: 15,
    color: "#FFF",
  }

});
