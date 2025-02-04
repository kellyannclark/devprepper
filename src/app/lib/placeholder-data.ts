import { Question } from "./definitions";
import { User } from "./definitions";
import bcrypt from "bcryptjs"; // Simulate password hashing


//finds a user by email and passowrd
export function authenticateUser(email: string, password: string): User | null {
    const user = users.find((u) => u.email === email);
    if (!user) return null;
  
    // Compares passwords (use bcrypt in production)
    const passwordsMatch = bcrypt.compareSync(password, user.password);
    return passwordsMatch ? user : null;
  }
  

// Hash passwords (for real apps, store hashed passwords)
const hashedPassword = bcrypt.hashSync("password123", 10);

export const users: User[] = [
  {
    id: "1",
    name: "John Doe",
    email: "customer@example.com",
    password: hashedPassword, // Use hashed password
    role: "customer",
  },
  {
    id: "2",
    name: "Admin User",
    email: "admin@example.com",
    password: hashedPassword,
    role: "admin",
  },
];




export const questions: Question[] = [
  {
    id: "q1",
    category: "technical",
    difficulty: "medium",
    question: "What is the time complexity of a binary search algorithm?",
    answers: ["O(n)", "O(log n)", "O(n log n)", "O(1)"],
    correctAnswer: "O(log n)",
    explanation: "Binary search halves the search space each time, leading to a logarithmic time complexity."
  },
  {
    id: "q2",
    category: "behavioral",
    difficulty: "easy",
    question: "How do you handle conflict in a team setting?",
    answers: [
      "Ignore it and hope it resolves itself",
      "Address it openly and seek a solution",
      "Blame the other person",
      "Escalate to management immediately"
    ],
    correctAnswer: "Address it openly and seek a solution",
    explanation: "Constructive communication is key in resolving team conflicts effectively."
  },
  {
    id: "q3",
    category: "data-structures",
    difficulty: "hard",
    question: "Which data structure is best for implementing a LRU cache?",
    answers: ["Array", "Stack", "Doubly Linked List + Hash Map", "Queue"],
    correctAnswer: "Doubly Linked List + Hash Map",
    explanation: "A combination of a doubly linked list and a hash map provides efficient O(1) insert, delete, and access operations."
  }
];
