import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class LanguageService {
  private currentLocaleSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('pt');

  currentLocale$: Observable<string> = this.currentLocaleSubject.asObservable();

  setLocale(locale: string): void {
    this.currentLocaleSubject.next(locale);
  }

  getLocale(): Observable<string> {
    return this.currentLocale$;
  }
}
