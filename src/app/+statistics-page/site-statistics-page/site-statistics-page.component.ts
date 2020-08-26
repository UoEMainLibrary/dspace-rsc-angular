import { Component } from '@angular/core';
import { StatisticsPageComponent } from '../statistics-page/statistics-page.component';
import { SiteDataService } from '../../core/data/site-data.service';
import { UsageReportService } from '../../core/submission/usage-report-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Site } from '../../core/shared/site.model';
import { DSONameService } from '../../core/breadcrumbs/dso-name.service';
import { switchMap } from 'rxjs/operators';

/**
 * Component representing the site-wide statistics page.
 */
@Component({
  selector: 'ds-site-statistics-page',
  templateUrl: '../statistics-page/statistics-page.component.html',
  styleUrls: ['./site-statistics-page.component.scss']
})
export class SiteStatisticsPageComponent extends StatisticsPageComponent<Site> {

  /**
   * The report types to show on this statistics page.
   */
  types: string[] = [
    'TotalVisits',
  ];

  constructor(
    protected route: ActivatedRoute,
    protected router: Router,
    protected usageReportService: UsageReportService,
    protected nameService: DSONameService,
    protected siteService: SiteDataService,
  ) {
    super(
      route,
      router,
      usageReportService,
      nameService,
    );
  }

  protected getScope$() {
    return this.siteService.find();
  }

  protected getReports$() {
    return this.scope$.pipe(
      switchMap((scope) =>
        this.usageReportService.searchStatistics(scope._links.self.href, 0, 10),
      ),
    );
  }
}
