export interface User {
  id: string;
  name: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  role: string;
  avatar: string;
}

export interface Profile {
  name: string;
  lastname: string;
  age: number;
  email: string;
  avatar: string;
}

export interface UpdateProfile {
  name: string;
  lastname: string;
  age: number;
  email: string;
}
