import { Text, View, StyleSheet } from "react-native";

export default function About() {
  return (
    <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.header}>Um Japanska Flashcard appið</Text>
            <Text style={styles.info}>Þetta app er einstaklingsverkefnið mitt í áfanganum Vefforritun 2 sem kennd er í Háskóla Íslands</Text>
            <Text style={styles.info}>Ég ákvað að búa það til vegna áhuga míns á því að læra japönsku og ég vildi læra að búa til app með react native.</Text>
            <Text style={styles.info}>Hér inni eru aðeins harðkóðuð kort en síðari útfærslur gætu innihaldið notendavirkni og leið til þess að búa til sín eigin kort og kortabunka</Text>
          </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: '#E2F3F4'
  },
  content: {
    gap: 10,
    marginTop: 20,
    alignItems: "center",
    maxWidth: 700
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  info: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
});
