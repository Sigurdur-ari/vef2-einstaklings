import DeckList from "@/components/DeckList";
import { View, StyleSheet } from "react-native";

export default function Vocab() {

  return (
    <View style={styles.container}>
      <DeckList type="vocab"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  }
});