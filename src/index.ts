import { User, Customer } from "./models/Person";
import { Appointment } from "./models/Appointment";

import { UserManager } from "./manager/UserManager";
import { CustomerManager } from "./manager/CustomerManager";
import { AppointmentManager } from "./manager/AppointmentManager";

const userManager = new UserManager();
const customerManager = new CustomerManager();
const appointmentManager = new AppointmentManager();

const user1 = new User(1, "Dr. House", 123456789, "house@clinic.com");
userManager.add(user1);

const customer1 = new Customer(1, "Juan XD", 987654321, "juan@gmail.com");
customerManager.add(customer1);

const cita1 = new Appointment(
  1,
  user1,
  customer1,
  "2025-09-20",
  "10:00",
  "pendiente",
);
appointmentManager.add(cita1);

console.log("Citas pendientes:");
console.log(appointmentManager.listPending());

appointmentManager.cancel(1);

console.log("Citas después de cancelar:");
console.log(appointmentManager.list());
