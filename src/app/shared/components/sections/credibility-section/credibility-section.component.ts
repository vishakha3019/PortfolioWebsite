import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

@Component({
  selector: 'app-credibility-section',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './credibility-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CredibilitySectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly metrics = this.content.credibilityMetrics;
  readonly trustSignals = this.content.trustSignals;
}
