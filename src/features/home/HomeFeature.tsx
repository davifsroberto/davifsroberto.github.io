import { Seo } from '../../components/ui/Seo';
import { seo } from '../../data/seo';
import {
  getLocalizedPath,
  SetLanguageUtils as language,
} from '../../utils/language.utils';
import Home from './components/Home';

export function HomeFeature() {
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
}
