import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
const app = express();
const port = 3001;

// Use JSON parser and cors
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173', // Allow React frontend on port 5173
    methods: ['GET', 'POST'],
}));

// SMTP configuration
const transporter = nodemailer.createTransport({
    host: 'mail.spacemail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'hr@proximitypro.org', // Your SMTP username
        pass: 'Ae064Dd3-1e94-40f2-8c76-A6CC8d5efa2c', // Your SMTP password
    },
});

// Handle POST request from React frontend
app.post('/send-email', async (req, res) => {
    const { name, email, method, message } = req.body;

    // Custom email body format
    const emailBody = `
    <p>Dear ${name},</p>
    <p>I hope this message finds you in great spirits. I just wanted to reach out and express my gratitude for your kind thoughts and unwavering support. Your encouragement means so much to me, and I truly value having someone as thoughtful as you in my life.</p>
    <p>I hope everything is going well on your end. If there’s anything I can do or if you’d like to catch up, please let me know—I’d love to hear from you!</p>
    <p>Thank you once again for being such a positive presence.</p>
    <br>
    <p>Best regards,</p>
    <p><strong>ProximityPro</strong></p>
    <img src="https://proximitypro.org/assets/hgv-lN7Ng7AZ.png" alt="ProximityPro Logo" style="width: 50px; height: 50px; border-radius: 50%;" />
    <p>Strategic Product Management Consulting Services</p>
    <p><a href="https://proximitypro.org">proximitypro.org</a> | hr@proximitypro.org</p>
    <p>1215 Nevermore Circle, Bartow, FL, 33830, US</p>
    `;
    const mailOptions = {
        from: "'ProximityPro'<hr@proximitypro.org>",
        to: email,
        subject: 'Thank You for Your Message, ProximityPro | HR',
        html: emailBody,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: 'Email sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.json({ success: false, message: 'Failed to send message, please try again.' });
    }
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
