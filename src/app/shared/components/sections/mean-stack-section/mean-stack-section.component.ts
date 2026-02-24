import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

@Component({
  selector: 'app-mean-stack-section',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './mean-stack-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MeanStackSectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly capabilities = this.content.meanCapabilities;
}
