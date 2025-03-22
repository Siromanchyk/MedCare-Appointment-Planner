import { View, Text, StyleSheet } from "react-native";

export default function WelcomeText({ text } : { text: string }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.welcomeText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 12
  },
  welcomeText: {
    fontFamily: 'RobotoRegular',
    fontSize: 22,
    fontWeight: '600',
    color: '#D0D0D0'
  },
})