import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import Result from '@/interfaces/result';
import NoResultAvailable from '@/components/results/NoResultAvailable';
import ResultDetails from '@/components/results/ResultDetails';


export default function ResultsScreen() {
  const { result: resultString } = useLocalSearchParams();
  const result: Result | null = resultString ? JSON.parse(resultString as string) : null;

  if (!result) {
    return <NoResultAvailable />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Appointment Result</Text>
      <ResultDetails result={result} />
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