import { IUser } from './user';

export interface IRepair {
    imageUrl: string;
    problem: string;
    brandmodel: string;
    phoneNumber: string;
    _ownerId: IUser;
}