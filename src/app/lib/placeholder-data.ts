import { Question } from "./definitions";
import { User } from "./definitions";
import bcrypt from "bcryptjs"; // Simulate password hashing
import { CodingChallenge } from "./definitions";

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

//Coding Challenges
export const challenges: CodingChallenge[] = [
  {
    id: "1",
    title: "Sum of Two Numbers",
    description: "Write a function that takes two numbers and returns their sum.",
    exampleInput: "sum(3, 5)",
    exampleOutput: "8",
    expectedAnswer: "8",
    difficulty: "easy",
    tags: ["math", "functions"],
  },
  {
    id: "2",
    title: "Reverse a String",
    description: "Write a function that reverses a given string.",
    exampleInput: `"hello"`,
    exampleOutput: `"olleh"`,
    expectedAnswer: "olleh",
    difficulty: "easy",
    tags: ["strings", "algorithms"],
  },
  {
    id: "3",
    title: "Check for Palindrome",
    description: "Write a function that checks if a string is a palindrome.",
    exampleInput: `"racecar"`,
    exampleOutput: `"true"`,
    expectedAnswer: "true",
    difficulty: "medium",
    tags: ["strings", "logic"],
  },
  {
    id: "4",
    title: "Find Maximum in an Array",
    description: "Write a function that returns the largest number in an array.",
    exampleInput: `[1, 5, 3, 9, 2]`,
    exampleOutput: `"9"`,
    expectedAnswer: "9",
    difficulty: "medium",
    tags: ["arrays", "math"],
  },
  {
    id: "5",
    title: "FizzBuzz",
    description: "Write a function that prints numbers from 1 to n, replacing multiples of 3 with 'Fizz', multiples of 5 with 'Buzz', and multiples of both with 'FizzBuzz'.",
    exampleInput: `"5"`,
    exampleOutput: `["1", "2", "Fizz", "4", "Buzz"]`,
    expectedAnswer: `["1", "2", "Fizz", "4", "Buzz"]`,
    difficulty: "hard",
    tags: ["loops", "conditionals"],
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
