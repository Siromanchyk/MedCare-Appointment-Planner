import { Text, Pressable, StyleSheet } from 'react-native';

export default function TimeSlotItem({ time, onSelect }: { time: string; onSelect: (time: string) => void }) {
  return (
    <Pressable style={styles.timeSlot} onPress={() => onSelect(time)}>
      <Text>{time}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  timeSlot: {
    backgroundColor: '#ddd',
    padding: 10,
    margin: 5,
    borderRadius: 5,
    alignItems: 'center',
  },
})