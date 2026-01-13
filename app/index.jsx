import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={styles.container}
    >
      <Image source={require('../assets/images/pomodoro.png')}/>
      <View style={styles.actions}>
        <View style={styles.actionsButtons}>
          <Pressable style={styles.actionButtonActive}>
            <Text style={styles.actionButtonTextActive}>Foco</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Pausa curta</Text>
          </Pressable>
          <Pressable style={styles.actionButton}>
            <Text style={styles.actionButtonText}>Pausa longa</Text>
          </Pressable>
        </View>
        <Text style={styles.timer}>25:00</Text>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Começar</Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Projeto fictício e sem fins comerciais.</Text>
        <Text style={styles.footerText}>Desenvolvido por Daniel Zanotelli.</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40
  },
  
  actions: {
    gap: 32,
    padding: 24,
    backgroundColor: "#14448080",
    borderRadius: 32,
    width: '80%',
    borderWidth: 2,
    borderColor: "#144480",
    alignItems: "center",
    alignContent: "center",
  },
  
  timer: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 54,
  },
  
  button: {
    backgroundColor: "#B872FF",
    padding: 8,
    width: "100%",
    alignItems: "center",
    borderRadius: 32,
  },
  
  buttonText: {
    fontWeight: "bold",
    color: "#021123",
    fontSize: 18,
  },
  
  footer: {
    width: "80%",
  },
  
  footerText: {
    color: "#98A0A8",
    textAlign: "center",
    fontSize: 12.5
  },
  
  actionsButtons: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
  
  actionButtonActive: {
    backgroundColor: "#144480",
    borderRadius: 8,
    padding: 8
  },
  
  actionButton: {
    
  },
  
  actionButtonTextActive: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 12.5,
  },
  
  actionButtonText: {
    color: "#FFF",
    fontSize: 12.5,
    fontWeight: "300"
  }
})