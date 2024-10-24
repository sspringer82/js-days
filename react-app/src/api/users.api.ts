import { User } from '../types/User';

async function wait(time: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

export async function getAllUsers(): Promise<User[]> {
  const response = await fetch('http://localhost:3001/users');
  if (!response.ok) {
    throw new Error('Failed to fetch users');
  }
  const users = (await response.json()) as Promise<User[]>;
  await wait(0);
  return users;
}

export async function getUserById(id: string): Promise<User> {
  const response = await fetch(`http://localhost:3001/users/${id}`);
  return response.json() as Promise<User>;
}

export async function createUser(user: User): Promise<User> {
  const response = await fetch('http://localhost:3001/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json() as Promise<User>;
}

export async function updateUser(user: User): Promise<User> {
  const response = await fetch(`http://localhost:3001/users/${user.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
  return response.json() as Promise<User>;
}
