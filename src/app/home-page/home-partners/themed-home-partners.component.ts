import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { HomePartnersComponent } from './home-partners.component';

@Component({
  selector: 'ds-themed-home-partners',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})

/**
 * Component to render the partners section on the home page
 */
export class ThemedHomePartnersComponent extends ThemedComponent<HomePartnersComponent> {
  protected getComponentName(): string {
    return 'HomePartnersComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/home-page/home-partners/home-partners.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./home-partners.component`);
  }

}
