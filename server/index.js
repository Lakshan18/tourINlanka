require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');

const app = express();

// Middleware
app.use(cors({
    origin: [
      'http://localhost:5173',
      'https://tourism-web-react.vercel.app/'
    ]
}));
app.use(express.json());

// Email transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD
    }
});

// Email endpoint
app.post('/api/send-email', async (req, res) => {
    const { name, email, mobile, travelers, message } = req.body;

    try {
        // Send email to admin
        await transporter.sendMail({
            from: `"Website Form" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_USER,
            subject: `New Travel Inquiry from ${name}`,
            html: `
        <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; color: #333;">
          <!-- Header -->
          <div style="background: linear-gradient(135deg, #2563eb 0%, #1e40af 100%); padding: 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">NEW TRAVEL INQUIRY</h1>
            <p style="color: rgba(255,255,255,0.8); margin: 5px 0 0; font-size: 16px;">ABC Travels - Sri Lanka</p>
          </div>
          
          <!-- Content -->
          <div style="padding: 30px; background: #fff; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <!-- Customer Info -->
            <div style="margin-bottom: 25px;">
              <h2 style="color: #1e40af; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 15px;">Customer Details</h2>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
                <div>
                  <p style="font-weight: 600; margin: 0 0 5px; color: #4b5563;">Full Name</p>
                  <p style="margin: 0; background: #f9fafb; padding: 10px; border-radius: 6px;">${name}</p>
                </div>
                
                <div>
                  <p style="font-weight: 600; margin: 0 0 5px; color: #4b5563;">Email</p>
                  <p style="margin: 0; background: #f9fafb; padding: 10px; border-radius: 6px;">
                    <a href="mailto:${email}" style="color: #3b82f6; text-decoration: none;">${email}</a>
                  </p>
                </div>
              </div>
              
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                <div>
                  <p style="font-weight: 600; margin: 0 0 5px; color: #4b5563;">Mobile</p>
                  <p style="margin: 0; background: #f9fafb; padding: 10px; border-radius: 6px;">${mobile}</p>
                </div>
                
                <div>
                  <p style="font-weight: 600; margin: 0 0 5px; color: #4b5563;">Travelers</p>
                  <p style="margin: 0; background: #f9fafb; padding: 10px; border-radius: 6px;">${travelers}</p>
                </div>
              </div>
            </div>
            
            <!-- Travel Preferences -->
            <div>
              <h2 style="color: #1e40af; font-size: 20px; border-bottom: 2px solid #e5e7eb; padding-bottom: 8px; margin-bottom: 15px;">Travel Preferences</h2>
              <div style="background: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #2563eb;">
                <p style="margin: 0; white-space: pre-wrap; line-height: 1.6;">${message}</p>
              </div>
            </div>
            
            <!-- Action Button -->
            <div style="text-align: center; margin-top: 30px;">
              <a href="mailto:${email}" style="display: inline-block; background: #2563eb; color: white; padding: 12px 25px; border-radius: 6px; text-decoration: none; font-weight: 600; transition: all 0.3s;">
                Reply to ${name.split(' ')[0]}
              </a>
            </div>
          </div>
          
          <!-- Footer -->
          <div style="text-align: center; margin-top: 20px; color: #6b7280; font-size: 12px;">
            <p>This inquiry was submitted from your website contact form.</p>
            <p>© ${new Date().getFullYear()} ABC Travels. All rights reserved.</p>
          </div>
        </div>
      `
        });

        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Email error:', error);
        res.status(500).json({ error: 'Failed to send email' });
    }
});

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});