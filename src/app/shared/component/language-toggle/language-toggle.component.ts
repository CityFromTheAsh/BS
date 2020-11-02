import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Language } from '../../const/language';

@Component({
  selector: 'app-language-toggle',
  templateUrl: './language-toggle.component.html',
  styleUrls: ['./language-toggle.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LanguageToggleComponent implements OnInit {

  @Input()
  value: Language;

  @Output()
  valueChange = new EventEmitter<Language>();

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'ua',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/ukraine.svg'));
    iconRegistry.addSvgIcon(
      'ru',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/russia.svg'));
    iconRegistry.addSvgIcon(
      'us',
      sanitizer.bypassSecurityTrustResourceUrl('assets/icons/united-states-of-america.svg'));
  }

  ngOnInit(): void {
  }

  updateValue(value: Language): void {
    this.valueChange.emit(value);
  }
}
