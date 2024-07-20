import { Router } from "express";
import pinRoutes from './src/routes/pins.routes.js';
import userRoutes from './src/routes/user.routes.js';

const router = Router()

router.use('/pins', pinRoutes)
router.use('/users', userRoutes)

export default router