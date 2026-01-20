import { Pressable, StyleSheet, Text } from "react-native";

export const FokusButton = ({onPress, display, icon, outlier}) => {
    return (
        <Pressable style={outlier ? styles.buttonOutlier : styles.button} onPress={onPress}>
					{icon}
          <Text style={outlier ? styles.buttonTextOutlier : styles.buttonText}>{display}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    button: {
			flexDirection: "row",
			alignContent: "center",
			justifyContent: "center",
      backgroundColor: "#B872FF",
      padding: 8,
      width: "100%",
      alignItems: "center",
      borderRadius: 32,
			gap: 8,
    },
      
    buttonText: {
      fontWeight: "bold",
      color: "#021123",
      fontSize: 18,
    },
    
    buttonOutlier: {
      flexDirection: "row",
			alignContent: "center",
			justifyContent: "center",
      backgroundColor: "transparent",
      borderColor: "#B872FF",
      borderWidth: 2,
      padding: 8,
      width: "100%",
      alignItems: "center",
      borderRadius: 32,
			gap: 8,
    },
    
    buttonTextOutlier: {
      fontWeight: "bold",
      color: "#B872FF",
      fontSize: 18,
    },
})