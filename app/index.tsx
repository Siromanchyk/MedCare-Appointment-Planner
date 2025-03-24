import { StyleSheet, View } from "react-native";
import SignInAvatar from "@/components/signIn/SignInAvatar";
import SignInButton from "@/components/signIn/SignInButton";
import SignInInputFields from "@/components/signIn/SignInInputFields";
import SignInWelcomeText from "@/components/signIn/SignInWelcomeText";
import SignUpPrompt from "@/components/signIn/SignUpPrompt";
import { useState } from "react";
import { account } from '../appwriteConfig';
import { useRouter } from 'expo-router';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSignIn = async () => {
    try {
      const currentSession = await account.getSession('current');

      if (currentSession) {
        await account.deleteSession('current');
      }

      await account.createEmailPasswordSession(email, password);
      router.push('/(tabs)');
    } catch (error) {
      console.error("Signin error:", error);
      alert("Invalid email or password.");
    }
  };

  return (
    <View style={styles.container}>
      <SignInAvatar />
      <SignInWelcomeText text="Welcome bare mortal." />
      <SignInInputFields email={email} setEmail={setEmail} password={password} setPassword={setPassword}/>
      <SignInButton onPress={handleSignIn} />
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