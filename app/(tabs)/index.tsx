import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.header}>Velkomin í Japanska flashcard appið!</Text>
        <Text style={styles.info}>Hér inni eru nokkur minniskort sem kenna þér dálítið í japönsku</Text>
        <Text style={styles.text}>Endilega láttu reyna á þekkingu þína, eða lærðu frá grunni!</Text>
        <Text style={styles.text}>Notfærðu þér takkana hér að neðan til þess að finna kortin!</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fafafa",
  },
  content: {
    gap: 10,
    marginTop: 20,
    alignItems: "center",
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  info: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 10,
  },
  text: {
    textAlign: "center",
    fontSize: 16,
  },
});
