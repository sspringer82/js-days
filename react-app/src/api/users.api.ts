import { User } from '../types/User';

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  return response.json() as Promise<User[]>;
}

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`http://localhost:3001/users/${id}`);
  return response.json() as Promise<User>;
}
