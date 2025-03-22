import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SignUpPrompt() {
  return (
    <View style={styles.signUpContainer}>
      <Text style={styles.signUpText}>
        New to our website? <Link href='/signUp' style={styles.signUpLink}>Sign up</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({ 
  signUpContainer: {
    marginTop: 12
  },
  signUpText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    color: '#D3D3D3'
  },
  signUpLink: {
    color: '#6ac5fe'
  }
});