import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Doctor from '@/interfaces/doctor';
import Hospital from '@/interfaces/hospital';
import AppointmentDetails from '@/interfaces/appointmentDetails';
import TimeSlotItem from './TimeSlotItem';
import { timeSlots } from '@/services';

export default function TimeSelection({ 
  selectedDoctor, 
  hospital, 
  serviceTitle }: { 
    selectedDoctor: Doctor; 
    hospital: Hospital; 
    serviceTitle: string }) {
  const router = useRouter();

  const selectTimeSlot = (time: string) => {
    router.push({
      pathname: '/appointments',
      params: {
        appointment: JSON.stringify({
          hospital,
          serviceTitle,
          doctor: selectedDoctor,
          time,
        } as AppointmentDetails),
      },
    });
  };

  return (
    <View style={styles.timeSelection}>
      <Text style={styles.subtitle}>Select a Time Slot:</Text>
      <FlatList
        data={timeSlots}
        keyExtractor={(item) => item}
        numColumns={3}
        renderItem={({ item }) => <TimeSlotItem time={item} onSelect={selectTimeSlot} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  timeSelection: {
    marginTop: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})