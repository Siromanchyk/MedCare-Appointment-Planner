import Doctor from "./doctor";
import Hospital from "./hospital";

export default interface Result {
  hospital: Hospital;
  serviceTitle: string;
  doctor: Doctor;
  time: string;
  result: string;
}