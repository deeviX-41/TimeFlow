import { User } from "../models/Person";

class UserManager {
  private users: User[] = [];

  add(user: User): void {
    this.users.push(user);
  }

  list(): User[] {
    return this.users;
  }

  findById(id: number): User | undefined {
    return this.users.find((u) => u.id === id);
  }

  remove(id: number): void {
    this.users = this.users.filter((u) => u.id !== id);
  }
}

export { UserManager };
