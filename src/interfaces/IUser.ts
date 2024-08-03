import { Schema } from 'mongoose';

interface IEvents {
  _id: Schema.Types.ObjectId;
}

interface IQuestion {
  firstAnimal: string;
  firstTeacher: string;
  cityFathers: string;
}
export interface IUser {
  _id: Schema.Types.ObjectId;
  name: string;
  phone: string;
  email: string;
  password: string;
  events: IEvents[];
  questions: IQuestion[];
  createdAt: Date;
  updatedAt: Date;
}
