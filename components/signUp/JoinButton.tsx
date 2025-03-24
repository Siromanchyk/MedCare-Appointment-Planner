import { StyleSheet, View, Pressable, Text } from "react-native";

export default function JoinButton({ onPress }: { onPress: () => void }) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable onPress={onPress}>
        <Text style={styles.buttonText}>Join Us</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 14,
    width: '100%',
    paddingVertical: 18,
    backgroundColor: '#77DD77',
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
  },
});