import { View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function SignInButton() {
  return (
    <View style={styles.buttonContainer}>
      <Link href='/(tabs)' style={styles.buttonText}>
        Open Sesame
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 14,
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#6ac5fe'
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
})