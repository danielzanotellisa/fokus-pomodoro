import { Pressable, StyleSheet, Text, View } from "react-native"
import { Edit, IconCheck } from "../Icons"

const TaskItem = ({completed, text, onToggleComplete, onPressEdit}) => {
    return (
        <View style={styles.container}>
            <Pressable onPress={onToggleComplete}>
                <IconCheck checked={completed}/>
            </Pressable>
            
            <Text>{text}</Text>
            <Pressable onPress={onPressEdit}>
                <Edit/>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 8,
        borderRadius: 8,
        backgroundColor: "#98A0A8",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center"
    }
})

export default TaskItem