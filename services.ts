import Doctor from "./interfaces/doctor";
import Service from "./interfaces/service";

export const services: Service[] = [
  {
    photo: require('@/assets/images/services/primary-care.png'),
    title: 'Primary Care',
    subtitle: 'Your heart health, our priority',
    route: '/hospital-selection',
  },
  {
    photo: require('@/assets/images/services/pediatric.png'),
    title: 'Pediatrics',
    subtitle: "Dedicated to your child's well-being",
    route: '/hospital-selection',
  },
  {
    photo: require('@/assets/images/services/cardiology.png'),
    title: 'Cargiology',
    subtitle: "Caring for your cardiovascular well-being",
    route: '/hospital-selection',
  },
  {
    photo: require('@/assets/images/services/orthopedics.png'),
    title: 'Orthopedics',
    subtitle: 'Protecting your precious sight',
    route: '/hospital-selection',
  },
  {
    photo: require('@/assets/images/services/dermatology.png'),
    title: 'Dermatology',
    subtitle: 'Solutions for your skin concerns',
    route: '/hospital-selection',
  },
  {
    photo: require('@/assets/images/services/ophthalmology.png'),
    title: 'Ophthalmology',
    subtitle: 'Protecting your precious sight',
    route: '/hospital-selection',
  },
];

export const doctors: Doctor[] = [
  { name: 'Dr. Smith', specialty: 'General Practitioner' },
  { name: 'Dr. Johnson', specialty: 'Pediatrician' },
  { name: 'Dr. Williams', specialty: 'Cardiologist' },
];

export const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM',
  '02:00 PM', '03:00 PM', '04:00 PM',
];