// Type Alias
type UserID = string;

// Interface
interface User {
  id: UserID;
  name: string;
  age: number;
  isAdmin?: boolean; // optional property
}

// Function converted from JS to TS
function greetUser(user: User): string {
  return `Hello, ${user.name}. You are ${user.age} years old.`;
}

const user1: User = {
  id: "u123",
  name: "Manish",
  age: 25,
};

console.log(greetUser(user1));
