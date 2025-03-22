interface Appointment {
  hospital: { name: string };
  doctor: { name: string };
  time: string;
  serviceTitle: string;
}

export default Appointment;