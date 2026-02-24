import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { ExternalLinkDirective } from '../../shared/directives/external-link.directive';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [ExternalLinkDirective],
  templateUrl: './footer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  private readonly content = inject(PortfolioContentService);

  readonly contactChannels = this.content.contactChannels;
  readonly year = new Date().getFullYear();
}
