// ...existing code...
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

export default function Home() {
  return (
    <>
      <View style={styles.container} />

      <View style={styles.caixaInf}>
        <View style={styles.containerOne}>
          <Text style={styles.h1}>Entre em sua conta</Text>
          <View>
            <Text>Email</Text>
            <TextInput style={styles.caixaTexto} placeholder="Digite algo..." />
            <Text>Senha</Text>
            <TextInput style={styles.caixaTexto} placeholder="Digite algo..." secureTextEntry />
            <Button title="Entrar" onPress={() => alert('Clicou!')} />
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'purple',
    width: 140,
    height: 90,
    borderRadius: 40,
  },

  containerOne: {
    padding: 20,
    borderWidth: 1,
    borderColor: 'black',
    width: 300,
    height: 400,
    borderRadius: 40,
    justifyContent: 'center',
  },
 
  h1: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center'
  },

  caixaInf: {
    flex: 1,
    justifyContent: 'center', // centraliza no eixo Y
    alignItems: 'center',     // centraliza no eixo X
    padding: 20,
  },

  caixaTexto: {
    padding: 5,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
    width: 220,
    height: 40,
    borderRadius: 40,
  },
});
// ...existing code...