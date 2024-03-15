export interface AuthData {
  token: string;
  user: {
    name: any;
    lastname: string;
    age: number;
    email: string;
    password: string;
    avatar: string;
  };
}
