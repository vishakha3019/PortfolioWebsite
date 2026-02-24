import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, HostListener, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ThemeService } from '../../core/services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly content = inject(PortfolioContentService);
  private readonly themeService = inject(ThemeService);
  private readonly document = inject(DOCUMENT);
  private readonly isBrowser = typeof window !== 'undefined';

  readonly navigationItems = this.content.navigationItems;
  readonly hero = this.content.hero;
  readonly theme = this.themeService.theme;
  readonly activeSection = signal<string>(this.navigationItems[0]?.id ?? '');

  readonly toggleLabel = computed(() =>
    this.theme() === 'dark' ? 'Switch to light mode' : 'Switch to dark mode',
  );

  readonly sunIconPath =
    'M12 18.5A6.5 6.5 0 1 0 12 5.5a6.5 6.5 0 0 0 0 13zm0 3.5a1 1 0 0 1-1-1v-1.05a8.5 8.5 0 0 1-7.45-7.45H2.5a1 1 0 1 1 0-2h1.05a8.5 8.5 0 0 1 7.45-7.45V2.5a1 1 0 1 1 2 0v1.05a8.5 8.5 0 0 1 7.45 7.45h1.05a1 1 0 1 1 0 2h-1.05a8.5 8.5 0 0 1-7.45 7.45V21a1 1 0 0 1-1 1z';

  readonly moonIconPath =
    'M12 4a1 1 0 0 1 .93.63 6 6 0 0 0 6.44 3.67 1 1 0 0 1 1.01 1.46A9 9 0 1 1 11.24 3.62 1 1 0 0 1 12 4z';

  constructor() {
    if (this.isBrowser) {
      setTimeout(() => this.updateActiveSection(), 0);
    }
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  @HostListener('window:scroll')
  @HostListener('window:resize')
  onViewportChange(): void {
    this.updateActiveSection();
  }

  private updateActiveSection(): void {
    if (!this.isBrowser) {
      return;
    }

    const marker = window.scrollY + 180;
    let current = this.navigationItems[0]?.id ?? '';

    for (const item of this.navigationItems) {
      const section = this.document.getElementById(item.id);
      if (section && section.offsetTop <= marker) {
        current = item.id;
      }
    }

    this.activeSection.set(current);
  }
}
