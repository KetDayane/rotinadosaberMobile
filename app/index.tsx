import React from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <TouchableWithoutFeedback
      onPress={() => router.push("/login")}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/inicio.png")}
          style={styles.imagem}
          resizeMode="cover"
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  imagem: {
    width: "100%",
    height: "100%",
  },
});