import { Component, } from '@angular/core';
import { HomeBlurbComponent as BaseComponent } from '../../../../../app/home-page/home-blurb/home-blurb.component';

@Component({
  selector: 'ds-home-blurb',
  templateUrl: './home-blurb.component.html',
  styleUrls: ['./home-blurb.component.scss']
})
export class HomeBlurbComponent extends BaseComponent {}
