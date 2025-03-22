import { StyleSheet, View } from "react-native";
import SignInAvatar from "@/components/signIn/SignInAvatar";
import SignInButton from "@/components/signIn/SignInButton";
import SignInInputFields from "@/components/signIn/SignInInputFields";
import SignInWelcomeText from "@/components/signIn/SignInWelcomeText";
import SignUpPrompt from "@/components/signIn/SignUpPrompt";

export default function Index() {
  return (
    <View style={styles.container}>
      <SignInAvatar />
      <SignInWelcomeText text="Welcome bare mortal." />
      <SignInInputFields />
      <SignInButton />
      <SignUpPrompt />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15
  },
})