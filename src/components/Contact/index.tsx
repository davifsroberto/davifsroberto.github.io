import Image from 'next/image';
import React, { FormEvent, useState } from 'react';

import { toast } from 'react-toastify';
import { send } from 'emailjs-com';

import { Container } from './styles';

export function Contact() {
  const [name, setName] = useState('');
  const [subject, setSubject] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const form = {
    name,
    subject,
    email,
    phone,
    message,
  };

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    send(
      `${process.env.YOUR_SERVICE_ID}`,
      `${process.env.YOUR_TEMPLATE_ID}`,
      form,
      process.env.YOUR_USER_ID
    )
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
            <section className="col-md-6 text-center">
              <article className="profile">
                <section className="head">
                  <Image
                    className="img"
                    width={150}
                    height={150}
                    src="/assets/images/general/perfil_davifsroberto.jpg"
                  ></Image>
                  <h4>Davi Roberto</h4>
                  <h5>Frontend Engineer</h5>
                </section>

                <section className="body">
                  <p>
                    <a href="tel:+55 11 95356 6668">
                      <i className="fa fa-phone"></i>
                      &nbsp;+55 11 95356 6668
                    </a>

                    <a
                      href="mailto:davifsroberto@outlook.com"
                      className="d-block my-2"
                    >
                      <i className="fa fa-envelope"></i>
                      &nbsp;davifsroberto@outlook.com
                    </a>

                    <a
                      href="https://www.google.com/maps/place/Hortol%C3%A2ndia,+State+of+S%C3%A3o+Paulo/@-22.8769465,-47.2440486,13z/data=!3m1!4b1!4m5!3m4!1s0x94c8b95bfb508f39:0x1ce857c1058169b4!8m2!3d-22.8573469!4d-47.2210564"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="fa fa-map-marker"></i>
                      &nbsp;Hortolândia, SP - Brasil
                    </a>
                  </p>
                </section>
              </article>
            </section>

            <div className="col-md-6">
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
            </div>

            <input type="submit" className="button" value="ENVIAR" />
          </article>
        </form>
      </div>
    </Container>
  );
}
