import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function NoAppointmentsMessage() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>No appointments scheduled.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})