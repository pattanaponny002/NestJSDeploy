import * as mongoose from 'mongoose';
export declare const UserSchema: mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    name?: string;
    email?: string;
    age?: number;
}, mongoose.Document<unknown, {}, {
    name?: string;
    email?: string;
    age?: number;
}> & {
    name?: string;
    email?: string;
    age?: number;
} & {
    _id: mongoose.Types.ObjectId;
}>;
