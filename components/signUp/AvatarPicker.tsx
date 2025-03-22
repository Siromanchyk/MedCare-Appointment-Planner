import { useState } from "react";
import { Pressable, View, Image, Text, TextInput, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Link } from "expo-router";

export default function AvatarPicker({ 
  image, 
  onImageChange 
} : { 
  image: string | null; 
  onImageChange: (uri: string) => void}) {
    const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      onImageChange(result.assets[0].uri);
    }
  };

  return (
    <View>
      <Pressable onPress={pickImage}>
        <Image
          source={image ? { uri: image } : require('../../assets/images/empty-avatar.jpg')}
          style={styles.avatar}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75
  },
})