import { DOCUMENT } from '@angular/common';
import { Injectable, NgZone, inject } from '@angular/core';

type GsapLike = {
  registerPlugin: (...plugins: unknown[]) => void;
  context: (fn: () => void, scope?: Element | string) => { revert: () => void };
  from: (target: unknown, vars: Record<string, unknown>) => unknown;
  fromTo: (target: unknown, fromVars: Record<string, unknown>, toVars: Record<string, unknown>) => unknown;
  to: (target: unknown, vars: Record<string, unknown>) => unknown;
  utils: {
    toArray: (selector: string | NodeListOf<Element> | Element[]) => Element[];
  };
};

declare global {
  interface Window {
    gsap?: GsapLike;
    ScrollTrigger?: unknown;
  }
}

@Injectable({ providedIn: 'root' })
export class AnimationService {
  private readonly document = inject(DOCUMENT);
  private readonly zone = inject(NgZone);
  private pointerFrame = 0;
  private pointerInitialized = false;

  initPointerTracking(): void {
    if (this.pointerInitialized || typeof window === 'undefined' || this.prefersReducedMotion()) {
      return;
    }

    if (!window.matchMedia('(pointer:fine)').matches) {
      return;
    }

    this.pointerInitialized = true;
    this.document.documentElement.classList.add('has-pointer-motion');

    this.zone.runOutsideAngular(() => {
      window.addEventListener(
        'mousemove',
        (event) => {
          if (this.pointerFrame) {
            return;
          }

          this.pointerFrame = window.requestAnimationFrame(() => {
            this.document.documentElement.style.setProperty('--pointer-x', `${event.clientX}px`);
            this.document.documentElement.style.setProperty('--pointer-y', `${event.clientY}px`);
            this.pointerFrame = 0;
          });
        },
        { passive: true },
      );
    });
  }

  initLandingAnimations(scope: HTMLElement): () => void {
    if (typeof window === 'undefined' || this.prefersReducedMotion()) {
      return () => {};
    }

    const gsap = this.getGsap();
    if (!gsap) {
      return () => {};
    }

    if (window.ScrollTrigger) {
      gsap.registerPlugin(window.ScrollTrigger);
    }

    const context = gsap.context(() => {
      this.animateHero(gsap, scope);
      this.animateSections(gsap, scope);
      this.animateSkillsProgress(gsap, scope);
    }, scope);

    return () => context.revert();
  }

  fadeUp(gsap: GsapLike, target: unknown, delay = 0): void {
    gsap.from(target, {
      opacity: 0,
      y: 20,
      duration: 0.72,
      delay,
      ease: 'power3.out',
    });
  }

  staggerContainer(gsap: GsapLike, container: Element, selector = '.motion-element'): void {
    const items = container.querySelectorAll(selector);
    if (!items.length) {
      return;
    }

    gsap.from(items, {
      opacity: 0,
      y: 20,
      duration: 0.68,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: container,
        start: 'top 78%',
        once: true,
      },
    });
  }

  floatAnimation(gsap: GsapLike, target: Element): void {
    gsap.to(target, {
      y: -7,
      duration: 3.2,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  }

  private animateHero(gsap: GsapLike, scope: HTMLElement): void {
    const hero = scope.querySelector('#hero');
    if (!hero) {
      return;
    }

    const staggerItems = hero.querySelectorAll('.hero-stagger');
    if (staggerItems.length) {
      gsap.from(staggerItems, {
        opacity: 0,
        y: 20,
        duration: 0.78,
        stagger: 0.1,
        ease: 'power3.out',
      });
    }

    const profile = hero.querySelector('.profile-ring');
    if (profile) {
      this.floatAnimation(gsap, profile);
    }

    const ctas = hero.querySelectorAll('.cta-glow');
    if (ctas.length) {
      gsap.fromTo(
        ctas,
        { boxShadow: '0 0 0 rgba(14,165,166,0)' },
        {
          boxShadow: '0 0 0.9rem rgba(14,165,166,0.24)',
          duration: 0.8,
          repeat: 1,
          yoyo: true,
          stagger: 0.14,
          delay: 0.35,
          ease: 'power3.out',
        },
      );
    }
  }

  private animateSections(gsap: GsapLike, scope: HTMLElement): void {
    const sections = gsap.utils.toArray(scope.querySelectorAll('.motion-section'));
    sections.forEach((section) => {
      gsap.from(section, {
        opacity: 0,
        y: 20,
        duration: 0.72,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: section,
          start: 'top 82%',
          once: true,
        },
      });

      this.staggerContainer(gsap, section);

      const parallaxLayer = section.querySelector('.parallax-layer');
      if (parallaxLayer) {
        gsap.to(parallaxLayer, {
          y: 8,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            scrub: true,
            start: 'top bottom',
            end: 'bottom top',
          },
        });
      }
    });
  }

  private animateSkillsProgress(gsap: GsapLike, scope: HTMLElement): void {
    const bars = scope.querySelectorAll<HTMLElement>('.skill-progress-fill');
    bars.forEach((bar) => {
      const value = Number(bar.dataset['progress'] ?? 0);
      gsap.fromTo(
        bar,
        { width: '0%' },
        {
          width: `${Math.min(Math.max(value, 0), 100)}%`,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: bar,
            start: 'top 88%',
            once: true,
          },
        },
      );
    });
  }

  private getGsap(): GsapLike | null {
    return window.gsap ?? null;
  }

  private prefersReducedMotion(): boolean {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }
}
