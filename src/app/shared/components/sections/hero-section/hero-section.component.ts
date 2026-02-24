import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { InteractiveTiltDirective } from '../../../directives/interactive-tilt.directive';
import { CtaButtonComponent } from '../../cta-button/cta-button.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CtaButtonComponent, NgOptimizedImage, InteractiveTiltDirective],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly hero = this.content.hero;
}
