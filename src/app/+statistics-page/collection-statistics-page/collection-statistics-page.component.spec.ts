import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CollectionStatisticsPageComponent } from './collection-statistics-page.component';
import { StatisticsTableComponent } from '../statistics-table/statistics-table.component';
import { TranslateModule } from '@ngx-translate/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsageReportService } from '../../core/submission/usage-report-data.service';
import { of as observableOf } from 'rxjs';
import { RemoteData } from '../../core/data/remote-data';
import { Collection } from '../../core/shared/collection.model';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { UsageReport } from '../../core/statistics/models/usage-report.model';
import { SharedModule } from '../../shared/shared.module';
import { CommonModule } from '@angular/common';
import { DSONameService } from '../../core/breadcrumbs/dso-name.service';
import { DSpaceObjectDataService } from '../../core/data/dspace-object-data.service';

describe('CollectionStatisticsPageComponent', () => {

  let component: CollectionStatisticsPageComponent;
  let de: DebugElement;
  let fixture: ComponentFixture<CollectionStatisticsPageComponent>;

  beforeEach(async(() => {

    const activatedRoute = {
      data: observableOf({
        scope: new RemoteData(
          false,
          false,
          true,
          undefined,
          Object.assign(new Collection(), {
            id: 'collection_id',
          }),
        )
      })
    };

    const router = {
    };

    const usageReportService = {
      getStatistic: (scope, type) => undefined,
    };

    spyOn(usageReportService, 'getStatistic').and.callFake(
      (scope, type) => observableOf(
        Object.assign(
          new UsageReport(), {
            id: `${scope}-${type}-report`,
            points: [],
          }
        )
      )
    );

    const nameService = {
      getName: () => observableOf('test dso name'),
    };

    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        CommonModule,
        SharedModule,
      ],
      declarations: [
        CollectionStatisticsPageComponent,
        StatisticsTableComponent,
      ],
      providers: [
        { provide: ActivatedRoute, useValue: activatedRoute },
        { provide: Router, useValue: router },
        { provide: UsageReportService, useValue: usageReportService },
        { provide: DSpaceObjectDataService, useValue: {} },
        { provide: DSONameService, useValue: nameService },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollectionStatisticsPageComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resolve to the correct collection', () => {
    expect(de.query(By.css('.header')).nativeElement.id)
      .toEqual('collection_id');
  });

  it('should show a statistics table for each usage report', () => {
    expect(de.query(By.css('ds-statistics-table.collection_id-TotalVisits-report')).nativeElement)
      .toBeTruthy();
    expect(de.query(By.css('ds-statistics-table.collection_id-TotalVisitsPerMonth-report')).nativeElement)
      .toBeTruthy();
    expect(de.query(By.css('ds-statistics-table.collection_id-TopCountries-report')).nativeElement)
      .toBeTruthy();
    expect(de.query(By.css('ds-statistics-table.collection_id-TopCities-report')).nativeElement)
      .toBeTruthy();
  });
});
