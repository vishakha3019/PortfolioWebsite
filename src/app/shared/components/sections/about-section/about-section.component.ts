import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../../../core/services/portfolio-content.service';
import { RevealOnScrollDirective } from '../../../directives/reveal-on-scroll.directive';
import { SectionHeadingComponent } from '../../section-heading/section-heading.component';

@Component({
  selector: 'app-about-section',
  standalone: true,
  imports: [SectionHeadingComponent, RevealOnScrollDirective],
  templateUrl: './about-section.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AboutSectionComponent {
  private readonly content = inject(PortfolioContentService);

  readonly aboutContent = this.content.aboutContent;
}
