import DeckList from "@/components/DeckList";
import { View, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function Vocab() {
    const router = useRouter();

  return (
    <View style={styles.container}>
      <DeckList type="vocab" onSelectDeck={(deck) => alert("Deck selected " + deck.name)}/>
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