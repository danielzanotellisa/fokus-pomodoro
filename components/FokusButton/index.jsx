import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({onPress, display}) => {
    return (
        <Pressable style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>{display}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
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
})