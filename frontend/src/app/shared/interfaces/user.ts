export interface IUser {
    _id: string;
    username: string;
    email: string;
    hashedPassword: string;
    blocked: boolean;
}