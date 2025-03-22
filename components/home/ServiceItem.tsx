import { Text, View, StyleSheet, Image, Pressable } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import Service from "@/interfaces/service";

export default function ServiceItem({
  service,
  router,
}: {
  service: Service;
  router: any; // Or a more specific type if available from expo-router
}) {
  return (
    <Pressable
      style={styles.serviceItem}
      onPress={() => router.push({ pathname: '/selections/hospital-selection', params: { serviceTitle: service.title } })}
    >
      <View style={styles.serviceContent}>
        <View style={styles.imageContainer}>
          <Image source={service.photo} style={styles.serviceImage} />
        </View>
        <View style={styles.serviceText}>
          <Text style={styles.serviceTitle}>{service.title}</Text>
          <Text style={styles.serviceSubtitle}>{service.subtitle}</Text>
        </View>
      </View>
      <AntDesign name="right" size={24} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  serviceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomColor: '#ccc',
  },
  serviceContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  imageContainer: {
    backgroundColor: '#E4E4E4', 
    width: 60, 
    height: 60, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  serviceImage: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  serviceText: {
    flex: 1, 
    paddingLeft: 10,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  serviceSubtitle: {
    fontSize: 14,
    color: 'gray',
  },
})