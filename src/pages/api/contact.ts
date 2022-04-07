import { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

export default function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
      user: process.env.MAILER_USER,
      pass: process.env.MAILER_PASS,
    },
  });

  const mailData = {
    from: process.env.MAILER_USER,
    to: 'davifsroberto@outlook.com',
    subject: `Subject: ${req.body.subject}`,
    html: `
      <div>Message:<br />${req.body.message}</div>
      <br />
      <div>
        <p>
          <strong>Sent from:</strong>
          <br />
          Name: ${req.body.name}
          <br />
          Email: ${req.body.email}
          <br />
          Phone: ${req.body.phone}
        </p>
      </div>
    `,
  };

  transporter.sendMail(mailData, function (err, info) {
    console.log(mailData);

    info ? console.log(info, mailData) : console.error(err);
  });

  res.send('success');
}
