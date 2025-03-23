import DeckList from "@/components/DeckList";
import { View, StyleSheet } from "react-native";

export default function Kanji() {
  return (
    <View style={styles.container}>
      <DeckList type="kanji" onSelectDeck={(deck) => alert("Deck selected " + deck.name)}/>
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