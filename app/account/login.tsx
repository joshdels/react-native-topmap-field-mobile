import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Alert,
} from "react-native";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    if (!username || !password) {
      Alert.alert("Missing fields", "Please enter your credentials");
      return;
    }

    // TEMP: replace with API call later
    console.log("Login:", { username, password });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.login}>Log in</Text>

      <View style={styles.userInputContainer}>
        <View>
          <Text>Email or Username</Text>
          <TextInput
            style={styles.inputBox}
            value={username}
            onChangeText={setUsername}
            placeholder="Enter email or username"
            autoCapitalize="none"
          />
        </View>

        <View>
          <Text>Password</Text>
          <TextInput
            style={styles.inputBox}
            value={password}
            onChangeText={setPassword}
            placeholder="Enter password"
            secureTextEntry
          />
        </View>
      </View>

      <Pressable style={styles.forgot} onPress={() => console.log("Forgot")}>
        <Text style={styles.link}>Forgot Password?</Text>
      </Pressable>

      <Pressable style={styles.signin} onPress={handleSignIn}>
        <Text style={styles.signinText}>Sign in</Text>
      </Pressable>

      <View style={styles.signupContainer}>
        <Text>Don't have an account?</Text>
        <Pressable onPress={() => console.log("Go to signup")}>
          <Text style={styles.link}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  login: {
    marginBottom: 40,
    fontSize: 30,
    textAlign: "center",
    fontWeight: "600",
  },
  inputBox: {
    backgroundColor: "#b2c4a4d3",
    padding: 12,
    borderRadius: 6,
    marginTop: 6,
  },
  userInputContainer: {
    gap: 20,
    marginBottom: 20,
  },
  forgot: {
    alignItems: "center",
    marginBottom: 30,
  },
  signin: {
    backgroundColor: "#b2c4a4d3",
    padding: 14,
    borderRadius: 6,
    alignItems: "center",
  },
  signinText: {
    fontWeight: "600",
  },
  signupContainer: {
    marginTop: 30,
    alignItems: "center",
    gap: 6,
  },
  link: {
    color: "#2f5d3a",
    fontWeight: "500",
  },
});
