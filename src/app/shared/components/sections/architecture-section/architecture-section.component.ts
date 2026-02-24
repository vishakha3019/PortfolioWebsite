import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

@Component({
  selector: 'app-architecture-section',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './architecture-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArchitectureSectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly principles = this.content.architecturePrinciples;
}
