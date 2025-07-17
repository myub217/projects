// ✅ api/contact.ts – API Endpoint สำหรับฟอร์มติดต่อ (Contact Form) พร้อมใช้งาน

import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return res.status(400).json({ error: 'กรุณากรอกข้อมูลให้ครบถ้วน' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST || 'smtp.gmail.com',
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.MAIL_TO,
      subject: '📩 ข้อความใหม่จาก Contact Form',
      html: `
        <h2>คุณมีข้อความใหม่จากเว็บไซต์</h2>
        <p><strong>ชื่อ:</strong> ${name}</p>
        <p><strong>อีเมล:</strong> ${email}</p>
        <p><strong>ข้อความ:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    return res.status(200).json({ success: true, message: 'ส่งข้อความสำเร็จแล้ว' });
  } catch (error) {
    console.error('❌ Error sending mail:', error);
    return res.status(500).json({ error: 'ไม่สามารถส่งข้อความได้ในขณะนี้' });
  }
});

export default router;