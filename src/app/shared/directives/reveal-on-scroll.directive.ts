import { AfterViewInit, Directive, ElementRef, input, NgZone, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appRevealOnScroll]',
  standalone: true,
})
export class RevealOnScrollDirective implements AfterViewInit, OnDestroy {
  private observer?: IntersectionObserver;
  readonly revealDelay = input(0, { alias: 'appRevealOnScrollDelay' });

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly zone: NgZone,
  ) {}

  ngAfterViewInit(): void {
    const element = this.elementRef.nativeElement;
    element.classList.add('reveal-item');
    element.style.setProperty('--reveal-delay', `${this.revealDelay()}ms`);

    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      element.classList.add('reveal-item-visible');
      return;
    }

    this.zone.runOutsideAngular(() => {
      this.observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.isIntersecting) {
              entry.target.classList.add('reveal-item-visible');
              this.observer?.unobserve(entry.target);
            }
          }
        },
        {
          threshold: 0.12,
          rootMargin: '0px 0px -8% 0px',
        },
      );

      this.observer.observe(element);
    });
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
