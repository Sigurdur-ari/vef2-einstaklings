import { useState } from "react";
import { View, TextInput, Button, Text } from "react-native";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, fetchSignInMethodsForEmail, signInAnonymously } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "expo-router";

export default function AuthScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/"); // Successful login → navigate home
    } catch (e: any) {
      if (e.code === "auth/user-not-found") {
        setError("User does not exist. Please register first.");
      } else if (e.code === "auth/wrong-password") {
        setError("Incorrect password.");
      }else if (e.code === "auth/invalid-credential") {
        setError("Password or email is incorrect");
      } else if (e.code === "auth/invalid-email") {
        setError("Please enter a valid email.");
      } else {
        setError(e.message);
      }
    }
  };

  const checkIfEmailExists = async (email: string) => {
    const methods = await fetchSignInMethodsForEmail(auth, email.trim());
    if (methods.length > 0) {
      setError("This email is already registered. Please log in.");
      return true;
    }
    return false;
  };

  const handleRegister = async () => {
    try {
      const exists = await checkIfEmailExists(email);
      if (exists) return;

      await createUserWithEmailAndPassword(auth, email.trim(), password);
      router.replace("/"); // Successful registration → navigate home
    } catch (e: any) {
      if (e.code === "auth/email-already-in-use") {
        setError("This email is already registered.");
      } else if (e.code === "auth/invalid-email") {
        setError("Please enter a valid email address.");
      } else if (e.code === "auth/weak-password") {
        setError("Password should be at least 6 characters.");
      } else {
        setError(e.message);
      }
    }
  };

  const handleAnonymousLogin = async () => {
    try {
      await signInAnonymously(auth);
      router.replace("/"); // Navigate to home
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {error && <Text style={{ color: "red" }}>{error}</Text>}

      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Login Anonymously" onPress={handleAnonymousLogin} />
    </View>
  );
}
