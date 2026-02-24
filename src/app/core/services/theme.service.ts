import { DOCUMENT } from '@angular/common';
import { effect, inject, Injectable, signal } from '@angular/core';

export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'vishakha-theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = typeof window !== 'undefined';

  readonly theme = signal<Theme>(this.resolveInitialTheme());

  constructor() {
    effect(() => {
      const current = this.theme();
      this.document.documentElement.classList.toggle('dark', current === 'dark');
      if (this.isBrowser) {
        localStorage.setItem(STORAGE_KEY, current);
      }
    });
  }

  toggleTheme(): void {
    this.theme.update((previous) => (previous === 'dark' ? 'light' : 'dark'));
  }

  private resolveInitialTheme(): Theme {
    if (!this.isBrowser) {
      return 'dark';
    }

    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === 'light' || stored === 'dark') {
      return stored;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
