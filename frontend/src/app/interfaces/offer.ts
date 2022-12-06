import { IUser } from "./user";

export interface IOffer {
    vehicleBrand: string;
    vehicleModel: string;
    price: number;
    year: number;
    description: string;
    imageUrl: string;
    phoneNumber: string;
    _ownerId: IUser;
}