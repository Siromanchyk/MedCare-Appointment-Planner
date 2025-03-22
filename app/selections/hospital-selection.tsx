import React, { useState, useEffect } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Hospital from '@/interfaces/hospital';
import LoadingIndicator from '@/components/hospitalSelection/LoadingIndicator';
import HospitalList from '@/components/hospitalSelection/HospitalList';

export default function HospitalSelectionScreen() {
  const { serviceTitle } = useLocalSearchParams();
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [loading, setLoading] = useState(true);
  const apiKey = 'HkSOkuL1+stmvU877RLD/g==AepxPdKYT22gmyYV';
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchHospitals = async () => {
      try {
        let apiUrl = `https://api.api-ninjas.com/v1/hospitals`;

        if (searchTerm) {
          apiUrl += `?name=${searchTerm}`;
        }

        const response = await fetch(apiUrl, {
          headers: { 'X-Api-Key': apiKey },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data: Hospital[] = await response.json();
        setHospitals(data);
      } catch (error) {
        console.error('Error fetching hospitals:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchHospitals();
  }, [searchTerm]);

  const serviceTitleString: string = Array.isArray(serviceTitle) ? serviceTitle[0] : serviceTitle;

  if (loading) {
    return <LoadingIndicator />;
  }

  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
        Select a Hospital for {serviceTitleString}
      </Text>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, paddingHorizontal: 8 }}
        placeholder="Search by hospital name"
        onChangeText={setSearchTerm}
        value={searchTerm}
      />
      <HospitalList hospitals={hospitals} serviceTitle={serviceTitleString} />
    </View>
  );
}
