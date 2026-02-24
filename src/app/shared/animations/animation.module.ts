import { NgModule } from '@angular/core';
import { InteractiveTiltDirective } from '../directives/interactive-tilt.directive';
import { MagneticButtonDirective } from '../directives/magnetic-button.directive';
import { RevealOnScrollDirective } from '../directives/reveal-on-scroll.directive';

@NgModule({
  imports: [RevealOnScrollDirective, InteractiveTiltDirective, MagneticButtonDirective],
  exports: [RevealOnScrollDirective, InteractiveTiltDirective, MagneticButtonDirective],
})
export class AnimationModule {}
