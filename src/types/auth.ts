export type UserSub = string;

export interface AuthUser {
  sub: UserSub;
  email: string;
  fullName: string;
  iat: number;
}
