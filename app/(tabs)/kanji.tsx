import DeckList from "@/components/DeckList";
import UserHeader from "@/components/UserHeader";
import { useAuth } from "@/contexts/AuthContext";
import { Redirect } from "expo-router";
import { Text, View, StyleSheet, useWindowDimensions, Platform } from "react-native";

export default function Kanji() {
    const { user, loading } = useAuth();

      const { width } = useWindowDimensions();
      const isWeb = Platform.OS === 'web';
      const isLargeScreen = width >= 800;
  
    if (loading) return <Text>Loading...</Text>;
    if (!user) return <Redirect href="../login" />;
  return (
    
    <View style={styles.container}>
      {(!isWeb || !isLargeScreen) && <UserHeader />}
      <View style={styles.gap}></View>
      <View style={styles.container}>
        <DeckList type="kanji"/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#E2F3F4'
  },
  gap: {
    marginBottom: 20,
  }
});