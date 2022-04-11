import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import { send } from 'emailjs-com';

import { Container } from './styles';
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

        toast.success('Mensagem enviada com sucesso!');

        (document.getElementById('contact-form') as HTMLFormElement).reset();
      })
      .catch(() => {
        setLoading(false);

        toast.error('Erro ao enviar mensagem! Tente novamente mais tarde.');
      });
  }

  return (
    <Container id="contact">
      <Spinner loading={loading} text={'Enviando...'} />

      <div className="container">
        <p className="paragraph">Contato</p>
        <h3 className="mb-sm-5 mb-4">Fique a vontade para entrar em contato</h3>

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
                    placeholder="Nome"
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
                    placeholder="Assunto"
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
                    placeholder="E-mail - Opcional"
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
                    placeholder="Telefone - Opcional"
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
                    placeholder="Mensagem"
                    className="form-control"
                    minLength={5}
                    maxLength={500}
                    required
                  ></textarea>
                </div>
              </section>

              <input type="submit" className="button" value="ENVIAR" />
            </form>
          </div>
        </article>
      </div>
    </Container>
  );
}