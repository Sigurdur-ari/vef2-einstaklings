import { useAuth } from "@/contexts/AuthContext";
import { auth } from "@/utils/firebase";
import { signOut } from "firebase/auth";
import { View, Text, StyleSheet } from "react-native";
import Button from "./Button";

export default function UserHeader() {
  const { user } = useAuth();

  const displayName = user
    ? user.isAnonymous
      ? "Stranger"
      : user.displayName || user.email
    : "Stranger";

  const handleLogout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {"Logged in as: " + displayName}
      </Text>
      <Button label="Log out!" onPress={handleLogout} theme="minimalist"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", 
    justifyContent: "center",
    alignItems: "center",  
    margin: 10,                 
    gap: 10,                        
  },
  text: {
    fontSize: 16,
    color: "#000",
  }
});
