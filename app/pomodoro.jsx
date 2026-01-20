import { useRef, useState } from "react";
import { Image, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ActionButton } from "../components/ActionButton";
import { FokusButton } from "../components/FokusButton";
import Footer from "../components/Footer";
import { Pause, Play } from "../components/Icons";
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

export default function Pomodoro() {
  
  
  const [seconds, setSeconds] = useState(pomodoro[0].initialValue);
  const [timerType, setTimerType] = useState(pomodoro[0]);
  const [isRunning, setIsRunning] =  useState(false);
  const timerRef = useRef(null);
  
  
  const clear = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current)
      timerRef.current = null
      setIsRunning(false);
    }
    
  }
  
  const toogleTimerType = (newTimerType) => {
    setTimerType(newTimerType)
    setSeconds(newTimerType.initialValue)
    clear()
  }
  
  
  
  const toogleTimer = () => {
    if (timerRef.current) {
      clear()
      return
    }
    
    setIsRunning(true);
    
    const id = setInterval(() => {
      setSeconds(oldState => {
        if (oldState === 0) {
          clear()
          return timerType.initialValue
        }
        return oldState - 0.016;
      })
    }, 1000)
    timerRef.current = id
  }
  return (
    <SafeAreaView
      style={styles.container}
    >
      <Image style={{maxHeight: 335, maxWidth:335}} source={timerType.image}/>
      <View style={styles.actions}>
        <View style={styles.actionsButtons}>
          {pomodoro.map(p => (
            <ActionButton 
              key={p.id}
              active={timerType.id === p.id}
              onPress={() => toogleTimerType(p)}
              display={p.display} 
            />
          ))}
        </View>
        <Timer totalSeconds={seconds}/>
        <FokusButton icon={isRunning ? <Pause/> : <Play/>} display={isRunning ? 'Pausar' : 'Começar'} onPress={toogleTimer}/>
      </View>
      <Footer/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#021123",
    gap: 40,
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
  
  actionsButtons: {
    flexDirection: "row",
    gap: 12,
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%"
  },
})