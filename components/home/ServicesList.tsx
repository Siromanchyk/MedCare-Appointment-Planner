import { Text, View } from "react-native";
import { useRouter } from "expo-router";
import Service from "@/interfaces/service";
import ServiceItem from "./ServiceItem";

export default function ServicesList({ services }: { services: Service[] }) {
  const router = useRouter();

  return (
    <View style={{ paddingHorizontal: 15, paddingTop: 10 }}>
      <Text style={{ fontFamily: 'RobotoRegular', fontSize: 24, fontWeight: 600 }}>Our Services</Text>
      <View>
        {services.map((service, index) => (
          <ServiceItem key={index} service={service} router={router} />
        ))}
      </View>
    </View>
  );
}