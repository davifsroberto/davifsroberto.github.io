import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import { send } from 'emailjs-com';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { Container } from './styles';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import contact from '../../locales/home/contact/index.json';
import Spinner from '../Spinner';
import Profile from './Profile';

export function Contact() {
  const selectedLanguage = language();
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const form = {
    name,
    subject,
    email,
    phone,
    message,
  };

  function isValidEmail(value: string): boolean {
    if (!value) {
      return true;
    }

    return /^[^\s@]+@[a-zA-Z0-9][a-zA-Z0-9-]{1,62}(\.[a-zA-Z]{2,})+$/.test(
      value
    );
  }

  function clearFormFields(): void {
    setName('');
    setSubject('');
    setEmail('');
    setPhone('');
    setMessage('');
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const normalizedEmail = email.trim();

    if (!isValidEmail(normalizedEmail)) {
      toast.error(contact[selectedLanguage].form.invalidEmail);
      return;
    }

    setLoading(true);

    send(
      'davifsroberto_mailersend',
      'template_pygyvlc',
      {
        ...form,
        email: normalizedEmail,
      },
      'Uk5RjMiwi1zjJYErr'
    )
      .then(() => {
        setLoading(false);

        toast.success('Message sent successfully');

        clearFormFields();
      })
      .catch((error) => {
        setLoading(false);

        console.error('EmailJS send error:', error);
        toast.error(contact[selectedLanguage].form.sendError);
      });
  }

  return (
    <Container id="contact">
      <Spinner loading={loading} text={contact[selectedLanguage].messageSend} />

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <div className="container">
          <p className="paragraph">{contact[selectedLanguage].title}</p>

          <h3 className="mb-sm-5 mb-4">
            {contact[selectedLanguage].subtitle}😉
          </h3>

          <article className="row">
            <section className="col-md-6 text-center">
              <Profile />
            </section>

            <div className="col-md-6">
              <form onSubmit={handleSubmit} id="contact-form">
                <section className="col-12">
                  <div className="inputBox ">
                    <input
                      onChange={(e) => setName(e.target.value)}
                      name="name"
                      placeholder={contact[selectedLanguage].form.labelOne}
                      className="input"
                      type="text"
                      value={name}
                      minLength={2}
                      maxLength={50}
                      required
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="inputBox">
                    <input
                      onChange={(e) => setSubject(e.target.value)}
                      name="subject"
                      placeholder={contact[selectedLanguage].form.labelTwo}
                      className="input"
                      type="text"
                      value={subject}
                      minLength={2}
                      maxLength={50}
                      required
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="inputBox">
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      name="email"
                      placeholder={contact[selectedLanguage].form.labelTree}
                      className="input"
                      type="email"
                      value={email}
                      minLength={5}
                      maxLength={50}
                      pattern="[^\s@]+@[a-zA-Z0-9][a-zA-Z0-9-]{1,62}(\.[a-zA-Z]{2,})+"
                      title={contact[selectedLanguage].form.invalidEmail}
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="inputBox">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      placeholder={contact[selectedLanguage].form.labelFour}
                      className="input"
                      type="number"
                      value={phone}
                      min={0}
                      step="1"
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="inputBox">
                    <textarea
                      onChange={(e) => setMessage(e.target.value)}
                      name="message"
                      placeholder={contact[selectedLanguage].form.labelFive}
                      className="form-control"
                      value={message}
                      minLength={5}
                      maxLength={500}
                      required
                    ></textarea>
                  </div>
                </section>

                <button
                  type="submit"
                  className="btn btn-default btn-default-big"
                >
                  {contact[selectedLanguage].form.btnForm} &nbsp;
                  <i className="fa fa-paper-plane" />
                </button>
              </form>
            </div>
          </article>
        </div>
      </AnimationOnScroll>
    </Container>
  );
}
