import express from 'express';
const router = express.Router();
import { getMessage } from '../controllers/messageController.js';

router.route('/').get(getMessage);

export default router;