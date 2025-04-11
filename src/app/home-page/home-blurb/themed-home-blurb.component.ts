import { Component } from '@angular/core';
import { ThemedComponent } from '../../shared/theme-support/themed.component';
import { HomeBlurbComponent } from './home-blurb.component';

@Component({
  selector: 'ds-themed-home-blurb',
  styleUrls: [],
  templateUrl: '../../shared/theme-support/themed.component.html',
})

/**
 * Component to render the blurb section on the home page
 */
export class ThemedHomeBlurbComponent extends ThemedComponent<HomeBlurbComponent> {
  protected getComponentName(): string {
    return 'HomeBlurbComponent';
  }

  protected importThemedComponent(themeName: string): Promise<any> {
    return import(`../../../themes/${themeName}/app/home-page/home-blurb/home-blurb.component`);
  }

  protected importUnthemedComponent(): Promise<any> {
    return import(`./home-blurb.component`);
  }

}
