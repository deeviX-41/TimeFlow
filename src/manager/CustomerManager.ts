import { Customer } from "../models/Person";

class CustomerManager {
  private customers: Customer[] = [];

  add(customers: Customer): void {
    this.customers.push(customers);
  }

  list(): Customer[] {
    return this.customers;
  }

  findById(id: number): Customer | undefined {
    return this.customers.find((c) => c.id === id);
  }

  remove(id: number): void {
    this.customers = this.customers.filter((c) => c.id !== id);
  }
}

export { CustomerManager };
