export interface Membership {
  membershipType: MembershipType;
  price?: number;
  start_date: Date;
  description?: string;
  user_id: string;
}

export enum MembershipType {
  MONTHLY = 'MONTHLY',
  THREE_MONTH = 'THREE_MONTH',
  ANNUAL = 'ANNUAL',
}
