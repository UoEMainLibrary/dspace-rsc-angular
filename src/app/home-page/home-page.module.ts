import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeNewsComponent } from './home-news/home-news.component';
import { HomePageRoutingModule } from './home-page-routing.module';

import { HomePageComponent } from './home-page.component';
import { TopLevelCommunityListComponent } from './top-level-community-list/top-level-community-list.component';
import { StatisticsModule } from '../statistics/statistics.module';
import { ThemedHomeNewsComponent } from './home-news/themed-home-news.component';
import { ThemedHomePageComponent } from './themed-home-page.component';
import { RecentItemListComponent } from './recent-item-list/recent-item-list.component';
import { JournalEntitiesModule } from '../entity-groups/journal-entities/journal-entities.module';
import { ResearchEntitiesModule } from '../entity-groups/research-entities/research-entities.module';
import { HomeBlurbComponent } from './home-blurb/home-blurb.component';
import { ThemedHomeBlurbComponent } from './home-blurb/themed-home-blurb.component';
import { HomePartnersComponent } from './home-partners/home-partners.component';
import { ThemedHomePartnersComponent } from './home-partners/themed-home-partners.component';

const DECLARATIONS = [
  HomePageComponent,
  ThemedHomePageComponent,
  TopLevelCommunityListComponent,
  ThemedHomeNewsComponent,
  HomeNewsComponent,
  RecentItemListComponent,
  HomeBlurbComponent,
  ThemedHomeBlurbComponent,
  HomePartnersComponent,
  ThemedHomePartnersComponent
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule.withEntryComponents(),
    JournalEntitiesModule.withEntryComponents(),
    ResearchEntitiesModule.withEntryComponents(),
    HomePageRoutingModule,
    StatisticsModule.forRoot()
  ],
  declarations: [
    ...DECLARATIONS,
    HomeBlurbComponent,
    HomePartnersComponent,
  ],
  exports: [
    ...DECLARATIONS,
  ],
})
export class HomePageModule {

}
