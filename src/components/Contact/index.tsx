import React, { FormEvent, useState } from 'react';

import axios from 'axios';
import { toast } from 'react-toastify';

import { Container } from './styles';

export function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    axios
      .post('/api/contact', { name, subject, email, phone, message })
      .then(() => {
        toast.success('Mensagem enviada com sucesso!');

        (document.getElementById('contact-form') as HTMLFormElement).reset();
      })
      .catch(() =>
        toast.error('Erro ao enviar mensagem! Tente novamente mais tarde.')
      );
  }

  return (
    <Container id="contact">
      <div className="container">
        <p className="paragraph">Contato</p>
        <h3 className="mb-sm-5 mb-4">Fique a vontade para entrar em contato</h3>

        <form onSubmit={handleSubmit} id="contact-form">
          <article className="row">
            <section className="col-sm-6">
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

            <section className="col-sm-6">
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

            <section className="col-sm-6">
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

            <section className="col-sm-6">
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

            <section className="col-sm-12">
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

            <section className="col-sm-12">
              <input type="submit" className="button" value="ENVIAR" />
            </section>
          </article>
        </form>
      </div>
    </Container>
  );
}
