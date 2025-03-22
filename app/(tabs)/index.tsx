import { ScrollView  } from "react-native";
import { services } from "@/services";
import Header from "@/components/home/Header";
import TodaysPlan from "@/components/home/TodaysPlan";
import ServicesList from "@/components/home/ServicesList";

export default function Home() {
  return (
    <>
      <Header />
      <TodaysPlan />
      <ScrollView>
        <ServicesList services={services} />
      </ScrollView>
    </>
  );
}