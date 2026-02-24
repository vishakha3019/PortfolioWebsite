import { Component } from '@angular/core';
import { AboutSectionComponent } from '../../shared/components/sections/about-section/about-section.component';
import { ArchitectureSectionComponent } from '../../shared/components/sections/architecture-section/architecture-section.component';
import { MeanStackSectionComponent } from '../../shared/components/sections/mean-stack-section/mean-stack-section.component';
import { SkillsSectionComponent } from '../../shared/components/sections/skills-section/skills-section.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [AboutSectionComponent, SkillsSectionComponent, MeanStackSectionComponent, ArchitectureSectionComponent],
  template: `
    <app-about-section></app-about-section>
    <app-skills-section></app-skills-section>
    <app-mean-stack-section></app-mean-stack-section>
    <app-architecture-section></app-architecture-section>
  `,
})
export class AboutPageComponent {}
