

export type UserRole = "customer" | "admin"; // Defines user roles

export interface User {
  id: string;
  name: string;
  email: string;
  password: string; // This must be hashed
  role: UserRole; // Either "customer" or "admin"
}

// Question Difficulty Levels
export type Difficulty = "easy" | "medium" | "hard";

// Question Categories
export type Category = "behavioral" | "technical" | "system-design" | "algorithms" | "data-structures";

// Question Structure
export interface Question {
  id: string;
  category: Category;
  difficulty: Difficulty;
  question: string;
  answers: string[]; // Array of possible answers
  correctAnswer: string; // Correct answer
  explanation?: string; // Optional explanation for the correct answer
}

export interface CodingChallenge {
    id: string;
    title: string;
    description: string;
    exampleInput: string;
    exampleOutput: string;
    expectedAnswer: string; // This is the correct answer the user must provide.
    difficulty: "easy" | "medium" | "hard";
    tags: string[]; // Categories like "algorithms", "strings"
  }
  
  export interface UserProgress {
    userId: string;
    completedQuestions: string[]; // Array of question IDs
    attempts: { questionId: string; userAnswer: string; isCorrect: boolean }[];
  }
  