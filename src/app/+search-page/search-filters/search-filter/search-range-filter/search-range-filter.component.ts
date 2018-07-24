import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { RemoteDataBuildService } from '../../../../core/cache/builders/remote-data-build.service';
import { FilterType } from '../../../search-service/filter-type.model';
import { renderFacetFor } from '../search-filter-type-decorator';
import {
  facetLoad,
  SearchFacetFilterComponent
} from '../search-facet-filter/search-facet-filter.component';
import { SearchFilterConfig } from '../../../search-service/search-filter-config.model';
import { FILTER_CONFIG, SearchFilterService } from '../search-filter.service';
import { SearchService } from '../../../search-service/search.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Observable } from 'rxjs/Observable';

/**
 * This component renders a simple item page.
 * The route parameter 'id' is used to request the item it represents.
 * All fields of the item that should be displayed, are defined in its template.
 */
const minSuffix = '.min';
const maxSuffix = '.max';
const dateFormats = ['YYYY', 'YYYY-MM', 'YYYY-MM-DD'];
const rangeDelimiter = '-';

@Component({
  selector: 'ds-search-range-filter',
  styleUrls: ['./search-range-filter.component.scss'],
  templateUrl: './search-range-filter.component.html',
  animations: [facetLoad]
})

@renderFacetFor(FilterType.range)
export class SearchRangeFilterComponent extends SearchFacetFilterComponent implements OnInit {
  min = 1950;
  max = 2018;
  range;

  constructor(protected searchService: SearchService,
              protected filterService: SearchFilterService,
              protected router: Router,
              protected rdbs: RemoteDataBuildService,
              @Inject(FILTER_CONFIG) public filterConfig: SearchFilterConfig,
              @Inject(PLATFORM_ID) private platformId: any,
              private route: ActivatedRoute) {
    super(searchService, filterService, rdbs, router, filterConfig);
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.min = moment(this.filterConfig.minValue, dateFormats).year() || this.min;
    this.max = moment(this.filterConfig.maxValue, dateFormats).year() || this.max;
    const iniMin = this.route.snapshot.queryParams[this.filterConfig.paramName + minSuffix] || this.min;
    const iniMax = this.route.snapshot.queryParams[this.filterConfig.paramName + maxSuffix] || this.max;
    this.range = [iniMin, iniMax];

  }

  getAddParams(value: string) {
    const parts = value.split(rangeDelimiter);
    const min = parts.length > 1 ? parts[0].trim() : value;
    const max = parts.length > 1 ? parts[1].trim() : value;
    return Observable.of(
      {
        [this.filterConfig.paramName + minSuffix]: [min],
        [this.filterConfig.paramName + maxSuffix]: [max],
        page: 1
      });
  }

  getRemoveParams(value: string) {
    return Observable.of(
      {
        [this.filterConfig.paramName + minSuffix]: null,
        [this.filterConfig.paramName + maxSuffix]: null,
        page: 1
      }
    );
  }


  onSubmit() {
    const newMin = this.range[0] !== this.min ? [this.range[0]] : null;
    const newMax = this.range[1] !== this.max ? [this.range[1]] : null;
    this.router.navigate([this.getSearchLink()], {
      queryParams:
        {
          [this.filterConfig.paramName + minSuffix]: newMin,
          [this.filterConfig.paramName + maxSuffix]: newMax
        },
      queryParamsHandling: 'merge'
    });
    this.filter = '';
  }

  /**
   * TODO when upgrading nouislider, verify that this check is still needed.
   */
  shouldShowSlider(): boolean {
    return isPlatformBrowser(this.platformId);
  }

}
