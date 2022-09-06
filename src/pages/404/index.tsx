import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';
import { SetLanguageUtils as language } from '../../utils/language.utils';
import page404 from '../../locales/404/index.json';
import { originRouterUtils } from '../../utils/route.utils';

const Custom404Page: NextPage = () => {
  return (
    <Container>
      <h2>
        {page404[language()].title} <strong>!</strong>
      </h2>

      <figure className="text-center">
        <Image
          width={800}
          height={600}
          src={`${originRouterUtils()}/assets/images/general/404-pacman.gif`}
          alt="404"
        ></Image>
      </figure>

      <section className="text-center mt-4">
        <Link href="/" passHref>
          <button className="btn btn-default-reverse btn-default-big">
            {page404[language()].button} &nbsp;
            <i className="fa fa-arrow-right" />
          </button>
        </Link>
      </section>
    </Container>
  );
};

export default Custom404Page;
