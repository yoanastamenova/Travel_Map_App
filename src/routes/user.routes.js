import { Router } from "express";
import { login, register } from "../controllers/users.controller.js";

const router = Router();

// create a user
router.post('/register', register);
// login as user
router.post('/login', login);

export default router