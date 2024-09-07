export type UserSub = string;

export interface AuthUser {
  sub: UserSub;
  name: string;
  iat: number;
}
