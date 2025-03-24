import { View, StyleSheet, Pressable, Text } from "react-native";

export default function SignInButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>Open Sesame</Text>
      </Pressable>
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