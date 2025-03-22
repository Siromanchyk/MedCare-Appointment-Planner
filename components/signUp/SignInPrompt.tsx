import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SignInPrompt() {
  return (
    <View style={styles.signInContainer}>
      <Text style={styles.signInText}>
        Already have an account? <Link href='/' style={styles.signInLink}>Sign In</Link>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  signInContainer: {
    marginTop: 12
  },
  signInText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    color: '#D3D3D3'
  },
  signInLink: {
    color: '#6ac5fe'
  }
});