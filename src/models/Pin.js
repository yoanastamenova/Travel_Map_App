import { Schema,model } from "mongoose";

const PinSchema = new Schema(
    {
        username: {
            type: String,
            require: true
        },
        title: {
            type: String,
            require: true
        },
        description: {
            type: String,
            require: true
        },
        rating: {
            type: Number,
            require: true,
            min: 0,
            max: 5
        },
        latitude: {
            type: Number,
            require: true
        },
        longitude:{
            type: Number,
            require: true
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
)

const Pin = model('Pin', PinSchema)
export default Pin;