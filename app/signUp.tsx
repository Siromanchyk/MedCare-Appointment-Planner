import AvatarPicker from "@/components/signUp/AvatarPicker";
import InputFields from "@/components/signUp/InputFields";
import JoinButton from "@/components/signUp/JoinButton";
import SignInPrompt from "@/components/signUp/SignInPrompt";
import WelcomeText from "@/components/signUp/WelcomeText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import { ID_APPWRITE, account } from '@/appwriteConfig';

export default function SignUp() {
  const [image, setImage] = useState<string>('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const router = useRouter();

  const handleSignUp = async () => {
    if (password !== repeatPassword) {
      alert("Passwords do not match.");
      return;
    }

    try {
      await account.create(ID_APPWRITE.unique(), email, password, "User");
      alert("Account created successfully. Please sign in.");
      router.push('/');
    } catch (error) {
      console.error("Signup error:", error);
      alert("Failed to create account. Please try again.");
    }
  };

  return (
    <View style={styles.container}>
      <AvatarPicker image={image} onImageChange={setImage} />
      <WelcomeText text="Adventure awaits you." />
      <InputFields
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        repeatPassword={repeatPassword}
        setRepeatPassword={setRepeatPassword}
      />
      {/* IMPORTANT: Pass the handleSignUp function as the onPress prop */}
      <JoinButton onPress={handleSignUp} />
      <SignInPrompt />
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
  }
})