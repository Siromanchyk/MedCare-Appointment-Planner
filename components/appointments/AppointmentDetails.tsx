import Appointment from '@/interfaces/appointment';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AppointmentDetails({ appointment }: { appointment: Appointment }) {
  return (
    <View style={styles.appointmentItem}>
      <Text style={styles.hospitalName}>{appointment.hospital.name}</Text>
      <Text style={styles.doctorName}>Doctor: {appointment.doctor.name}</Text>
      <Text style={styles.timeSlot}>Time: {appointment.time}</Text>
      <Text style={styles.serviceTitle}>Service: {appointment.serviceTitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  appointmentItem: {
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
  serviceTitle: {
    fontSize: 16,
  },
})