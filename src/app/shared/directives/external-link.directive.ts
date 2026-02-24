import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'a[appExternalLink]',
  standalone: true,
})
export class ExternalLinkDirective {
  @Input() appExternalLink = false;

  @HostBinding('attr.target')
  get target(): string | null {
    return this.appExternalLink ? '_blank' : null;
  }

  @HostBinding('attr.rel')
  get rel(): string | null {
    return this.appExternalLink ? 'noopener noreferrer' : null;
  }
}
