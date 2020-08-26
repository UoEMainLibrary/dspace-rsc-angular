import { Component } from '@angular/core';
import { StatisticsPageComponent } from '../statistics-page/statistics-page.component';
import { UsageReportService } from '../../core/submission/usage-report-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Community } from '../../core/shared/community.model';
import { DSONameService } from '../../core/breadcrumbs/dso-name.service';

/**
 * Component representing the statistics page for a community.
 */
@Component({
  selector: 'ds-community-statistics-page',
  templateUrl: '../statistics-page/statistics-page.component.html',
  styleUrls: ['./community-statistics-page.component.scss']
})
export class CommunityStatisticsPageComponent extends StatisticsPageComponent<Community> {

  /**
   * The report types to show on this statistics page.
   */
  types: string[] = [
    'TotalVisits',
    'TotalVisitsPerMonth',
    'TopCountries',
    'TopCities',
  ];

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected usageReportService: UsageReportService,
    protected nameService: DSONameService,
  ) {
    super(
      route,
      router,
      usageReportService,
      nameService,
    );
  }
}
