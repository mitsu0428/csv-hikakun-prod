import { createTransport } from 'nodemailer';

const mailApi =  async (req: any, res: any) => {
  const transporter = createTransport({
    service: 'gmail',
    port: 465,
    secure: true,
    auth: {
      user: process.env.NEXT_PUBLIC_MAIL_USER,
      pass: process.env.NEXT_PUBLIC_MAIL_PASS,
    },
  });
  await transporter.sendMail({
    from: process.env.NEXT_PUBLIC_MAIL_USER,
    to: process.env.NEXT_PUBLIC_MAIL_USER,
    subject: 'お問い合わせ',
    text: req.body,
  });

  res.status(200).json({
    success: true,
  });
};

export default mailApi