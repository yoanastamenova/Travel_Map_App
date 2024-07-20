import { Router } from "express";
import { login, register } from "../controllers/users.controller";

const router = Router();

// create a user
router.post('/register', register);
// login as user
router.post('/login', login);
// get all users
router.get('/all', getAllUsers);



export default router