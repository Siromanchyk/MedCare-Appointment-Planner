import { View, Image, Text, TextInput, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <View>
        <Image
          source={require('../assets/images/signIn-avatar.png')}
          style={styles.avatar}
        />
      </View>
      <View style={styles.welcomeTextContainer}>
        <Text style={styles.welcomeText}>Welcome bare mortal.</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder="Email" 
          placeholderTextColor={'#D3D3D3'}
          style={styles.input}
        />
        <TextInput 
          placeholder="Password" 
          placeholderTextColor={'#D3D3D3'}
          secureTextEntry
          style={[styles.input, styles.passwordInput]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Link href='/(tabs)' style={styles.buttonText}>
          Open Sesame
        </Link>
      </View>
      <View style={styles.signUpContainer}>
        <Text style={styles.signUpText}>
          New to our website? <Link href='/signUp' style={styles.signUpLink}>Sign up</Link>
        </Text>
      </View>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
  welcomeTextContainer: {
    marginTop: 12
  },
  welcomeText: {
    fontFamily: 'RobotoRegular',
    fontSize: 22,
    fontWeight: '600',
    color: '#D0D0D0'
  },
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
  signUpContainer: {
    marginTop: 12
  },
  signUpText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    color: '#D3D3D3'
  },
  signUpLink: {
    color: '#6ac5fe'
  }
});
