import { Component } from '@angular/core';
import { StatisticsPageComponent } from '../statistics-page/statistics-page.component';
import { UsageReportService } from '../../core/submission/usage-report-data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../../core/shared/item.model';
import { DSONameService } from '../../core/breadcrumbs/dso-name.service';

/**
 * Component representing the statistics page for an item.
 */
@Component({
  selector: 'ds-item-statistics-page',
  templateUrl: '../statistics-page/statistics-page.component.html',
  styleUrls: ['./item-statistics-page.component.scss']
})
export class ItemStatisticsPageComponent extends StatisticsPageComponent<Item> {

  /**
   * The report types to show on this statistics page.
   */
  types: string[] = [
    'TotalVisits',
    'TotalVisitsPerMonth',
    'TotalDownloads',
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
