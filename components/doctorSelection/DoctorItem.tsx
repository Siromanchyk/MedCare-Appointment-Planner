import Doctor from '@/interfaces/doctor';
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

export default function DoctorItem({ doctor, onSelect }: { doctor: Doctor; onSelect: (doctor: Doctor) => void }) {
  return (
    <Pressable style={styles.doctorItem} onPress={() => onSelect(doctor)}>
      <Text style={styles.doctorName}>{doctor.name}</Text>
      <Text>{doctor.specialty}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  doctorItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})