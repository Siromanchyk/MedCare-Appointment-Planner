import Result from '@/interfaces/result';
import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';
import { resultPhrases } from '@/phrases-doctors'
import Appointment from '@/interfaces/appointment';

export default function ResultButton({ appointment, router }: { appointment: Appointment, router: any }) {
  const generateResult = () => {
    const randomIndex = Math.floor(Math.random() * resultPhrases.length);
    const randomResult = resultPhrases[randomIndex];

    const result: Result = {
      hospital: appointment.hospital,
      doctor: appointment.doctor,
      time: appointment.time,
      result: randomResult,
      serviceTitle: appointment.serviceTitle,
    };

    router.push({
      pathname: '/results',
      params: { result: JSON.stringify(result) },
    });
  };

  return (
    <Pressable style={styles.button} onPress={generateResult}>
      <Text style={styles.buttonText}>View Result</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'lightblue',
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
  },
})