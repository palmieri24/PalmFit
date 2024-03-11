export interface AuthData {
  accessToken: string;
  user: {
    email: string;
    password: string;
    role: string;
  };
}
