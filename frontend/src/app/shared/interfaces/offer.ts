import { IUser } from "./user";

export interface IOffer {
    _id: string;
    brand: string;
    model: string;
    price: number;
    year: number;
    description: string;
    imageUrl: string;
    phoneNumber: string;
    _ownerId: IUser;
}