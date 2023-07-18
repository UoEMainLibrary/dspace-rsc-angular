import { Component, OnInit } from '@angular/core';
import { fadeInOut, fadeOut } from '../../../../../app/shared/animations/fade';
import { AuthNavMenuComponent as BaseComponent } from '../../../../../app/shared/auth-nav-menu/auth-nav-menu.component';

@Component({
  selector: 'ds-auth-nav-menu',
  templateUrl: './auth-nav-menu.component.html',
  styleUrls: ['./auth-nav-menu.component.scss'],
  animations: [fadeInOut, fadeOut]
})
export class AuthNavMenuComponent extends BaseComponent {}
