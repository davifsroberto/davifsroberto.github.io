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

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    send(
      'davifsroberto_mailersend',
      'template_pygyvlc',
      form,
      'Uk5RjMiwi1zjJYErr'
    )
      .then(() => {
        setLoading(false);

        toast.success('Message sent successfully');

        (document.getElementById('contact-form') as HTMLFormElement).reset();
      })
      .catch(() => {
        setLoading(false);

        toast.error('Error sending message! Try again later');
      });
  }

  return (
    <Container id="contact">
      <Spinner loading={loading} text={contact[language()].messageSend} />

      <AnimationOnScroll
        duration={1}
        animateOnce={true}
        animateIn="animate__fadeIn"
      >
        <div className="container">
          <p className="paragraph">{contact[language()].title}</p>

          <h3 className="mb-sm-5 mb-4">{contact[language()].subtitle}😉</h3>

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
                      placeholder={contact[language()].form.labelOne}
                      className="input"
                      type="text"
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
                      placeholder={contact[language()].form.labelTwo}
                      className="input"
                      type="text"
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
                      placeholder={contact[language()].form.labelTree}
                      className="input"
                      type="email"
                      minLength={5}
                      maxLength={50}
                    />
                  </div>
                </section>

                <section className="col-12">
                  <div className="inputBox">
                    <input
                      onChange={(e) => setPhone(e.target.value)}
                      name="phone"
                      placeholder={contact[language()].form.labelFour}
                      className="input"
                      type="number"
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
                      placeholder={contact[language()].form.labelFive}
                      className="form-control"
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
                  {contact[language()].form.btnForm} &nbsp;
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
