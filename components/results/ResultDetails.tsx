import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Result from '@/interfaces/result';

export default function ResultDetails({ result }: { result: Result }) {
  return (
    <View style={styles.resultItem}>
      <Text style={styles.hospitalName}>{result.hospital.name}</Text>
      <Text style={styles.doctorName}>Doctor: {result.doctor.name}</Text>
      <Text style={styles.timeSlot}>Time: {result.time}</Text>
      <Text style={styles.resultText}>Result: {result.result}</Text>
      <Text style={styles.serviceTitle}>Service: {result.serviceTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  resultItem: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    marginBottom: 10,
    borderRadius: 5,
  },
  hospitalName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  doctorName: {
    fontSize: 16,
  },
  timeSlot: {
    fontSize: 16,
  },
  resultText: {
    fontSize: 16,
    marginTop: 10,
  },
  serviceTitle: {
    fontSize: 16,
  },
})