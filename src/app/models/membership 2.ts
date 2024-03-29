export interface Membership {
  membershipType: string;
}

export enum MembershipType {
  MONTHLY = 'MONTHLY',
  THREE_MONTH = 'THREE_MONTH',
  ANNUAL = 'ANNUAL',
}
