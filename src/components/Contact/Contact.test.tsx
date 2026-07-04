import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { toast } from 'react-toastify';
import { describe, expect, it } from 'vitest';

import { Contact } from './index';
import contact from '../../locales/home/contact/index.json';
import { emailSendMock } from '../../test/mocks/emailjs';
import { setMockRouter } from '../../test/mocks/next-router';

function getContactForm(container: HTMLElement) {
  const form = container.querySelector('#contact-form');

  if (!form) {
    throw new Error('Contact form was not rendered');
  }

  return form;
}

async function fillRequiredFields() {
  const user = userEvent.setup();

  await user.type(
    screen.getByPlaceholderText(contact.pt.form.labelOne),
    'Davi Roberto'
  );
  await user.type(
    screen.getByPlaceholderText(contact.pt.form.labelTwo),
    'Contato pelo site'
  );
  await user.type(
    screen.getByPlaceholderText(contact.pt.form.labelTree),
    'davi@example.com'
  );
  await user.type(
    screen.getByPlaceholderText(contact.pt.form.labelFour),
    '11999999999'
  );
  await user.type(
    screen.getByPlaceholderText(contact.pt.form.labelFive),
    'Mensagem enviada pelo teste.'
  );
}

describe('Contact', () => {
  it('renders the expected form fields', () => {
    setMockRouter({ asPath: '/', locale: 'pt' });

    render(<Contact />);

    expect(
      screen.getByPlaceholderText(contact.pt.form.labelOne)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(contact.pt.form.labelTwo)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(contact.pt.form.labelTree)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(contact.pt.form.labelFour)
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(contact.pt.form.labelFive)
    ).toBeInTheDocument();
  });

  it('submits contact data through EmailJS and shows success feedback', async () => {
    setMockRouter({ asPath: '/', locale: 'pt' });
    emailSendMock.mockResolvedValueOnce({ status: 200, text: 'OK' });
    const { container } = render(<Contact />);

    await fillRequiredFields();
    fireEvent.submit(getContactForm(container));

    await waitFor(() =>
      expect(emailSendMock).toHaveBeenCalledWith(
        expect.any(String),
        expect.any(String),
        {
          name: 'Davi Roberto',
          subject: 'Contato pelo site',
          email: 'davi@example.com',
          phone: '11999999999',
          message: 'Mensagem enviada pelo teste.',
        },
        expect.any(String)
      )
    );

    expect(toast.success).toHaveBeenCalledWith(contact.pt.form.sendSuccess);
    expect(screen.getByPlaceholderText(contact.pt.form.labelOne)).toHaveValue(
      ''
    );
    expect(screen.getByPlaceholderText(contact.pt.form.labelFive)).toHaveValue(
      ''
    );
  });

  it('shows an error feedback when EmailJS rejects', async () => {
    setMockRouter({ asPath: '/', locale: 'pt' });
    emailSendMock.mockRejectedValueOnce(new Error('network'));
    const { container } = render(<Contact />);

    await fillRequiredFields();
    fireEvent.submit(getContactForm(container));

    await waitFor(() =>
      expect(toast.error).toHaveBeenCalledWith(contact.pt.form.sendError)
    );
  });

  it('validates invalid emails before calling EmailJS', async () => {
    setMockRouter({ asPath: '/', locale: 'pt' });
    const user = userEvent.setup();
    const { container } = render(<Contact />);

    await user.type(
      screen.getByPlaceholderText(contact.pt.form.labelOne),
      'Davi'
    );
    await user.type(
      screen.getByPlaceholderText(contact.pt.form.labelTwo),
      'Contato'
    );
    await user.type(
      screen.getByPlaceholderText(contact.pt.form.labelTree),
      'invalid@mail'
    );
    await user.type(
      screen.getByPlaceholderText(contact.pt.form.labelFive),
      'Mensagem válida.'
    );

    fireEvent.submit(getContactForm(container));

    expect(emailSendMock).not.toHaveBeenCalled();
    expect(toast.error).toHaveBeenCalledWith(contact.pt.form.invalidEmail);
  });
});
