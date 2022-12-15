export interface IUser {
    _id: string;
    username: string;
    email: string;
    hashedPassword: string;
    pin: string;
    role: string;
    blocked: boolean;
    accessToken: string;
}