import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appInteractiveTilt]',
  standalone: true,
})
export class InteractiveTiltDirective {
  readonly maxTilt = input(5, { alias: 'appInteractiveTilt' });
  private readonly isBrowser = typeof window !== 'undefined';

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.isMotionAllowed()) {
      return;
    }

    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    const intensity = this.maxTilt();
    const rotateY = (px - 0.5) * intensity * 1.6;
    const rotateX = (0.5 - py) * intensity;

    element.style.setProperty('--tilt-rotate-x', `${rotateX.toFixed(2)}deg`);
    element.style.setProperty('--tilt-rotate-y', `${rotateY.toFixed(2)}deg`);
    element.style.setProperty('--tilt-pointer-x', `${(px * 100).toFixed(2)}%`);
    element.style.setProperty('--tilt-pointer-y', `${(py * 100).toFixed(2)}%`);
    element.classList.add('is-tilting');
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    const element = this.elementRef.nativeElement;
    element.style.removeProperty('--tilt-rotate-x');
    element.style.removeProperty('--tilt-rotate-y');
    element.classList.remove('is-tilting');
  }

  private isMotionAllowed(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer:fine)').matches;
    return !reduce && finePointer;
  }
}
