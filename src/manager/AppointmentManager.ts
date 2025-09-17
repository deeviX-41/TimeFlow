import { Appointment } from "../models/Appointment";

class AppointmentManager {
  private appointments: Appointment[] = [];

  add(appointment: Appointment): void {
    this.appointments.push(appointment);
  }

  list(): Appointment[] {
    return this.appointments;
  }

  findById(id: number): Appointment | undefined {
    return this.appointments.find((a) => a.id === id);
  }

  cancel(id: number): void {
    const app = this.findById(id);
    if (app) {
      app.status = "cancelada";
    }
  }

  listPending(): Appointment[] {
    return this.appointments.filter((a) => a.status.includes("pendiente"));
  }

  listFinished(): Appointment[] {
    return this.appointments.filter((a) => a.status.includes("hecha"));
  }
}

export { AppointmentManager };
