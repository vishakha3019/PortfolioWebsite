import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

@Component({
  selector: 'app-cta-button',
  standalone: true,
  templateUrl: './cta-button.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CtaButtonComponent {
  readonly href = input.required<string>();
  readonly variant = input<'primary' | 'secondary'>('primary');
  readonly external = input(false);

  readonly classes = computed(() => {
    const base =
      'btn-premium inline-flex items-center justify-center px-6 py-3 text-sm font-semibold active:translate-y-0 active:scale-[0.99] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent';

    if (this.variant() === 'secondary') {
      return `${base} btn-secondary`;
    }

    return `${base} btn-primary`;
  });
}
