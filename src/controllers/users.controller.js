import User from '../models/User.js';
import bcrypt from 'bcrypt';

// create a new user
export const register = async (req, res) => {
    try {
        // generating password with bcyrpt package
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = bcrypt.hashSync(req.body.password, salt)
        //generating user properties
        const {username, email} = req.body;
        const newUser = new User(
            {
                username: username,
                email: email,
                password: hashedPassword
            }
        )
        if (!username || !email) {
            return res.status(200).json(
                {
                    success: false,
                    message: "Username and password cannot be empty!"
                }
            )
        }

        const user = await newUser.save();
        res.status(201).json({
            success: true,
            message: "User created!",
            data: user
        }
        )
    } catch (error) {
        res.status(500).json(
            {
                success: false,
                message: "Error registering user!",
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