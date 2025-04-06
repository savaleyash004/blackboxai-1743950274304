import express from 'express';
import { getInquiries, createInquiry, updateInquiryStatus, deleteInquiry } from '../controllers/inquiryController.js';
import { authMiddleware, isAdmin } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public route for creating inquiries
router.post('/', createInquiry);

// Protected admin routes
router.get('/', authMiddleware, isAdmin, getInquiries);
router.put('/:id', authMiddleware, isAdmin, updateInquiryStatus);
router.delete('/:id', authMiddleware, isAdmin, deleteInquiry);

export default router;