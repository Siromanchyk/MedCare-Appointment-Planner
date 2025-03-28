import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import Appointment from '@/interfaces/appointment';
import NoAppointmentsMessage from '@/components/appointments/NoAppointmentsMessage';
import AppointmentDetails from '@/components/appointments/AppointmentDetails';
import ResultButton from '@/components/appointments/ResultButton';
import { DATABASE_ID, COLLECTION_ID, ID_APPWRITE, databases, account } from '@/appwriteConfig';

export default function AppointmentsScreen() {
  const router = useRouter();
  const { appointment: appointmentString } = useLocalSearchParams<{ appointment: string }>();
  const [appointment, setAppointment] = useState<Appointment | null>(null);

  useEffect(() => {
    if (appointmentString) {
      const newAppointment: Appointment = JSON.parse(appointmentString);
      setAppointment(newAppointment);
      createAppointmentInDatabase(newAppointment);
    }
  }, [appointmentString]);

  const createAppointmentInDatabase = async (appointmentData: Appointment) => {
    try {
      console.log("Getting user info...");
      const user = await account.get(); 
      console.log("User Info:", user);

      if (!user) {
        console.log("User is null, authentication problem");
      }

      await databases.createDocument(DATABASE_ID, COLLECTION_ID, ID_APPWRITE.unique(), {
        hospitalName: appointmentData.hospital.name,
        hospitalCity: appointmentData.hospital.city,
        hospitalState: appointmentData.hospital.state,
        doctorName: appointmentData.doctor.name,
        doctorSpecialty: appointmentData.doctor.specialty,
        time: appointmentData.time,
        serviceTitle: appointmentData.serviceTitle,
        userId: user.$id,
      });
      console.log('Appointment created in database');
    } catch (error) {
      console.error('Error creating appointment in database:', error);
    }
  };
  
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