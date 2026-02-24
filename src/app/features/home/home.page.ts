import { ChangeDetectionStrategy, Component, ElementRef, OnDestroy, AfterViewInit, inject } from '@angular/core';
import { AnimationService } from '../../shared/animations/animation.service';
import { AboutSectionComponent } from '../../shared/components/sections/about-section/about-section.component';
import { ArchitectureSectionComponent } from '../../shared/components/sections/architecture-section/architecture-section.component';
import { ContactSectionComponent } from '../../shared/components/sections/contact-section/contact-section.component';
import { CredibilitySectionComponent } from '../../shared/components/sections/credibility-section/credibility-section.component';
import { HeroSectionComponent } from '../../shared/components/sections/hero-section/hero-section.component';
import { MeanStackSectionComponent } from '../../shared/components/sections/mean-stack-section/mean-stack-section.component';
import { ProjectsSectionComponent } from '../../shared/components/sections/projects-section/projects-section.component';
import { SkillsSectionComponent } from '../../shared/components/sections/skills-section/skills-section.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    HeroSectionComponent,
    CredibilitySectionComponent,
    SkillsSectionComponent,
    MeanStackSectionComponent,
    ProjectsSectionComponent,
    ArchitectureSectionComponent,
    AboutSectionComponent,
    ContactSectionComponent,
  ],
  templateUrl: './home.page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent implements AfterViewInit, OnDestroy {
  private readonly host = inject(ElementRef<HTMLElement>);
  private readonly animationService = inject(AnimationService);
  private cleanup: (() => void) | null = null;

  ngAfterViewInit(): void {
    this.cleanup = this.animationService.initLandingAnimations(this.host.nativeElement);
  }

  ngOnDestroy(): void {
    this.cleanup?.();
  }
}
