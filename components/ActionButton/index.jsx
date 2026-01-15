import { Pressable, StyleSheet, Text } from "react-native"

export const ActionButton = ({active, onPress, display}) => {
    return (
          <Pressable
            style={active ? styles.actionButtonActive : styles.actionButton}
            onPress={onPress}
          >
            <Text style={active ? styles.actionButtonTextActive : styles.actionButtonText}>{display}</Text>
          </Pressable>
    )
}

const styles = StyleSheet.create({
      
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