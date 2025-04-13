import { useState } from "react";
import { View, TextInput, Text, TouchableOpacity, StyleSheet } from "react-native";
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
      router.replace("/"); 
    } catch (e: any) {
      if (e.code === "auth/user-not-found") {
        setError("User does not exist. Please register first.");
      } else if (e.code === "auth/wrong-password") {
        setError("Incorrect password.");
      } else if (e.code === "auth/invalid-credential") {
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
      router.replace("/"); 
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
      router.replace("/"); 
    } catch (e: any) {
      setError(e.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome!</Text>
      <Text style={styles.infoText}>To gain access to the contents of this app you need to log-in with your email and a password of your choice!</Text>
      <Text style={styles.infoText}>Or continue as a guest to explore anonymously!</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />

      {error && <Text style={styles.error}>{error}</Text>}

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonAlt} onPress={handleAnonymousLogin}>
        <Text style={styles.buttonText}>Continue As Guest</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E2F3F4',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#3C5B6F',
  },
  input: {
    width: '100%',
    maxWidth: 400,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#6DC7D1',
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#6DC7D1',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginBottom: 10,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  buttonAlt: {
    backgroundColor: '#3C5B6F',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 30,
    marginTop: 10,
    width: '100%',
    maxWidth: 300,
    alignItems: 'center',
  },
  buttonText: {
    color: '#E2F3F4',
    fontSize: 16,
    fontWeight: 'bold',
  },
  infoText: {
    color: '#3C5B6F',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 20,
    width: 400,
    lineHeight: 25,
    textAlign: 'center'
  },
});
