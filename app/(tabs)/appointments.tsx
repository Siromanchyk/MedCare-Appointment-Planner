import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Appointment from '@/interfaces/appointment';
import NoAppointmentsMessage from '@/components/appointments/NoAppointmentsMessage';
import AppointmentDetails from '@/components/appointments/AppointmentDetails';
import ResultButton from '@/components/appointments/ResultButton';

export default function AppointmentsScreen() {
  const router = useRouter();
  const { appointment: appointmentString } = useLocalSearchParams();
  const newAppointment: Appointment | null = appointmentString ? JSON.parse(appointmentString as string) : null;
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (newAppointment) {
      setAppointment(newAppointment);
    }
  }, [newAppointment]);

  if (!appointment) {
    return <NoAppointmentsMessage />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your Appointment</Text>
      <AppointmentDetails appointment={appointment} />
      <ResultButton appointment={appointment} router={router} />
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
});