import Image from 'next/image';
import Link from 'next/link';

import { Container } from './styles';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../../utils/language.utils';
import { Seo } from '../../components/ui/Seo';
import { seo } from '../../data/seo';
import page404 from '../../locales/404/index.json';

export function NotFoundFeature() {
  const selectedLanguage = language();
  const pageSeo = seo['404'][selectedLanguage];

  return (
    <Container>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={getLocalizedPath('/404', selectedLanguage)}
      />

      <h2>
        {page404[selectedLanguage].title} <strong>!</strong>
      </h2>

      <figure className="text-center">
        <Image
          width={800}
          height={600}
          src="/assets/images/general/404-pacman.gif"
          alt="404"
        />
      </figure>

      <section className="text-center mt-4">
        <Link
          href={getLocalizedPath('/', selectedLanguage)}
          className="btn btn-default-reverse btn-default-big"
        >
          {page404[selectedLanguage].button} &nbsp;
          <i className="fa fa-arrow-right" />
        </Link>
      </section>
    </Container>
  );
}
