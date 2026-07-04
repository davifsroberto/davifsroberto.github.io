import type { NextPage } from 'next';

import Home from '../components/PageHome';
import { Seo } from '../components/ui/Seo';
import { seo } from '../data/seo';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../utils/language.utils';

const HomePage: NextPage = () => {
  const selectedLanguage = language();
  const pageSeo = seo.home[selectedLanguage];

  return (
    <>
      <Seo
        title={pageSeo.title}
        description={pageSeo.description}
        path={getLocalizedPath('/', selectedLanguage)}
      />

      <Home />
    </>
  );
};

export default HomePage;
