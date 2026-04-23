import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { FokusButton } from "../../components/FokusButton";
import { Delete, PlusCircle, Save } from "../../components/Icons";

export default function AddTask() {
  return (
    <KeyboardAvoidingView
      style={styles.wrapper}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.viewWrapper}>
          <Text style={styles.title}>Adicionar uma tarefa</Text>
          <View style={styles.card}>
            <Text style={styles.label}>Em que você está trabalhando?</Text>
            <TextInput style={styles.input} numberOfLines={10} />
            <View style={styles.wrapperActions}>
              <Pressable style={styles.actionButton}>
                <Delete />
                <Text>Deletar</Text>
              </Pressable>
              <Pressable style={styles.actionButton}>
                <Save />
                <Text>Salvar</Text>
              </Pressable>
            </View>
          </View>
          <View style={styles.saveButton}>
            <FokusButton
              icon={<PlusCircle color={"#B872FF"} />}
              outlier
              display={"Adicionar nova tarefa"}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    color: "#FFF",
    fontSize: 36,
    fontWeight: "bold",
    fontFamily: "sans-serif",
  },
  wrapper: {
    backgroundColor: "#021123",
    flex: 1,
  },
  card: {
    backgroundColor: "#98A0A8",
    padding: 16,
    borderRadius: 8,
    gap: 32,
    width: "85%",
  },
  label: {
    color: "#000",
    fontSize: 20,
  },
  input: {
    backgroundColor: "#FFF",
    padding: 16,
    borderRadius: 8,
    marginTop: 8,
    height: 150,
  },
  actionButton: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    gap: 8,
  },
  wrapperActions: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    alignSelf: "flex-end",
    gap: 16,
    marginTop: 16,
  },
  saveButton: {
    width: "85%",
  },
  viewWrapper: {
    flex: 1,
    alignItems: "center",
    gap: 40,
    paddingTop: 40,
  },
});
