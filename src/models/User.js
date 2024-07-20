import { Schema,model } from "mongoose";

const UserSchema = new Schema(
    {
        username: {
            type: String,
            require: true,
            min: 3,
            max: 20,
            unique: true
        },
        email: {
            type: String,
            require: true,
            max: 50,
            unique: true
        },
        password: {
            type: String,
            require: true,
            min: 8
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const User = model('User', UserSchema)
export default User;