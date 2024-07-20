import User from '../models/User.js';
import bcrypt from 'bcrypt';

// create a new user
export const register = async (req, res) => {
    const newUser = new User(req.body)
    try {
        const savedPin = await newPin.save();
        res.status(200).json(
            {
                success: true,
                message: "New Pin created successfully!",
                data: savedPin
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error creating new pin!",
                error: error
            })
    }
}

//login as user

export const login = async (req, res) => {
    try {
        const pins = await Pin.find();
        res.status(200).json(
            {
                success: true,
                message: "All pins retrived successfully!",
                data: pins
            }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error getting pins!",
                error: error
            }
        )
    }
}