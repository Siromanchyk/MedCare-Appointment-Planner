import AvatarPicker from "@/components/signUp/AvatarPicker";
import InputFields from "@/components/signUp/InputFields";
import JoinButton from "@/components/signUp/JoinButton";
import SignInPrompt from "@/components/signUp/SignInPrompt";
import WelcomeText from "@/components/signUp/WelcomeText";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const [image, setImage] = useState<string>('');

  return (
    <View style={styles.container}>
      <AvatarPicker image={image} onImageChange={setImage} />
      <WelcomeText text="Adventure awaits you." />
      <InputFields />
      <JoinButton />
      <SignInPrompt />
    </View>
  )
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