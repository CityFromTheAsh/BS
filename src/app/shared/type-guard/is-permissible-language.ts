import { Language } from '../const/language';

export function isPermissibleLanguage(value: unknown): value is Language {
   return value === 'ua' || value === 'ru' || value === 'en';
}
