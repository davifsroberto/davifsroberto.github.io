import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEn from '@angular/common/locales/en';

import { first } from 'rxjs/operators';

import { LanguageService } from './services/language.service';
import { CoreModuleCounterService } from './services/core-module-counter.service';

const localeMap: { [key: string]: unknown } = {
  pt: localePt,
  en: localeEn,
};

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [
    LanguageService,
    {
      provide: LOCALE_ID,
      useFactory: (languageService: LanguageService): string => {
        let locale = 'pt';

        languageService
          .getLocale()
          .pipe(first())
          .subscribe((value) => {
            locale = value || 'pt';

            if (locale && localeMap[locale]) {
              registerLocaleData(localeMap[locale], locale);
            }
          });

        return locale;
      },
      deps: [LanguageService],
    },
  ],
})
export class CoreModule {
  constructor(private counterService: CoreModuleCounterService) {
    this.counterService.incrementImportCount();

    if (counterService.getImportCount())
      throw new Error('CoreModule já foi importado.');
  }
}
