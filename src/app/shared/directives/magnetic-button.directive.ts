import { Directive, ElementRef, HostListener, input } from '@angular/core';

@Directive({
  selector: '[appMagneticButton]',
  standalone: true,
})
export class MagneticButtonDirective {
  readonly strength = input(10, { alias: 'appMagneticButton' });
  private readonly isBrowser = typeof window !== 'undefined';

  constructor(private readonly elementRef: ElementRef<HTMLElement>) {}

  @HostListener('pointermove', ['$event'])
  onPointerMove(event: PointerEvent): void {
    if (!this.shouldAnimate()) {
      return;
    }

    const element = this.elementRef.nativeElement;
    const rect = element.getBoundingClientRect();
    const relativeX = event.clientX - rect.left - rect.width / 2;
    const relativeY = event.clientY - rect.top - rect.height / 2;
    const offsetX = (relativeX / rect.width) * this.strength();
    const offsetY = (relativeY / rect.height) * this.strength();
    const gsap = this.getGsap();

    if (gsap) {
      gsap.to(element, {
        x: offsetX,
        y: offsetY,
        duration: 0.28,
        ease: 'power3.out',
      });
      return;
    }

    element.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
  }

  @HostListener('pointerleave')
  onPointerLeave(): void {
    if (!this.isBrowser) {
      return;
    }

    const element = this.elementRef.nativeElement;
    const gsap = this.getGsap();
    if (gsap) {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.34,
        ease: 'power3.out',
      });
      return;
    }

    element.style.transform = '';
  }

  private shouldAnimate(): boolean {
    if (!this.isBrowser) {
      return false;
    }

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const finePointer = window.matchMedia('(pointer:fine)').matches;
    return !reduced && finePointer;
  }

  private getGsap(): { to: (target: unknown, vars: Record<string, unknown>) => unknown } | null {
    return (window as Window & { gsap?: { to: (target: unknown, vars: Record<string, unknown>) => unknown } }).gsap ?? null;
  }
}
