import DeckList from "@/components/DeckList";
import { useAuth } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function Vocab() {
  const { user, loading } = useAuth();

  if (loading) return <Text>Loading...</Text>;
  if (!user) return <Redirect href="../login" />;

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
    backgroundColor: '#E2F3F4'
  }
});