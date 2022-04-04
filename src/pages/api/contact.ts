import { NextApiRequest, NextApiResponse } from 'next';

import nodemailer from 'nodemailer';

// TODO: add dotenv
export default function (req: NextApiRequest, res: NextApiResponse) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,

    auth: {
      user: 'TODO',
      pass: 'TODO',
    },
  });

  const mailData = {
    from: 'davirobertoteste@gmail.com',
    to: 'daviroberto11@hotmail.com',
    subject: `Subject: ${req.body.subject}`,
    html: `
      <div>${req.body.message}</div>
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
