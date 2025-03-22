import { View, Image, StyleSheet } from "react-native";

export default function SignInAvatar() {
  return (
    <View>
      <Image
        source={require('../../assets/images/signIn-avatar.png')}
        style={styles.avatar}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  }
})