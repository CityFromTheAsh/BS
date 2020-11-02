import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Language } from './shared/const/language';
import { isPermissibleLanguage } from './shared/type-guard/is-permissible-language';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bs';
  language: Language = defaultLanguage();

  constructor(private readonly translate: TranslateService) {}

  changeCurrentLanguage(language: unknown): void {
    if (isPermissibleLanguage(language)) {
      localStorage.setItem('language', language);
      this.translate.use(language);
    }
  }
}

function defaultLanguage(): Language {
  const language = localStorage.getItem('language');
  return isPermissibleLanguage(language) ? language : 'en';
}
