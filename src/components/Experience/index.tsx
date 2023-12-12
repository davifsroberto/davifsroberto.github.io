import Image from 'next/image';

import { ExperienceType } from '../../types/experience.type';
import { originRouterUtils } from '../../utils/route.utils';
import { Container } from './styles';

type ExperienceProps = {
  experience: ExperienceType;
};

export function Experience({ experience }: ExperienceProps) {
  return (
    <Container className="row">
      <section className={'col-md-12' + experience.classPosition}>
        <figure>
          <Image
            width={experience.company.image.width}
            height={experience.company.image.height}
            src={originRouterUtils() + experience.company.image.src}
            alt={experience.company.image.alt}
          ></Image>
        </figure>

        <i className="h6 d-block">
          {experience.company.name} -
          <a href={experience.company.link} target="_blank" rel="noreferrer">
            &nbsp;
            <i className="fa fa-linkedin" />
          </a>
        </i>

        <h5>{experience.title}</h5>
        <h6>
          <strong>
            {experience.tag && experience.tag.map((tag) => tag + ' ')}
          </strong>
          <br />
          <br />

          <span>{experience.period}&nbsp;</span>
        </h6>
        <br />

        <p>{experience.description}</p>

        {!experience.last && <hr className="my-5" />}
      </section>
    </Container>
  );
}
