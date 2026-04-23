import { Pressable, StyleSheet, Text, View } from "react-native";
import { Edit, IconCheck } from "../Icons";

const TaskItem = ({ completed, text, onToggleComplete, onPressEdit }) => {
  const cardStyles = [styles.container];
  if (completed) {
    cardStyles.push(styles.cardCompleted);
  }

  return (
    <View style={cardStyles}>
      <Pressable onPress={onToggleComplete}>
        <IconCheck checked={completed} />
      </Pressable>

      <Text>{text}</Text>
      <Pressable onPress={onPressEdit}>
        <Edit />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
    borderRadius: 8,
    backgroundColor: "#98A0A8",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  cardCompleted: {
    backgroundColor: "#0F725C",
  },
});

export default TaskItem;
