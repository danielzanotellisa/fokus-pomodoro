import { StyleSheet, Text, View } from "react-native";
import { FokusButton } from "../../components/FokusButton";
import Footer from "../../components/Footer";
import { PlusCircle } from "../../components/Icons";
import TaskItem from "../../components/TaskItem";

export default function Tasks() {
    return (
       <View style={styles.container}>
            <Text style={styles.title}>Lista de tarefas:</Text>
            <View style={styles.wrapperTasksButton}>
                <View style={styles.taskContainer}>
                    <TaskItem completed={false} text={"Estudar react native"}/>
                    <TaskItem completed={false} text={"Estudar react native"}/>
                    <TaskItem completed={false} text={"Estudar react native"}/>
                </View>
                <FokusButton icon={<PlusCircle color={"#B872FF"} />} outlier display={"Adicionar nova tarefa"}/>
            </View>
            <Footer/>
       </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#021123",
        gap: 40,
    },
    
    title: {
        color: "#FFF",
        fontSize: 42,
        fontWeight: "bold"
    },
    
    taskContainer: {
        gap: 8,
    },
    wrapperTasksButton: {
        width: "85%",
        gap: 80
    }
})