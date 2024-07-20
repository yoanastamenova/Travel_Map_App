import { Router } from "express";
import { createPin, getAllPins } from "../controllers/pins.controller.js";

const router = Router();

// create a pin
// get all pins

router.post('/create', createPin);
router.get('/all', getAllPins);


export default router