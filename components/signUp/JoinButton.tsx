import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function JoinButton() {
  return (
    <View style={styles.buttonContainer}>
      <Link href='/_sitemap' style={styles.buttonText}>
        Join Us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 14,
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#77DD77'
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  }
})