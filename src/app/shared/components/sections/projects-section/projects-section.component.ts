import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { InteractiveTiltDirective } from '../../../directives/interactive-tilt.directive';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { JoinPipe } from '../../../pipes/join.pipe';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

@Component({
  selector: 'app-projects-section',
  standalone: true,
  imports: [SectionHeadingComponent, JoinPipe, RevealOnScrollDirective, InteractiveTiltDirective],
  templateUrl: './projects-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsSectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly caseStudies = this.content.caseStudies;
}
