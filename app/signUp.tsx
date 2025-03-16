import { useState } from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";

export default function Index() {
  const [image, setImage] = useState<string>('');

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <Pressable onPress={pickImage}>
          <Image
            source={image ? { uri: image } : require('../assets/images/empty-avatar.jpg')}
            style={styles.avatar}
          />
        </Pressable>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Adventure awaits you.</Text>
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
        <TextInput 
          placeholder="Repeat password" 
          placeholderTextColor={'#D3D3D3'}
          secureTextEntry
          style={[styles.input, styles.passwordInput]}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Link href='/_sitemap' style={styles.buttonText}>
          Join Us
        </Link>
      </View>
      <View style={styles.signInContainer}>
        <Text style={styles.signInText}>
          Already have an account? <Link href='/' style={styles.signInLink}>Sign In</Link>
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
  textContainer: {
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
    backgroundColor: '#77DD77'
  },
  buttonText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '600',
    color: 'white',
    fontSize: 18,
    textAlign: 'center'
  },
  signInContainer: {
    marginTop: 12
  },
  signInText: {
    fontFamily: 'RobotoRegular',
    fontWeight: '400',
    color: '#D3D3D3'
  },
  signInLink: {
    color: '#6ac5fe'
  }
});
