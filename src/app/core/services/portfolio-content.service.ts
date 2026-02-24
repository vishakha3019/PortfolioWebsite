import { Injectable } from '@angular/core';
import {
  aboutContent,
  architecturePrinciples,
  caseStudies,
  contactChannels,
  credibilityMetrics,
  hero,
  meanCapabilities,
  navigationItems,
  skillCategories,
  trustSignals,
} from '../../shared/models/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  readonly navigationItems = navigationItems;
  readonly hero = hero;
  readonly credibilityMetrics = credibilityMetrics;
  readonly trustSignals = trustSignals;
  readonly skillCategories = skillCategories;
  readonly meanCapabilities = meanCapabilities;
  readonly caseStudies = caseStudies;
  readonly architecturePrinciples = architecturePrinciples;
  readonly aboutContent = aboutContent;
  readonly contactChannels = contactChannels;
}
