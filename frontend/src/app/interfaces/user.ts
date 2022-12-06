export interface IUser {
    username: string;
    email: string;
    hashedPassword: string;
    blocked: boolean;
}