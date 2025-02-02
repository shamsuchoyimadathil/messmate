import React, { FC, useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import PhoneScreen from "./PhoneScreen";
import Signup from "./Signup";

const Login: FC = () => {
  const [scr, setScreen] = useState<"phone" | "signup">("phone");

  if (scr === "phone") {
    return <PhoneScreen />;
  }

  return <Signup />;
};

export default Login;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#f4f4f4",
//   },
//   inner: {
//     padding: 24,
//     flex: 1,
//     justifyContent: "center",
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 20,
//     textAlign: "center",
//   },
//   input: {
//     height: 50,
//     borderColor: "#ddd",
//     borderWidth: 1,
//     marginBottom: 15,
//     paddingHorizontal: 15,
//     borderRadius: 8,
//     backgroundColor: "white",
//   },
//   loginButton: {
//     backgroundColor: "#007bff",
//     height: 50,
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 8,
//   },
//   loginButtonText: {
//     color: "white",
//     fontSize: 18,
//     fontWeight: "bold",
//   },
//   forgotPassword: {
//     marginTop: 15,
//     textAlign: "center",
//     color: "#007bff",
//   },
// });
