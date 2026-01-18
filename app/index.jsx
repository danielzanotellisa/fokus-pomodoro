import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../components/FokusButton";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/logo.png')}/>
      <View>
        <Text style={styles.text}>Otimize sua produtividade,</Text>
        <Text style={styles.textBold}>mergulhe no que importa</Text>
      </View>
      <View style={styles.action}>
        <Image source={require('../assets/images/initial.png')}/>
        <Link href={{pathname: "/pomodoro"}} replace asChild>
          <FokusButton display={'Quero iniciar!'}/>
        </Link>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido por Daniel Zanotelli.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  text: {
    textAlign: "center",
    fontSize: 38,
    color: "#FFF",
    fontWeight: "200"
  },
  textBold: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 38,
    color: "#FFF"
  },
  footer: {
    width: "80%",
  },
  
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5
  },
  
  action: {
    width: "80%",
    gap: 10
  },
})