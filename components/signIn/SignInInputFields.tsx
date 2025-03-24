import { View, TextInput, StyleSheet } from "react-native";

export default function SignInInputFields({
    email, setEmail, password, setPassword
}:{
    email:string, setEmail: (email:string) => void, password: string, setPassword: (password: string) => void
}) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Email"
        placeholderTextColor={'#D3D3D3'}
        style={styles.input}
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        placeholderTextColor={'#D3D3D3'}
        secureTextEntry
        style={[styles.input, styles.passwordInput]}
        value={password}
        onChangeText={setPassword}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 24,
    width: '100%'
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 2,
    borderColor: '#D3D3D3',
    borderRadius: 4,
    fontFamily: 'RobotoRegular',
    fontWeight: '400'
  },
  passwordInput: {
    marginTop: 12
  },
})