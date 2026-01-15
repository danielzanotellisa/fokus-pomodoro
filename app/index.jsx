import { useState } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import { Timer } from "../components/Timer";

const pomodoro = [
  {
    id: 'focus',
    initialValue: 25,
    image: require('../assets/images/pomodoro.png'),
    display: 'Foco'
  },
  {
    id: 'short',
    initialValue: 5,
    image: require('../assets/images/short.png'),
    display: 'Pausa curta'
  },
  {
    id: 'long',
    initialValue: 15,
    image: require('../assets/images/long.png'),
    display: 'Pausa longa'
  },
]

export default function Index() {
  
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [isRunning, setIsRunning] = useState(false);
  
  const handleActionSwitch = (item) => {
    if(timerType.id === item.id) {
      return
    }
    
    setIsRunning(false)
    setTimerType(item)
  }
  return (
    <View
      style={styles.container}
    >
      <Image source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.actionsButtons}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => handleActionSwitch(p)}
              display={p.display} 
            />
          ))}
        </View>
        <Timer totalSeconds={timerType.initialValue}/>
        <FokusButton display={isRunning ? 'Pausar' : 'Começar'} onPress={() => {setIsRunning(!isRunning)}}/>
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
})