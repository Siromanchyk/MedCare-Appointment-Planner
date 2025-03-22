import { FlatList } from 'react-native';
import Hospital from '@/interfaces/hospital';
import HospitalItem from './HospitalItem';

export default function HospitalList({ hospitals, serviceTitle }: { hospitals: Hospital[]; serviceTitle: string }) {
  return (
    <FlatList
      data={hospitals}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => <HospitalItem hospital={item} serviceTitle={serviceTitle} />}
    />
  );
}
