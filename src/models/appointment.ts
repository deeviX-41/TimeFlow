import { User, Customer } from "./person";

type appointmentState = "pendiente" | "hecha" | "cancelada";

class Appointment {
  id: number;
  user: User;
  customer: Customer;
  date: string;
  hour: string;
  status: appointmentState;

  constructor(
    id: number,
    user: User,
    customer: Customer,
    date: string,
    hour: string,
    status: appointmentState,
  ) {
    this.id = id;
    this.user = user;
    this.customer = customer;
    this.date = date;
    this.hour = hour;
    this.status = status;
  }
}

export { Appointment };
