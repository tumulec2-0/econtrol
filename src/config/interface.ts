import { IUser } from '../models/User';
import { Request } from 'express';

export interface IReqAuth extends Request {
    user?: IUser
}
