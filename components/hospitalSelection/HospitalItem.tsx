import { Text, Pressable, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import Hospital from '@/interfaces/hospital';

export default function HospitalItem({ hospital, serviceTitle }: { hospital: Hospital; serviceTitle: string }) {
  const router = useRouter();

  return (
    <Pressable
      style={styles.hospitalItem}
      onPress={() =>
        router.push({
          pathname: '/selections/doctor-selection',
          params: { hospital: JSON.stringify(hospital), serviceTitle: serviceTitle },
        })
      }
    >
      <Text style={styles.hospitalName}>{hospital.name}</Text>
      <Text>
        {hospital.city}, {hospital.state}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  hospitalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  hospitalName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})