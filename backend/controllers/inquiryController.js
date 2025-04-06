import Inquiry from '../models/Inquiry.js';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

const getInquiries = async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ createdAt: -1 });
        res.json(inquiries);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const createInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.create(req.body);
        
        // Send confirmation email to client
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: inquiry.email,
            subject: 'Your Inquiry Has Been Received',
            html: `<p>Dear ${inquiry.name},</p>
                   <p>Thank you for your inquiry. We have received your message and will get back to you shortly.</p>
                   <p>Best regards,<br/>MPI Solutions Team</p>`
        });

        // Send notification to admin
        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: process.env.ADMIN_EMAIL,
            subject: 'New Inquiry Received',
            html: `<p>A new inquiry has been submitted:</p>
                   <p>Name: ${inquiry.name}</p>
                   <p>Email: ${inquiry.email}</p>
                   <p>Phone: ${inquiry.phone || 'Not provided'}</p>
                   <p>Message: ${inquiry.message}</p>`
        });

        res.status(201).json(inquiry);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const updateInquiryStatus = async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndUpdate(
            req.params.id,
            { status: req.body.status },
            { new: true }
        );
        if (!inquiry) {
            return res.status(404).json({ message: 'Inquiry not found' });
        }
        res.json(inquiry);
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

const deleteInquiry = async (req, res) => {
    try {
        const inquiry = await Inquiry.findByIdAndDelete(req.params.id);
        if (!inquiry) {
            return res.status(404).json({ message: 'Inquiry not found' });
        }
        res.json({ message: 'Inquiry removed' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};

export { 
    getInquiries, 
    createInquiry, 
    updateInquiryStatus, 
    deleteInquiry 
};