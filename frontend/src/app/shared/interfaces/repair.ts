import { IUser } from './user';

export interface IRepair {
    imageUrl: string;
    problem: string;
    brandModelVehicle: string;
    phoneNumber: string;
    _ownerId: IUser;
}