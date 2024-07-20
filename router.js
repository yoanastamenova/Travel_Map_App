import { Router } from "express";
import pinRoutes from './src/routes/pins.routes.js';
import userRoutes from './src/routes/user.routes.js';

const router = Router()

router.use('/pins', pinRoutes)
router.use('/posts', userRoutes)

export default router