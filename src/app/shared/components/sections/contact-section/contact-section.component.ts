import { Component, DestroyRef, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { ContactPayload, ContactService } from '../../../../core/services/contact.service';
import { ExternalLinkDirective } from '../../../directives/external-link.directive';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

type FormModel = {
  name: string;
  email: string;
  message: string;
};

@Component({
  selector: 'app-contact-section',
  standalone: true,
  imports: [FormsModule, SectionHeadingComponent, ExternalLinkDirective, RevealOnScrollDirective],
  templateUrl: './contact-section.component.html',
})
export class ContactSectionComponent {
  private readonly content = inject(PortfolioContentService);
  private readonly contactService = inject(ContactService);
  private readonly destroyRef = inject(DestroyRef);

  readonly contactChannels = this.content.contactChannels;
  readonly status = signal<'idle' | 'success'>('idle');

  model: FormModel = {
    name: '',
    email: '',
    message: '',
  };

  submit(): void {
    const payload: ContactPayload = {
      name: this.model.name,
      email: this.model.email,
      message: this.model.message,
    };

    this.contactService
      .submit(payload)
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        const subject = encodeURIComponent('Portfolio contact');
        const body = encodeURIComponent(`${payload.name} | ${payload.email}: ${payload.message}`);
        window.location.href = `mailto:vishakha3019@gmail.com?subject=${subject}&body=${body}`;

        this.status.set('success');
        this.model = { name: '', email: '', message: '' };
      });
  }
}
