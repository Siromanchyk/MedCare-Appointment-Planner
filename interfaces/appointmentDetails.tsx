import Doctor from "./doctor";
import Hospital from "./hospital";

export default interface AppointmentDetails {
  hospital: Hospital;
  serviceTitle: string;
  doctor: Doctor;
  time: string;
}