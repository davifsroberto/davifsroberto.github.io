import { send } from '@emailjs/browser';

export type ContactFormPayload = {
  name: string;
  subject: string;
  email: string;
  phone: string;
  message: string;
};

const emailJsServiceId = 'davifsroberto_mailersend';
const emailJsTemplateId = 'template_pygyvlc';
const emailJsPublicKey = 'Uk5RjMiwi1zjJYErr';

export function sendContactEmail(payload: ContactFormPayload) {
  return send(emailJsServiceId, emailJsTemplateId, payload, emailJsPublicKey);
}
