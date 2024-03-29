import { Membership, MembershipType } from './membership 2';

export interface User {
  id: string;
  name: string;
  lastname: string;
  age: number;
  email: string;
  password: string;
  role: string;
  avatar: string;
  membership: Membership;
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

export interface ProfileMembership {
  membershipType: MembershipType;
  start_date: Date;
  exp_date: Date;
}
