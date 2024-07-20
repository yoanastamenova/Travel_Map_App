import Pin from '../models/Pin.js';

// create a pin
export const createPin = async (req, res) => {
    const newPin = new Pin(req.body)
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

//get all pins

export const getAllPins = async (req, res) => {
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