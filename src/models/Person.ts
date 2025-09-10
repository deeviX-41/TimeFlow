class Person {
  id: number;
  name: string;
  phone: number;
  email: string;

  constructor(id: number, name: string, phone: number, email: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.email = email;
  }
}

class User extends Person {}
class Customer extends Person {}

export { User, Customer };
