import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View>
      <Text>Hello da página inicial</Text>
      <Link href={{pathname: "/pomodoro"}}>
        Ir para timer
      </Link>
    </View>
  )
}