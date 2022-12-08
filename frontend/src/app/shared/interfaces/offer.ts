import { IUser } from "./user";

export interface IOffer {
    _id: string;
    vehicleBrand: string;
    vehicleModel: string;
    price: number;
    year: number;
    description: string;
    imageUrl: string;
    phoneNumber: string;
    _ownerId: IUser;
}