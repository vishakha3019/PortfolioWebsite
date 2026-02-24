import { Component } from '@angular/core';
import { ProjectsSectionComponent } from '../../shared/components/sections/projects-section/projects-section.component';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [ProjectsSectionComponent],
  template: ` <app-projects-section></app-projects-section> `,
})
export class ProjectsPageComponent {}
