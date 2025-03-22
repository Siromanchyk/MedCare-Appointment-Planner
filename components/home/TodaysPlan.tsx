import { Text, View, Pressable, StyleSheet } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';

export default function TodaysPlan() {
  return (
    <Pressable style={styles.container}>
      <View style={styles.iconContainer}>
        <View style={styles.iconBackground}>
          <AntDesign name="calendar" size={24} color="black" />
        </View>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Today's Plan</Text>
        <Text style={styles.subtitle}>Consultation with doctor Johnny S</Text>
      </View>
      <View style={styles.arrowContainer}>
        <AntDesign name="right" size={24} color="white" />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1434A4',
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginRight: 15,
  },
  iconBackground: {
    backgroundColor: '#FFFF00',
    padding: 15,
    borderRadius: 5,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
  },
  arrowContainer: {
    marginLeft: 15,
  },
})