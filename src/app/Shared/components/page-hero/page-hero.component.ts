import { NgClass } from '@angular/common';
import { AfterContentInit, Component, input } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
    selector: 'app-page-hero',
    imports: [NgClass],
    templateUrl: './page-hero.component.html',
    styleUrl: './page-hero.component.scss'
})
export class PageHeroComponent implements AfterContentInit {
  title = input.required<string>();
  description = input.required<string>();
  className = input.required<string>();
  descriptionHtml!: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  ngAfterContentInit(): void {
    this.descriptionHtml = this.sanitizer.bypassSecurityTrustHtml(
      this.description()
    );
  }
}
