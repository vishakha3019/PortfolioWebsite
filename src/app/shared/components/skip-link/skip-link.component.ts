import { Component } from '@angular/core';

@Component({
  selector: 'app-skip-link',
  standalone: true,
  template: `
    <a
      href="#main"
      class="absolute left-2 top-2 z-40 -translate-y-16 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white focus:translate-y-0"
    >
      Skip to content
    </a>
  `,
})
export class SkipLinkComponent {}
