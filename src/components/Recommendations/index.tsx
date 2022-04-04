import React from 'react';

import Carousel from 'react-multi-carousel';

import { Container } from './styles';
import { mountTestimonialsHelper } from './recommendations.helper';
import { Testimonial } from './TestimonialType';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 2,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export function Recommendations() {
  return (
    <Container id="recommendations">
      <div className="container">
        <p className="paragraph">Recomendações</p>
        <h3 className="mb-sm-5 mb-4">
          Algumas recomendações recebidas no meu
          <a
            href="https://www.linkedin.com/in/davifsroberto"
            target="_blank"
            rel="noreferrer"
          >
            &nbsp;LinkedIn
          </a>
        </h3>

        <div className="container mt-5">
          <div className="row">
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={false}
              autoPlaySpeed={99999}
            >
              {mountTestimonialsHelper().map((testimonial: Testimonial) => (
                <div key={testimonial.id} className="px-1">
                  <div className={testimonial.class + ' rounded'}>
                    <p>
                      <span>“</span>
                      {testimonial.testimonial}
                      <br />
                    </p>

                    <div className="d-flex flex-row align-items-center">
                      <div className="ml-2 about">
                        <span className="d-block">
                          <strong>{testimonial.name} &nbsp;</strong>

                          <span>
                            <a
                              className="fa fa-linkedin"
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noreferrer"
                            ></a>
                          </span>
                        </span>

                        <span className="place d-block">
                          <strong>Relação: </strong>
                          {testimonial.relation}
                        </span>

                        <span className="place">
                          <strong>Empresa que trabalhamos: </strong>
                          {testimonial.company}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </Container>
  );
}
