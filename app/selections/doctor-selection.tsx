import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Hospital from '@/interfaces/hospital';
import Doctor from '@/interfaces/doctor';
import DoctorItem from '@/components/doctorSelection/DoctorItem';
import TimeSelection from '@/components/doctorSelection/TimeSelection';
import { doctors } from '@/services';

export default function DoctorSelectionScreen() {
  const { hospital: hospitalString, serviceTitle } = useLocalSearchParams();
  const hospital: Hospital = JSON.parse(hospitalString as string);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const serviceTitleString: string = Array.isArray(serviceTitle) ? serviceTitle[0] : serviceTitle;

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text style={styles.title}>
        Select a Doctor at {hospital.name} for {serviceTitleString}
      </Text>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => <DoctorItem doctor={item} onSelect={setSelectedDoctor} />}
      />

      {selectedDoctor && <TimeSelection selectedDoctor={selectedDoctor} hospital={hospital} serviceTitle={serviceTitleString} />}
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
})